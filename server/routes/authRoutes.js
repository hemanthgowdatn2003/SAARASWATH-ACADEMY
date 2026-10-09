const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const validateMiddleware = require('../middleware/validateMiddleware');
const { validateLogin } = require('../validators/authValidator');

router.post('/login', validateMiddleware(validateLogin), authController.login);
router.get('/me', authMiddleware, authController.getMe);

module.exports = router;
