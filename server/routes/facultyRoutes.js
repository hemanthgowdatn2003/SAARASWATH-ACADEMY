const express = require('express');
const router = express.Router();
const facultyController = require('../controllers/facultyController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.get('/', facultyController.getAllFaculty);
router.get('/:id', facultyController.getFacultyById);
router.post('/', authMiddleware, adminMiddleware, facultyController.createFaculty);
router.put('/:id', authMiddleware, adminMiddleware, facultyController.updateFaculty);
router.delete('/:id', authMiddleware, adminMiddleware, facultyController.deleteFaculty);

module.exports = router;
