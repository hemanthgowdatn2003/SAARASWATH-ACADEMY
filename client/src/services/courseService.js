import { request } from './api';
import { INITIAL_COURSES } from '../utils/constants';

export const courseService = {
  getAllCourses: async () => {
    try {
      const data = await request('/courses');
      return data.courses || data;
    } catch {
      // Return static fallback if server is offline
      return INITIAL_COURSES;
    }
  },

  getCourseById: async (id) => {
    try {
      const data = await request(`/courses/${id}`);
      return data.course || data;
    } catch {
      return INITIAL_COURSES.find(c => c.id === id) || null;
    }
  },

  createCourse: async (courseData) => {
    return await request('/courses', {
      method: 'POST',
      body: JSON.stringify(courseData),
    });
  },

  updateCourse: async (id, courseData) => {
    return await request(`/courses/${id}`, {
      method: 'PUT',
      body: JSON.stringify(courseData),
    });
  },

  deleteCourse: async (id) => {
    return await request(`/courses/${id}`, {
      method: 'DELETE',
    });
  }
};
