const Brochure = require('../models/Brochure');
const uploadService = require('../services/uploadService');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const getBrochureInfo = async (req, res) => {
  try {
    const info = await Brochure.get();
    const exists = uploadService.brochureExists();
    return successResponse(res, { brochure: { ...info, exists } }, 'Brochure details fetched');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const updateBrochure = async (req, res) => {
  try {
    const filename = req.file ? req.file.filename : 'academy-brochure.pdf';
    const info = await Brochure.update({
      filename,
      filepath: `/brochures/${filename}`
    });
    return successResponse(res, { brochure: info }, 'Brochure uploaded and published successfully');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

module.exports = {
  getBrochureInfo,
  updateBrochure
};
