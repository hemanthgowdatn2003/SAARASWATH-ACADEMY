const rateLimit = require('express-rate-limit');

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // limit each IP to 300 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes'
  }
});

const enquiryLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 20, // max 20 enquiries per hour
  message: {
    success: false,
    message: 'Too many admission inquiries submitted. Please call our counselors directly at 7619615566.'
  }
});

module.exports = {
  generalLimiter,
  enquiryLimiter
};
