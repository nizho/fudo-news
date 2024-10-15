import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_NEWS_API_KEY}`,
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

export const searchNews = async (query: string, params = {}) => {
  try {
    const response = await api.get('everything', {
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