const Enquiry = require('../models/Enquiry');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const getAllEnquiries = async (req, res) => {
  try {
    const { status, search, page = 1, limit = 20 } = req.query;
    const query = {};
    if (status && status !== 'All') query.status = status;
    if (search) query.search = search;

    const all = await Enquiry.find(query);
    const total = all.length;
    const newCount = all.filter(e => e.status === 'New').length;

    // Apply pagination in controller
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.max(1, parseInt(limit, 10) || 20);
    const startIndex = (pageNum - 1) * limitNum;
    const paginated = all.slice(startIndex, startIndex + limitNum);

    return successResponse(res, {
      enquiries: paginated,
      total,
      newCount,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum) || 1
    }, 'Fetched admission enquiries');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const getEnquiryById = async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) return errorResponse(res, 'Enquiry not found', 404);
    return successResponse(res, { enquiry }, 'Fetched enquiry details');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const createEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.create(req.body);
    return successResponse(res, { enquiry }, 'Admission enquiry received and registered successfully', 201);
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const updateEnquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ['New', 'Contacted', 'Follow-up', 'Closed'];
    if (status && !validStatuses.includes(status)) {
      return errorResponse(res, `Invalid status. Must be one of: ${validStatuses.join(', ')}`, 400);
    }
    const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, { status });
    if (!enquiry) return errorResponse(res, 'Enquiry not found', 404);
    return successResponse(res, { enquiry }, 'Enquiry status updated successfully');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const deleteEnquiry = async (req, res) => {
  try {
    const item = await Enquiry.findByIdAndDelete(req.params.id);
    if (!item) return errorResponse(res, 'Enquiry not found', 404);
    return successResponse(res, { enquiry: item }, 'Enquiry record deleted');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

module.exports = {
  getAllEnquiries,
  getEnquiryById,
  createEnquiry,
  updateEnquiryStatus,
  deleteEnquiry
};
