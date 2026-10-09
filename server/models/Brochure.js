const store = require('./store');

const Brochure = {
  get: async () => ({ ...store.brochure }),
  update: async (data) => {
    store.brochure = { ...store.brochure, ...data, uploadedAt: new Date().toISOString() };
    return store.brochure;
  }
};

module.exports = Brochure;
