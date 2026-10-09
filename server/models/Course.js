const store = require('./store');

const Course = {
  find: async () => [...(store.courses || [])],
  findById: async (id) => (store.courses || []).find(c => c._id === id || c.id === id) || null,
  create: async (data) => {
    const newCourse = {
      _id: `course-${Date.now()}`,
      id: `course-${Date.now()}`,
      ...data,
      features: data.features || [
        'Comprehensive Prelims & Mains Syllabus Coverage',
        'Daily Current Affairs & Editorial Analysis',
        'Weekly Answer Writing Mentorship'
      ],
      createdAt: new Date().toISOString()
    };
    if (!store.courses) store.courses = [];
    store.courses.unshift(newCourse);
    store.save();
    return newCourse;
  },
  findByIdAndUpdate: async (id, updates) => {
    if (!store.courses) store.courses = [];
    const idx = store.courses.findIndex(c => c._id === id || c.id === id);
    if (idx === -1) return null;
    store.courses[idx] = { ...store.courses[idx], ...updates, updatedAt: new Date().toISOString() };
    store.save();
    return store.courses[idx];
  },
  findByIdAndDelete: async (id) => {
    if (!store.courses) store.courses = [];
    const idx = store.courses.findIndex(c => c._id === id || c.id === id);
    if (idx === -1) return null;
    const removed = store.courses.splice(idx, 1)[0];
    store.save();
    return removed;
  }
};

module.exports = Course;
