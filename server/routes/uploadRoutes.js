const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const authMiddleware = require('../middleware/authMiddleware');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const imageDir = path.resolve(__dirname, '../uploads/images');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imageDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const cleanName = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    cb(null, `${cleanName}-${Date.now()}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = ['.jpg', '.jpeg', '.png', '.webp', '.svg'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowed.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid image type. Only JPG, PNG, WEBP, and SVG are accepted.'));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB
});

router.post('/image', authMiddleware, upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return errorResponse(res, 'No image file uploaded', 400);
    }

    const imageUrl = `/uploads/images/${req.file.filename}`;
    return successResponse(res, {
      imageUrl,
      filename: req.file.filename,
      size: req.file.size
    }, 'Image uploaded successfully', 201);
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
});

module.exports = router;
