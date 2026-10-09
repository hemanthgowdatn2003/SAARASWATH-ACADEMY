import { request } from './api';

export const studyMaterialService = {
  // Public API
  getPublicMaterials: async (params = {}) => {
    const query = new URLSearchParams();
    if (params.resourceType && params.resourceType !== 'All') query.append('resourceType', params.resourceType);
    if (params.examination && params.examination !== 'All') query.append('examination', params.examination);
    if (params.subject && params.subject !== 'All') query.append('subject', params.subject);
    if (params.year && params.year !== 'All') query.append('year', params.year);
    if (params.search) query.append('search', params.search);
    if (params.page) query.append('page', params.page);
    if (params.limit) query.append('limit', params.limit);

    const queryString = query.toString() ? `?${query.toString()}` : '';
    const res = await request(`/study-materials${queryString}`);
    return res;
  },

  getMaterialById: async (id) => {
    return await request(`/study-materials/${id}`);
  },

  getDownloadUrl: (id) => {
    return `/api/study-materials/${id}/download`;
  },

  // Admin API
  getAdminMaterials: async (params = {}) => {
    const query = new URLSearchParams();
    if (params.resourceType && params.resourceType !== 'All') query.append('resourceType', params.resourceType);
    if (params.examination && params.examination !== 'All') query.append('examination', params.examination);
    if (params.subject && params.subject !== 'All') query.append('subject', params.subject);
    if (params.status && params.status !== 'All') query.append('status', params.status);
    if (params.search) query.append('search', params.search);
    if (params.page) query.append('page', params.page);
    if (params.limit) query.append('limit', params.limit);

    const queryString = query.toString() ? `?${query.toString()}` : '';
    return await request(`/admin/study-materials${queryString}`);
  },

  createMaterial: async (formData) => {
    return await request('/admin/study-materials', {
      method: 'POST',
      body: formData,
    });
  },

  updateMaterial: async (id, formData) => {
    return await request(`/admin/study-materials/${id}`, {
      method: 'PUT',
      body: formData,
    });
  },

  deleteMaterial: async (id) => {
    return await request(`/admin/study-materials/${id}`, {
      method: 'DELETE',
    });
  },

  togglePublish: async (id, isPublished) => {
    return await request(`/admin/study-materials/${id}/publish`, {
      method: 'PATCH',
      body: JSON.stringify({ isPublished }),
    });
  }
};
