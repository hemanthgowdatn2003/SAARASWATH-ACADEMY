const Faculty = require('../models/Faculty');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const getAllFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.find();
    return successResponse(res, { faculty }, 'Fetched faculty list');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const getFacultyById = async (req, res) => {
  try {
    const item = await Faculty.findById(req.params.id);
    if (!item) return errorResponse(res, 'Faculty member not found', 404);
    return successResponse(res, { faculty: item }, 'Fetched faculty member');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const createFaculty = async (req, res) => {
  try {
    const item = await Faculty.create(req.body);
    return successResponse(res, { faculty: item }, 'Faculty added successfully', 201);
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const updateFaculty = async (req, res) => {
  try {
    const item = await Faculty.findByIdAndUpdate(req.params.id, req.body);
    if (!item) return errorResponse(res, 'Faculty member not found to update', 404);
    return successResponse(res, { faculty: item }, 'Faculty updated successfully');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const deleteFaculty = async (req, res) => {
  try {
    const item = await Faculty.findByIdAndDelete(req.params.id);
    if (!item) return errorResponse(res, 'Faculty not found', 404);
    return successResponse(res, { faculty: item }, 'Faculty deleted successfully');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

module.exports = {
  getAllFaculty,
  getFacultyById,
  createFaculty,
  updateFaculty,
  deleteFaculty
};
