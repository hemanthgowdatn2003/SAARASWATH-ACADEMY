import { request } from './api';
import { INITIAL_GALLERY } from '../utils/constants';

export const galleryService = {
  getAllImages: async () => {
    try {
      const data = await request('/gallery');
      return data.items || data;
    } catch {
      return INITIAL_GALLERY;
    }
  },

  getAllGallery: async () => {
    try {
      const data = await request('/gallery');
      return data.items || data;
    } catch {
      return INITIAL_GALLERY;
    }
  },

  addImage: async (imageData) => {
    return await request('/gallery', {
      method: 'POST',
      body: JSON.stringify(imageData),
    });
  },

  createImage: async (imageData) => {
    return await request('/gallery', {
      method: 'POST',
      body: JSON.stringify(imageData),
    });
  },

  createGalleryItem: async (imageData) => {
    return await request('/gallery', {
      method: 'POST',
      body: JSON.stringify(imageData),
    });
  },

  updateImage: async (id, imageData) => {
    return await request(`/gallery/${id}`, {
      method: 'PUT',
      body: JSON.stringify(imageData),
    });
  },

  updateGalleryItem: async (id, imageData) => {
    return await request(`/gallery/${id}`, {
      method: 'PUT',
      body: JSON.stringify(imageData),
    });
  },

  deleteImage: async (id) => {
    return await request(`/gallery/${id}`, {
      method: 'DELETE',
    });
  },

  deleteGalleryItem: async (id) => {
    return await request(`/gallery/${id}`, {
      method: 'DELETE',
    });
  },

  uploadImageFile: async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    return await request('/upload/image', {
      method: 'POST',
      body: formData,
    });
  }
};
