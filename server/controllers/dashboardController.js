const Course = require('../models/Course');
const Faculty = require('../models/Faculty');
const Achievement = require('../models/Achievement');
const Gallery = require('../models/Gallery');
const Enquiry = require('../models/Enquiry');
const StudyMaterial = require('../models/StudyMaterial');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const getDashboardStats = async (req, res) => {
  try {
    const [courses, faculty, achievers, gallery, enquiries, materials] = await Promise.all([
      Course.find(),
      Faculty.find(),
      Achievement.find(),
      Gallery.find(),
      Enquiry.find(),
      StudyMaterial.find()
    ]);

    const newEnquiries = enquiries.filter(e => e.status === 'New').length;
    const totalQuestionPapers = materials.filter(m => m.resourceType === 'Question Paper').length;
    const totalStudyNotes = materials.filter(m => m.resourceType === 'Study Notes').length;

    const stats = {
      totalCourses: courses.length,
      totalFaculty: faculty.length,
      totalAchievers: achievers.length,
      totalGallery: gallery.length,
      totalEnquiries: enquiries.length,
      newEnquiries,
      totalQuestionPapers,
      totalStudyNotes,
      totalStudyMaterials: materials.length,
      recentMaterials: materials.slice(0, 5),
      recentEnquiries: enquiries.slice(0, 5)
    };

    return successResponse(res, { stats }, 'Dashboard metrics loaded');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

module.exports = { getDashboardStats };
