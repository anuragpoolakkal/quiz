import axios from 'axios';
import { API_URL } from '../config/constants';

export const quizAPI = {
  getPreviousAttempt: async (quizId) => {
    const response = await axios.get(`${API_URL}/attempts/${quizId}`);
    return response.data;
  },

  submitQuiz: async (quizId, answers) => {
    const response = await axios.post(`${API_URL}/attempts`, { quizId, answers });
    return response.data;
  },

  resetQuiz: async (quizId) => {
    const response = await axios.delete(`${API_URL}/attempts/${quizId}`);
    return response.data;
  },
};