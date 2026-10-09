import { request } from './api';

export const dashboardService = {
  getStats: async () => {
    return await request('/admin/dashboard/stats');
  }
};
