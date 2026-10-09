const validateEnquiry = (data) => {
  const errors = {};
  const name = data.name || data.fullName;
  const phone = data.phone || data.mobile;
  const course = data.courseInterested || data.courseInterest || data.course;

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.name = 'Full name is required (min 2 characters)';
  }
  if (!phone || String(phone).replace(/\D/g, '').length < 10) {
    errors.phone = 'Valid 10-digit phone number is required';
  }
  if (!course) {
    errors.courseInterested = 'Course/program selection is required';
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

module.exports = { validateEnquiry };
