import { request } from './api';

export const authService = {
  login: async (credentials) => {
    const response = await request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    if (response.token) {
      localStorage.setItem('saaraswath_admin_token', response.token);
      localStorage.setItem('saaraswath_admin_user', JSON.stringify(response.user));
    }
    return response;
  },

  logout: () => {
    localStorage.removeItem('saaraswath_admin_token');
    localStorage.removeItem('saaraswath_admin_user');
  },

  getCurrentUser: () => {
    const userStr = localStorage.getItem('saaraswath_admin_user');
    return userStr ? JSON.parse(userStr) : null;
  },

  verifyToken: async () => {
    return await request('/auth/me', { method: 'GET' });
  }
};
