import { request } from './api';
import { INITIAL_FACULTY } from '../utils/constants';

export const facultyService = {
  getAllFaculty: async () => {
    try {
      const data = await request('/faculty');
      return data.faculty || data;
    } catch {
      return INITIAL_FACULTY;
    }
  },

  getFacultyById: async (id) => {
    try {
      const data = await request(`/faculty/${id}`);
      return data.faculty || data;
    } catch {
      return INITIAL_FACULTY.find(f => f.id === id) || null;
    }
  },

  createFaculty: async (facultyData) => {
    return await request('/faculty', {
      method: 'POST',
      body: JSON.stringify(facultyData),
    });
  },

  updateFaculty: async (id, facultyData) => {
    return await request(`/faculty/${id}`, {
      method: 'PUT',
      body: JSON.stringify(facultyData),
    });
  },

  deleteFaculty: async (id) => {
    return await request(`/faculty/${id}`, {
      method: 'DELETE',
    });
  },

  uploadFacultyPhoto: async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    return await request('/upload/image', {
      method: 'POST',
      body: formData,
    });
  }
};
