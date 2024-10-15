import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsComponent from './App';
import ArticleDetail from './components/Article';

const AppRouter: React.FC = () => {
  return (
    <Router basename="/fudo-news">
      <Routes>
        <Route path="/" element={<NewsComponent />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
