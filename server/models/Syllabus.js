const store = require('./store');

const Syllabus = {
  get: async () => ({ ...store.syllabus }),
  update: async (data) => {
    store.syllabus = { ...store.syllabus, ...data };
    return store.syllabus;
  }
};

module.exports = Syllabus;
