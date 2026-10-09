const express = require('express');
const router = express.Router();
const achievementController = require('../controllers/achievementController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.get('/', achievementController.getAllAchievements);
router.get('/:id', achievementController.getAchievementById);
router.post('/', authMiddleware, adminMiddleware, achievementController.createAchievement);
router.put('/:id', authMiddleware, adminMiddleware, achievementController.updateAchievement);
router.delete('/:id', authMiddleware, adminMiddleware, achievementController.deleteAchievement);

module.exports = router;
