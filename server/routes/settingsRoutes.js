const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.get('/', settingsController.getSettings);
router.put('/', authMiddleware, adminMiddleware, settingsController.updateSettings);

module.exports = router;
