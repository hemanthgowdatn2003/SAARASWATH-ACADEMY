const store = require('./store');
let mongoose;
try {
  mongoose = require('mongoose');
} catch (e) {}

let MongooseStudyMaterial = null;
if (mongoose && mongoose.models && mongoose.models.StudyMaterial) {
  MongooseStudyMaterial = mongoose.models.StudyMaterial;
} else if (mongoose) {
  try {
    const studyMaterialSchema = new mongoose.Schema({
      title: { type: String, required: true, trim: true },
      resourceType: {
        type: String,
        enum: ['Question Paper', 'Study Notes'],
        required: true
      },
      examination: {
        type: String,
        enum: ['UPSC', 'KAS', 'Other'],
        required: true
      },
      subject: { type: String, required: true },
      year: { type: String, default: '' },
      description: { type: String, default: '' },
      filePath: { type: String, required: true },
      fileName: { type: String, required: true },
      fileSize: { type: String, default: '1.5 MB' },
      isPublished: { type: Boolean, default: true },
      downloadCount: { type: Number, default: 0 },
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now }
    });
    MongooseStudyMaterial = mongoose.model('StudyMaterial', studyMaterialSchema);
  } catch (err) {}
}

const StudyMaterial = {
  find: async (query = {}) => {
    if (mongoose && mongoose.connection.readyState === 1 && MongooseStudyMaterial) {
      try {
        return await MongooseStudyMaterial.find(query).sort({ createdAt: -1 });
      } catch (e) {}
    }

    let list = [...(store.studyMaterials || [])];

    if (query.isPublished !== undefined) {
      const pub = String(query.isPublished) === 'true';
      list = list.filter(item => Boolean(item.isPublished) === pub);
    }

    if (query.resourceType && query.resourceType !== 'All') {
      list = list.filter(item =>
        item.resourceType && item.resourceType.toLowerCase() === query.resourceType.toLowerCase()
      );
    }

    if (query.examination && query.examination !== 'All') {
      list = list.filter(item =>
        item.examination && item.examination.toLowerCase() === query.examination.toLowerCase()
      );
    }

    if (query.subject && query.subject !== 'All') {
      list = list.filter(item =>
        item.subject && item.subject.toLowerCase() === query.subject.toLowerCase()
      );
    }

    if (query.year && query.year !== 'All') {
      list = list.filter(item => item.year === query.year);
    }

    if (query.search) {
      const q = query.search.toLowerCase();
      list = list.filter(item =>
        (item.title && item.title.toLowerCase().includes(q)) ||
        (item.subject && item.subject.toLowerCase().includes(q)) ||
        (item.description && item.description.toLowerCase().includes(q))
      );
    }

    // Sort newest first
    return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },

  findById: async (id) => {
    if (mongoose && mongoose.connection.readyState === 1 && MongooseStudyMaterial) {
      try {
        const item = await MongooseStudyMaterial.findById(id);
        if (item) return item;
      } catch (e) {}
    }
    return (store.studyMaterials || []).find(s => s._id === id || s.id === id) || null;
  },

  create: async (data) => {
    const id = `sm-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const newItem = {
      _id: id,
      id: id,
      title: data.title.trim(),
      resourceType: data.resourceType,
      examination: data.examination,
      subject: data.subject.trim(),
      year: data.year ? String(data.year).trim() : '',
      description: data.description ? data.description.trim() : '',
      filePath: data.filePath,
      fileName: data.fileName,
      fileSize: data.fileSize || '1.5 MB',
      isPublished: data.isPublished !== undefined ? Boolean(data.isPublished) : true,
      downloadCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    if (mongoose && mongoose.connection.readyState === 1 && MongooseStudyMaterial) {
      try {
        await MongooseStudyMaterial.create(newItem);
      } catch (e) {
        console.warn('[MongoDB StudyMaterial create error]', e.message);
      }
    }

    if (!store.studyMaterials) store.studyMaterials = [];
    store.studyMaterials.unshift(newItem);
    store.save();
    return newItem;
  },

  findByIdAndUpdate: async (id, updates) => {
    if (mongoose && mongoose.connection.readyState === 1 && MongooseStudyMaterial) {
      try {
        await MongooseStudyMaterial.findByIdAndUpdate(id, updates, { new: true });
      } catch (e) {}
    }

    if (!store.studyMaterials) store.studyMaterials = [];
    const idx = store.studyMaterials.findIndex(s => s._id === id || s.id === id);
    if (idx === -1) return null;
    store.studyMaterials[idx] = {
      ...store.studyMaterials[idx],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    store.save();
    return store.studyMaterials[idx];
  },

  findByIdAndDelete: async (id) => {
    if (mongoose && mongoose.connection.readyState === 1 && MongooseStudyMaterial) {
      try {
        await MongooseStudyMaterial.findByIdAndDelete(id);
      } catch (e) {}
    }

    if (!store.studyMaterials) store.studyMaterials = [];
    const idx = store.studyMaterials.findIndex(s => s._id === id || s.id === id);
    if (idx === -1) return null;
    const removed = store.studyMaterials.splice(idx, 1)[0];
    store.save();
    return removed;
  },

  incrementDownload: async (id) => {
    const item = await StudyMaterial.findById(id);
    if (!item) return null;
    return await StudyMaterial.findByIdAndUpdate(id, {
      downloadCount: (item.downloadCount || 0) + 1
    });
  },

  countDocuments: async (query = {}) => {
    const list = await StudyMaterial.find(query);
    return list.length;
  }
};

module.exports = StudyMaterial;
