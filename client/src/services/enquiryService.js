import { request } from './api';

export const enquiryService = {
  submitEnquiry: async (enquiryData) => {
    return await request('/enquiries', {
      method: 'POST',
      body: JSON.stringify(enquiryData),
    });
  },

  getAllEnquiries: async (params = {}) => {
    const query = new URLSearchParams();
    if (params.status && params.status !== 'All') query.append('status', params.status);
    if (params.search) query.append('search', params.search);
    if (params.page) query.append('page', params.page);
    if (params.limit) query.append('limit', params.limit);

    const qs = query.toString() ? `?${query.toString()}` : '';
    return await request(`/enquiries${qs}`, { method: 'GET' });
  },

  getEnquiryById: async (id) => {
    return await request(`/enquiries/${id}`, { method: 'GET' });
  },

  updateEnquiryStatus: async (id, status) => {
    return await request(`/enquiries/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  },

  deleteEnquiry: async (id) => {
    return await request(`/enquiries/${id}`, {
      method: 'DELETE',
    });
  }
};
