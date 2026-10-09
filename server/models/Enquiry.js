const store = require('./store');
let mongoose;
try {
  mongoose = require('mongoose');
} catch (e) {
  // mongoose optional
}

let MongooseEnquiry = null;
if (mongoose && mongoose.models && mongoose.models.Enquiry) {
  MongooseEnquiry = mongoose.models.Enquiry;
} else if (mongoose) {
  try {
    const enquirySchema = new mongoose.Schema({
      name: { type: String, required: true, trim: true },
      phone: { type: String, required: true, trim: true },
      email: { type: String, trim: true, default: '' },
      courseInterested: { type: String, required: true },
      preferredContactMethod: { type: String, default: 'Phone' },
      preferredMode: { type: String, default: 'Classroom' },
      qualification: { type: String, default: '' },
      notes: { type: String, default: '' },
      consent: { type: Boolean, default: true },
      status: {
        type: String,
        enum: ['New', 'Contacted', 'Follow-up', 'Closed'],
        default: 'New'
      },
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now }
    });
    MongooseEnquiry = mongoose.model('Enquiry', enquirySchema);
  } catch (err) {
    // schema registration issue fallback
  }
}

const Enquiry = {
  find: async (query = {}) => {
    if (mongoose && mongoose.connection.readyState === 1 && MongooseEnquiry) {
      try {
        return await MongooseEnquiry.find(query).sort({ createdAt: -1 });
      } catch (e) {
        // Fall back to persistent local store
      }
    }
    let list = [...(store.enquiries || [])];
    if (query.status && query.status !== 'All') {
      list = list.filter(e => e.status && e.status.toLowerCase() === query.status.toLowerCase());
    }
    if (query.search) {
      const q = query.search.toLowerCase();
      list = list.filter(e =>
        (e.name && e.name.toLowerCase().includes(q)) ||
        (e.phone && e.phone.includes(q)) ||
        (e.courseInterested && e.courseInterested.toLowerCase().includes(q))
      );
    }
    // Always return newest first
    return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },

  findById: async (id) => {
    if (mongoose && mongoose.connection.readyState === 1 && MongooseEnquiry) {
      try {
        const item = await MongooseEnquiry.findById(id);
        if (item) return item;
      } catch (e) {}
    }
    return (store.enquiries || []).find(e => e._id === id || e.id === id) || null;
  },

  create: async (data) => {
    const id = `enq-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const fullName = (data.name || data.fullName || '').trim();
    const mobile = String(data.phone || data.mobile || '').trim();
    const course = data.courseInterested || data.courseInterest || data.course || 'UPSC/KAS General';

    const newItem = {
      _id: id,
      id: id,
      name: fullName,
      fullName: fullName,
      phone: mobile,
      mobile: mobile,
      email: data.email ? data.email.trim() : '',
      courseInterested: course,
      courseInterest: course,
      preferredContactMethod: data.preferredContactMethod || 'Phone',
      preferredMode: data.preferredMode || 'Classroom',
      qualification: data.qualification || '',
      notes: data.notes || data.message || '',
      message: data.message || data.notes || '',
      consent: data.consent !== undefined ? Boolean(data.consent) : true,
      status: 'New',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    if (mongoose && mongoose.connection.readyState === 1 && MongooseEnquiry) {
      try {
        await MongooseEnquiry.create(newItem);
      } catch (e) {
        console.warn('[MongoDB Enquiry create error]', e.message);
      }
    }

    if (!store.enquiries) store.enquiries = [];
    store.enquiries.unshift(newItem);
    store.save();
    return newItem;
  },

  findByIdAndUpdate: async (id, updates) => {
    if (mongoose && mongoose.connection.readyState === 1 && MongooseEnquiry) {
      try {
        await MongooseEnquiry.findByIdAndUpdate(id, updates, { new: true });
      } catch (e) {}
    }

    if (!store.enquiries) store.enquiries = [];
    const idx = store.enquiries.findIndex(e => e._id === id || e.id === id);
    if (idx === -1) return null;
    store.enquiries[idx] = {
      ...store.enquiries[idx],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    store.save();
    return store.enquiries[idx];
  },

  findByIdAndDelete: async (id) => {
    if (mongoose && mongoose.connection.readyState === 1 && MongooseEnquiry) {
      try {
        await MongooseEnquiry.findByIdAndDelete(id);
      } catch (e) {}
    }

    if (!store.enquiries) store.enquiries = [];
    const idx = store.enquiries.findIndex(e => e._id === id || e.id === id);
    if (idx === -1) return null;
    const removed = store.enquiries.splice(idx, 1)[0];
    store.save();
    return removed;
  },

  countDocuments: async (query = {}) => {
    const list = await Enquiry.find(query);
    return list.length;
  }
};

module.exports = Enquiry;
