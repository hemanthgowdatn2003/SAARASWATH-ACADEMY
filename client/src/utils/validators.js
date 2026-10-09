export const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const isValidPhone = (phone) => {
  const cleaned = String(phone).replace(/\D/g, '');
  return cleaned.length === 10;
};

export const validateEnquiryForm = (data) => {
  const errors = {};
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Full name is required (at least 2 characters).";
  }
  if (!data.phone || !isValidPhone(data.phone)) {
    errors.phone = "Please enter a valid 10-digit Indian phone number.";
  }
  if (data.email && !isValidEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.courseInterested) {
    errors.courseInterested = "Please select a course/program of interest.";
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateContactForm = (data) => {
  const errors = {};
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Your name is required.";
  }
  if (!data.phone && !data.email) {
    errors.contact = "Either email or phone is required.";
  }
  if (data.email && !isValidEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
