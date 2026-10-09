const express = require('express');
const router = express.Router();
const studyMaterialController = require('../controllers/studyMaterialController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const pdfUpload = require('../middleware/pdfUploadMiddleware');

// Public study material endpoints
router.get('/', studyMaterialController.getPublicStudyMaterials);
router.get('/:id', studyMaterialController.getStudyMaterialById);
router.get('/:id/download', studyMaterialController.downloadStudyMaterial);

// Admin-only management endpoints (under /api/study-materials/admin or /api/admin/study-materials)
router.get('/admin/all', authMiddleware, adminMiddleware, studyMaterialController.getAdminStudyMaterials);
router.post('/admin', authMiddleware, adminMiddleware, pdfUpload.single('file'), studyMaterialController.createStudyMaterial);
router.put('/admin/:id', authMiddleware, adminMiddleware, pdfUpload.single('file'), studyMaterialController.updateStudyMaterial);
router.delete('/admin/:id', authMiddleware, adminMiddleware, studyMaterialController.deleteStudyMaterial);
router.patch('/admin/:id/publish', authMiddleware, adminMiddleware, studyMaterialController.togglePublish);

module.exports = router;
