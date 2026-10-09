const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.get('/', galleryController.getAllGallery);
router.get('/:id', galleryController.getGalleryItemById);
router.post('/', authMiddleware, adminMiddleware, galleryController.createGalleryItem);
router.put('/:id', authMiddleware, adminMiddleware, galleryController.updateGalleryItem);
router.delete('/:id', authMiddleware, adminMiddleware, galleryController.deleteGalleryItem);

module.exports = router;
