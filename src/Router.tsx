import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsComponent from './App';
import NewsArticleDetail from './components/NewsArticle';

const AppRouter: React.FC = () => {
  return (
    <Router basename="/fudo-news">
      <Routes>
        <Route path="/" element={<NewsComponent />} />
        <Route path="/article/:id" element={<NewsArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
