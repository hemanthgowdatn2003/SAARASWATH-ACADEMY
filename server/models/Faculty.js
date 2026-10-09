const store = require('./store');

const Faculty = {
  find: async () => [...(store.faculty || [])],
  findById: async (id) => (store.faculty || []).find(f => f._id === id || f.id === id) || null,
  create: async (data) => {
    const item = {
      _id: `faculty-${Date.now()}`,
      id: `faculty-${Date.now()}`,
      ...data,
      createdAt: new Date().toISOString()
    };
    if (!store.faculty) store.faculty = [];
    store.faculty.push(item);
    store.save();
    return item;
  },
  findByIdAndUpdate: async (id, updates) => {
    if (!store.faculty) store.faculty = [];
    const idx = store.faculty.findIndex(f => f._id === id || f.id === id);
    if (idx === -1) return null;
    store.faculty[idx] = { ...store.faculty[idx], ...updates, updatedAt: new Date().toISOString() };
    store.save();
    return store.faculty[idx];
  },
  findByIdAndDelete: async (id) => {
    if (!store.faculty) store.faculty = [];
    const idx = store.faculty.findIndex(f => f._id === id || f.id === id);
    if (idx === -1) return null;
    const removed = store.faculty.splice(idx, 1)[0];
    store.save();
    return removed;
  }
};

module.exports = Faculty;
