const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const validateMiddleware = require('../middleware/validateMiddleware');
const { validateCourse } = require('../validators/courseValidator');

router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.post('/', authMiddleware, adminMiddleware, validateMiddleware(validateCourse), courseController.createCourse);
router.put('/:id', authMiddleware, adminMiddleware, courseController.updateCourse);
router.delete('/:id', authMiddleware, adminMiddleware, courseController.deleteCourse);

module.exports = router;
