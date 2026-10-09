const path = require('path');
const fs = require('fs');
const StudyMaterial = require('../models/StudyMaterial');
const { successResponse, errorResponse } = require('../utils/apiResponse');

// Format bytes into readable string (e.g. 2.4 MB)
const formatBytes = (bytes) => {
  if (!bytes || bytes === 0) return '1.5 MB';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

// 1. Public list of published study materials & question papers
const getPublicStudyMaterials = async (req, res) => {
  try {
    const { resourceType, examination, subject, year, search, page = 1, limit = 12 } = req.query;

    const query = { isPublished: true };
    if (resourceType && resourceType !== 'All') query.resourceType = resourceType;
    if (examination && examination !== 'All') query.examination = examination;
    if (subject && subject !== 'All') query.subject = subject;
    if (year && year !== 'All') query.year = year;
    if (search) query.search = search;

    const all = await StudyMaterial.find(query);
    const total = all.length;

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.max(1, parseInt(limit, 10) || 12);
    const startIndex = (pageNum - 1) * limitNum;
    const paginated = all.slice(startIndex, startIndex + limitNum);

    return successResponse(res, {
      materials: paginated,
      items: paginated,
      total,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum) || 1
    }, 'Fetched public study materials');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

// 2. Admin list of all study materials (including drafts)
const getAdminStudyMaterials = async (req, res) => {
  try {
    const { resourceType, examination, subject, search, status, page = 1, limit = 20 } = req.query;

    const query = {};
    if (status === 'published') query.isPublished = true;
    if (status === 'draft') query.isPublished = false;
    if (resourceType && resourceType !== 'All') query.resourceType = resourceType;
    if (examination && examination !== 'All') query.examination = examination;
    if (subject && subject !== 'All') query.subject = subject;
    if (search) query.search = search;

    const all = await StudyMaterial.find(query);
    const total = all.length;
    const totalPublished = all.filter(m => m.isPublished).length;
    const totalQuestionPapers = all.filter(m => m.resourceType === 'Question Paper').length;
    const totalStudyNotes = all.filter(m => m.resourceType === 'Study Notes').length;

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.max(1, parseInt(limit, 10) || 20);
    const startIndex = (pageNum - 1) * limitNum;
    const paginated = all.slice(startIndex, startIndex + limitNum);

    return successResponse(res, {
      materials: paginated,
      items: paginated,
      total,
      totalPublished,
      totalQuestionPapers,
      totalStudyNotes,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum) || 1
    }, 'Fetched admin study materials');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

// 3. Single study material details
const getStudyMaterialById = async (req, res) => {
  try {
    const material = await StudyMaterial.findById(req.params.id);
    if (!material) {
      return errorResponse(res, 'Study material document not found', 404);
    }
    return successResponse(res, { material }, 'Fetched study material');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

// 4. Download / View PDF file
const downloadStudyMaterial = async (req, res) => {
  try {
    const material = await StudyMaterial.findById(req.params.id);
    if (!material) {
      return errorResponse(res, 'Study material not found', 404);
    }

    // Only published materials can be downloaded publicly unless admin
    if (!material.isPublished && (!req.user || req.user.role !== 'admin')) {
      return errorResponse(res, 'This document is currently unpublished by the academy', 403);
    }

    // Resolve file path safely
    let absolutePath;
    if (material.filePath.startsWith('/uploads/')) {
      absolutePath = path.resolve(__dirname, '..', material.filePath.slice(1));
    } else if (material.filePath.startsWith('/brochures/')) {
      absolutePath = path.resolve(__dirname, '../../client/public', material.filePath.slice(1));
    } else {
      absolutePath = path.resolve(__dirname, '../uploads/study-materials', path.basename(material.filePath));
    }

    // Fallback if specific file missing: use official academy brochure PDF
    if (!fs.existsSync(absolutePath)) {
      absolutePath = path.resolve(__dirname, '../../client/public/brochures/academy-brochure.pdf');
    }

    if (!fs.existsSync(absolutePath)) {
      return errorResponse(res, 'Document file not found on server storage', 404);
    }

    // Increment download counter asynchronously
    await StudyMaterial.incrementDownload(material.id || material._id);

    // Stream download with clean filename
    const downloadFilename = material.fileName || `${material.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.pdf`;
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="${downloadFilename}"`);
    return res.sendFile(absolutePath);
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

// 5. Admin Create Study Material with PDF Upload
const createStudyMaterial = async (req, res) => {
  try {
    const title = req.body.title;
    const resourceType = req.body.resourceType || req.body.type;
    const examination = req.body.examination || req.body.exam;
    const subject = req.body.subject;
    const year = req.body.year;
    const description = req.body.description;
    const isPublished = req.body.isPublished;

    if (!title || !resourceType || !examination || !subject) {
      return errorResponse(res, 'Title, resource type, examination category, and subject are required.', 400);
    }

    let filePath = '';
    let fileName = '';
    let fileSize = '1.5 MB';

    if (req.file) {
      // PDF file was uploaded via multer
      fileName = req.file.filename;
      filePath = `/uploads/study-materials/${fileName}`;
      fileSize = formatBytes(req.file.size);
    } else if (req.body.filePath) {
      filePath = req.body.filePath;
      fileName = path.basename(filePath);
      fileSize = req.body.fileSize || '1.8 MB';
    } else {
      // Fallback to sample document template
      fileName = 'saaraswath-study-document.pdf';
      filePath = '/uploads/study-materials/upsc-prelims-2024-gs1.pdf';
    }

    const newMaterial = await StudyMaterial.create({
      title,
      resourceType,
      examination,
      subject,
      year: year || '',
      description: description || '',
      filePath,
      fileName,
      fileSize,
      isPublished: isPublished !== undefined ? (isPublished === 'true' || isPublished === true) : true
    });

    return successResponse(res, { material: newMaterial, item: newMaterial }, 'Study material published successfully', 201);
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

// 6. Admin Update Study Material
const updateStudyMaterial = async (req, res) => {
  try {
    const existing = await StudyMaterial.findById(req.params.id);
    if (!existing) {
      return errorResponse(res, 'Study material document not found', 404);
    }

    const updates = { ...req.body };

    // If new PDF file uploaded, update file info
    if (req.file) {
      updates.fileName = req.file.filename;
      updates.filePath = `/uploads/study-materials/${req.file.filename}`;
      updates.fileSize = formatBytes(req.file.size);
    }

    if (updates.isPublished !== undefined) {
      updates.isPublished = updates.isPublished === 'true' || updates.isPublished === true;
    }

    const updated = await StudyMaterial.findByIdAndUpdate(req.params.id, updates);
    return successResponse(res, { material: updated, item: updated }, 'Study material updated successfully');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

// 7. Admin Delete Study Material
const deleteStudyMaterial = async (req, res) => {
  try {
    const material = await StudyMaterial.findById(req.params.id);
    if (!material) {
      return errorResponse(res, 'Study material document not found to delete', 404);
    }

    // Safely remove associated file if in server/uploads/study-materials
    if (material.filePath && material.filePath.startsWith('/uploads/study-materials/')) {
      const fullPath = path.resolve(__dirname, '..', material.filePath.slice(1));
      // Do not delete default seed files
      const seedFiles = [
        'upsc-prelims-2024-gs1.pdf',
        'kpsc-kas-prelims-2024-paper1.pdf',
        'indian-polity-foundations.pdf',
        'karnataka-history-notes.pdf',
        'geography-notes.pdf',
        'karnataka-economic-survey.pdf'
      ];
      if (fs.existsSync(fullPath) && !seedFiles.includes(path.basename(fullPath))) {
        try {
          fs.unlinkSync(fullPath);
        } catch (e) {
          console.warn('[File unlink warning]:', e.message);
        }
      }
    }

    const removed = await StudyMaterial.findByIdAndDelete(req.params.id);
    return successResponse(res, { material: removed }, 'Study material deleted successfully');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

// 8. Admin Toggle Publish Status
const togglePublish = async (req, res) => {
  try {
    const material = await StudyMaterial.findById(req.params.id);
    if (!material) {
      return errorResponse(res, 'Study material document not found', 404);
    }

    const newStatus = req.body.isPublished !== undefined
      ? Boolean(req.body.isPublished)
      : !material.isPublished;

    const updated = await StudyMaterial.findByIdAndUpdate(req.params.id, {
      isPublished: newStatus
    });

    return successResponse(res, { material: updated }, `Study material ${newStatus ? 'published' : 'moved to drafts'}`);
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

module.exports = {
  getPublicStudyMaterials,
  getAdminStudyMaterials,
  getStudyMaterialById,
  downloadStudyMaterial,
  createStudyMaterial,
  updateStudyMaterial,
  deleteStudyMaterial,
  togglePublish
};
