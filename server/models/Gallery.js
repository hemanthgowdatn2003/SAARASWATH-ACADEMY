const store = require('./store');

const Gallery = {
  find: async () => [...(store.gallery || [])],
  findById: async (id) => (store.gallery || []).find(g => g._id === id || g.id === id) || null,
  create: async (data) => {
    const item = {
      _id: `gallery-${Date.now()}`,
      id: `gallery-${Date.now()}`,
      ...data,
      createdAt: new Date().toISOString()
    };
    if (!store.gallery) store.gallery = [];
    store.gallery.push(item);
    store.save();
    return item;
  },
  findByIdAndUpdate: async (id, updates) => {
    if (!store.gallery) store.gallery = [];
    const idx = store.gallery.findIndex(g => g._id === id || g.id === id);
    if (idx === -1) return null;
    store.gallery[idx] = { ...store.gallery[idx], ...updates, updatedAt: new Date().toISOString() };
    store.save();
    return store.gallery[idx];
  },
  findByIdAndDelete: async (id) => {
    if (!store.gallery) store.gallery = [];
    const idx = store.gallery.findIndex(g => g._id === id || g.id === id);
    if (idx === -1) return null;
    const removed = store.gallery.splice(idx, 1)[0];
    store.save();
    return removed;
  }
};

module.exports = Gallery;
