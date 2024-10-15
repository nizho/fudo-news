require('dotenv').config();

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());


const API_KEY = process.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2/'


app.get('/news/top-headlines', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        apiKey: API_KEY,
        ...req.query,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    res.status(500).json({ error: 'Error fetching top headlines' });
  }
});


app.get('/news/everything', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        apiKey: API_KEY,
        ...req.query, 
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error searching news:', error);
    res.status(500).json({ error: 'Error searching news' });
  }
});


app.listen(PORT, () => {
  console.log(`BFF server running on http://localhost:${PORT}`);
});
