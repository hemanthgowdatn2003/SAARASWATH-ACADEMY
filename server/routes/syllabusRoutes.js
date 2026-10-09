const express = require('express');
const router = express.Router();
const syllabusController = require('../controllers/syllabusController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.get('/', syllabusController.getSyllabus);
router.put('/', authMiddleware, adminMiddleware, syllabusController.updateSyllabus);

module.exports = router;
