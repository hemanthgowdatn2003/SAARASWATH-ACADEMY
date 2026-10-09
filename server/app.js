const express = require('express');
const cors = require('cors');
const path = require('path');
const { corsOptions } = require('./config/cors');
const { generalLimiter } = require('./middleware/rateLimiter');
const errorMiddleware = require('./middleware/errorMiddleware');

// Route imports
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const facultyRoutes = require('./routes/facultyRoutes');
const achievementRoutes = require('./routes/achievementRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');
const studyMaterialRoutes = require('./routes/studyMaterialRoutes');
const adminStudyMaterialRoutes = require('./routes/adminStudyMaterialRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const syllabusRoutes = require('./routes/syllabusRoutes');
const brochureRoutes = require('./routes/brochureRoutes');
const settingsRoutes = require('./routes/settingsRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();

// Security and utility middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', generalLimiter);

// Serve persistent uploads (study materials, PDFs, uploaded images)
app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));
app.use('/brochures', express.static(path.resolve(__dirname, '../client/public/brochures')));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    academy: 'Saaraswath IAS/KAS Academy Mysuru',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/admin/enquiries', enquiryRoutes); // Direct admin enquiry alias
app.use('/api/study-materials', studyMaterialRoutes);
app.use('/api/admin/study-materials', adminStudyMaterialRoutes);
app.use('/api/admin/dashboard', dashboardRoutes);
app.use('/api/syllabus', syllabusRoutes);
app.use('/api/brochure', brochureRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/upload', uploadRoutes);

// Catch 404 on API endpoints
app.use('/api/*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `API route not found: ${req.originalUrl}`
  });
});

// Central error handler
app.use(errorMiddleware);

module.exports = app;
