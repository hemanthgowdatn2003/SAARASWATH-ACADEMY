const express = require('express');
const router = express.Router();
const brochureController = require('../controllers/brochureController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.get('/', brochureController.getBrochureInfo);
router.post('/upload', authMiddleware, adminMiddleware, upload.single('brochure'), brochureController.updateBrochure);

module.exports = router;
