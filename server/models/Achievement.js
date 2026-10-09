const store = require('./store');

const Achievement = {
  find: async () => [...(store.achievers || [])],
  findById: async (id) => (store.achievers || []).find(a => a._id === id || a.id === id) || null,
  create: async (data) => {
    const item = {
      _id: `achiever-${Date.now()}`,
      id: `achiever-${Date.now()}`,
      ...data,
      createdAt: new Date().toISOString()
    };
    if (!store.achievers) store.achievers = [];
    store.achievers.push(item);
    store.save();
    return item;
  },
  findByIdAndUpdate: async (id, updates) => {
    if (!store.achievers) store.achievers = [];
    const idx = store.achievers.findIndex(a => a._id === id || a.id === id);
    if (idx === -1) return null;
    store.achievers[idx] = { ...store.achievers[idx], ...updates, updatedAt: new Date().toISOString() };
    store.save();
    return store.achievers[idx];
  },
  findByIdAndDelete: async (id) => {
    if (!store.achievers) store.achievers = [];
    const idx = store.achievers.findIndex(a => a._id === id || a.id === id);
    if (idx === -1) return null;
    const removed = store.achievers.splice(idx, 1)[0];
    store.save();
    return removed;
  }
};

module.exports = Achievement;
