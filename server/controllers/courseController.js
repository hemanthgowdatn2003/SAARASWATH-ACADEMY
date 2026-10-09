const Course = require('../models/Course');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    return successResponse(res, { courses }, 'Fetched all courses');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return errorResponse(res, 'Course not found', 404);
    }
    return successResponse(res, { course }, 'Fetched course details');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    return successResponse(res, { course }, 'Course created successfully', 201);
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body);
    if (!course) {
      return errorResponse(res, 'Course not found to update', 404);
    }
    return successResponse(res, { course }, 'Course updated successfully');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const deleteCourse = async (req, res) => {
  try {
    const removed = await Course.findByIdAndDelete(req.params.id);
    if (!removed) {
      return errorResponse(res, 'Course not found to delete', 404);
    }
    return successResponse(res, { course: removed }, 'Course deleted successfully');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
};
