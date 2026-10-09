const Achievement = require('../models/Achievement');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const getAllAchievements = async (req, res) => {
  try {
    const list = await Achievement.find();
    return successResponse(res, { achievements: list }, 'Fetched all achievers');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const getAchievementById = async (req, res) => {
  try {
    const item = await Achievement.findById(req.params.id);
    if (!item) return errorResponse(res, 'Achiever not found', 404);
    return successResponse(res, { achievement: item }, 'Fetched achiever');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const createAchievement = async (req, res) => {
  try {
    const item = await Achievement.create(req.body);
    return successResponse(res, { achievement: item }, 'Achiever added successfully', 201);
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const updateAchievement = async (req, res) => {
  try {
    const item = await Achievement.findByIdAndUpdate(req.params.id, req.body);
    if (!item) return errorResponse(res, 'Achiever not found to update', 404);
    return successResponse(res, { achievement: item }, 'Achiever updated successfully');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const deleteAchievement = async (req, res) => {
  try {
    const item = await Achievement.findByIdAndDelete(req.params.id);
    if (!item) return errorResponse(res, 'Achiever not found', 404);
    return successResponse(res, { achievement: item }, 'Achiever deleted successfully');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

module.exports = {
  getAllAchievements,
  getAchievementById,
  createAchievement,
  updateAchievement,
  deleteAchievement
};
