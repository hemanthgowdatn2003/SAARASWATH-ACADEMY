import { request } from './api';
import { INITIAL_ACHIEVERS } from '../utils/constants';

export const achievementService = {
  getAllAchievements: async () => {
    try {
      const data = await request('/achievements');
      return data.achievements || data;
    } catch {
      return INITIAL_ACHIEVERS;
    }
  },

  createAchievement: async (achievementData) => {
    return await request('/achievements', {
      method: 'POST',
      body: JSON.stringify(achievementData),
    });
  },

  updateAchievement: async (id, achievementData) => {
    return await request(`/achievements/${id}`, {
      method: 'PUT',
      body: JSON.stringify(achievementData),
    });
  },

  deleteAchievement: async (id) => {
    return await request(`/achievements/${id}`, {
      method: 'DELETE',
    });
  }
};
