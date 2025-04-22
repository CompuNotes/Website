// src/services/authService.js
import api from './api';

export const fetchFiles = async () => {
    try {
      const response = await api.get('/file/');
      return response.data; // The list of files
    } catch (error) {
      console.error('Error fetching files:', error);
      throw error;
    }
  };