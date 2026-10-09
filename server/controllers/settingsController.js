const SiteSettings = require('../models/SiteSettings');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const getSettings = async (req, res) => {
  try {
    const settings = await SiteSettings.get();
    return successResponse(res, { settings }, 'Fetched site settings');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const updateSettings = async (req, res) => {
  try {
    const settings = await SiteSettings.update(req.body);
    return successResponse(res, { settings }, 'Settings updated successfully');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

module.exports = {
  getSettings,
  updateSettings
};
