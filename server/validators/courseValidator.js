const validateCourse = (data) => {
  const errors = {};
  if (!data.title || typeof data.title !== 'string' || data.title.trim().length < 3) {
    errors.title = 'Course title is required (min 3 characters)';
  }
  if (!data.category) {
    errors.category = 'Course category is required';
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

module.exports = { validateCourse };
