// src/services/ratingService.js
import api from './api';

export const addRating = async (fileId, rating) => {
  try {
    const response = await api.post(`file/${fileId}/add_rating/`, { rating });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error.response?.data || error.message };
  }
};