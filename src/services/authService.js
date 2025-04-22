// src/services/authService.js
import api from './api';

export const loginUser = async (username, password) => {
  try {
    const response = await api.post('login/', { username, password });
    const { access, refresh } = response.data;

    if (access && refresh) {
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      return { success: true };
    } else {
      return { success: false, message: 'Tokens no encontrados en la respuesta.' };
    }
  } catch (error) {
    return { success: false, message: error.response?.data || error.message };
  }
};

export const logoutUser = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};