const validateLogin = (data) => {
  const errors = {};
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Valid email address is required';
  }
  if (!data.password || data.password.length < 4) {
    errors.password = 'Password must be at least 4 characters';
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

module.exports = { validateLogin };
