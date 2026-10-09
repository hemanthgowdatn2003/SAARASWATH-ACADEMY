const authService = require('../services/authService');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.loginAdmin(email, password);
    return successResponse(res, result, 'Login successful');
  } catch (err) {
    return errorResponse(res, err.message, 401);
  }
};

const getMe = async (req, res) => {
  try {
    return successResponse(res, { user: req.user }, 'Current user profile');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

module.exports = {
  login,
  getMe
};
