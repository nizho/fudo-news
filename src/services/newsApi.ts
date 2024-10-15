import axios from 'axios';

const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';

const api = axios.create({
  baseURL: isProduction
  ? import.meta.env.VITE_BFF_URL
  : 'http://localhost:3001/news/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getNews = async (endpoint: string, params = {}) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching news', error);
    throw error;
  }
};

export const searchNews = async (endpoint: string, query: string, params = {}) => {
  try {
    const response = await api.get(endpoint, {
      params: {
        q: query,
        ...params,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news', error);
    throw error;
  }
};
