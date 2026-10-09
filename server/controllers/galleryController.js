const Gallery = require('../models/Gallery');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const getAllGallery = async (req, res) => {
  try {
    const items = await Gallery.find();
    return successResponse(res, { items }, 'Fetched gallery items');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const getGalleryItemById = async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);
    if (!item) return errorResponse(res, 'Item not found', 404);
    return successResponse(res, { item }, 'Fetched gallery item');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const createGalleryItem = async (req, res) => {
  try {
    const item = await Gallery.create(req.body);
    return successResponse(res, { item }, 'Gallery item added', 201);
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const updateGalleryItem = async (req, res) => {
  try {
    const item = await Gallery.findByIdAndUpdate(req.params.id, req.body);
    if (!item) return errorResponse(res, 'Gallery item not found to update', 404);
    return successResponse(res, { item }, 'Gallery item updated');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

const deleteGalleryItem = async (req, res) => {
  try {
    const item = await Gallery.findByIdAndDelete(req.params.id);
    if (!item) return errorResponse(res, 'Item not found', 404);
    return successResponse(res, { item }, 'Gallery item deleted');
  } catch (err) {
    return errorResponse(res, err.message, 500);
  }
};

module.exports = {
  getAllGallery,
  getGalleryItemById,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem
};
