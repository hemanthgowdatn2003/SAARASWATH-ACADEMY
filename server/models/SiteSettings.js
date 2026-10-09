const store = require('./store');

const SiteSettings = {
  get: async () => ({ ...store.settings }),
  update: async (data) => {
    store.settings = { ...store.settings, ...data };
    return store.settings;
  }
};

module.exports = SiteSettings;
