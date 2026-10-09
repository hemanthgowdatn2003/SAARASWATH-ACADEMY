const express = require('express');
const router = express.Router();
const enquiryController = require('../controllers/enquiryController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const validateMiddleware = require('../middleware/validateMiddleware');
const { validateEnquiry } = require('../validators/enquiryValidator');
const { enquiryLimiter } = require('../middleware/rateLimiter');

// Public submission
router.post('/', enquiryLimiter, validateMiddleware(validateEnquiry), enquiryController.createEnquiry);

// Admin-only management routes
router.get('/', authMiddleware, adminMiddleware, enquiryController.getAllEnquiries);
router.get('/:id', authMiddleware, adminMiddleware, enquiryController.getEnquiryById);
router.patch('/:id/status', authMiddleware, adminMiddleware, enquiryController.updateEnquiryStatus);
router.patch('/:id', authMiddleware, adminMiddleware, enquiryController.updateEnquiryStatus);
router.delete('/:id', authMiddleware, adminMiddleware, enquiryController.deleteEnquiry);

module.exports = router;
