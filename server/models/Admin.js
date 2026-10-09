const store = require('./store');

const Admin = {
  findOne: async (query) => {
    if (query.email) {
      return store.admins.find(a => a.email.toLowerCase() === query.email.toLowerCase()) || null;
    }
    if (query._id || query.id) {
      return store.admins.find(a => a._id === (query._id || query.id)) || null;
    }
    return null;
  },

  findById: async (id) => {
    return store.admins.find(a => a._id === id || a.id === id) || null;
  },

  create: async (adminData) => {
    const newAdmin = {
      _id: `admin-${Date.now()}`,
      id: `admin-${Date.now()}`,
      ...adminData,
      createdAt: new Date()
    };
    store.admins.push(newAdmin);
    return newAdmin;
  }
};

module.exports = Admin;
