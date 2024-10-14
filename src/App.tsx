/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { getNews } from './services/newsApi';

//components
import Spinner from './components/Spinner';
import Header from './components/Header';
import Footer from './components/Footer';

import styles from './App.module.css';


interface Article {
  title: string;
  description: string;
  url: string;
}

const NewsComponent: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews('top-headlines', { country: 'us' });
        setArticles(data.articles);
      } catch (err) {
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles['main-container']}>
      <Header />
      {articles.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default NewsComponent;
