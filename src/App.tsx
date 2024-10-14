/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { getNews } from './services/newsApi';

//components
import Spinner from './components/Spinner';
import Header from './components/Header';
import Footer from './components/Footer';
import CardNews from './components/CardNews';

import styles from './App.module.css';


interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  author: string
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
      <div className={styles['content-section']}>
        {articles.map((article, index) => (
          <CardNews
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            img={article.urlToImage}
            author={article.author}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default NewsComponent;
