const express = require('express');
const router = express.Router();
const studyMaterialController = require('../controllers/studyMaterialController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const pdfUpload = require('../middleware/pdfUploadMiddleware');

// All routes here are admin-protected
router.use(authMiddleware, adminMiddleware);

router.get('/', studyMaterialController.getAdminStudyMaterials);
router.post('/', pdfUpload.single('file'), studyMaterialController.createStudyMaterial);
router.put('/:id', pdfUpload.single('file'), studyMaterialController.updateStudyMaterial);
router.delete('/:id', studyMaterialController.deleteStudyMaterial);
router.patch('/:id/publish', studyMaterialController.togglePublish);

module.exports = router;
