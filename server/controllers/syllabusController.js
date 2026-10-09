const Syllabus = require('../models/Syllabus');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const getSyllabus = async (req, res) => {
  try {
    const data = await Syllabus.get();
    return successResponse(res, { syllabus: data }, 'Fetched syllabus data');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const updateSyllabus = async (req, res) => {
  try {
    const data = await Syllabus.update(req.body);
    return successResponse(res, { syllabus: data }, 'Syllabus updated successfully');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

module.exports = {
  getSyllabus,
  updateSyllabus
};
