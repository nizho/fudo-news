import React, { useEffect, useState } from 'react';
import { getNews, searchNews } from './services/newsApi';

//components
import Spinner from './components/Spinner';
import Header from './components/Header';
import Footer from './components/Footer';
import CardNews from './components/CardNews';
import EmptyState from './components/EmptyState'; // Importa el nuevo componente

import styles from './App.module.css';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  author: string;
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

  const handleSearch = async (query: string) => {
    const filteredQuery = query.replace(/[<>{}[\]/\\;:'"()-]+/g, '');
    
    setLoading(true);
    setError(null);
    
    try {
      const data = await searchNews(filteredQuery); 
      setArticles(data.articles);
    } catch (err) {
      setError('Failed to fetch news');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles['main-container']}>
      <Header onSearch={handleSearch} />
      <div className={styles['content-section']}>
        {articles.length === 0 ? (
          <EmptyState /> 
        ) : (
          articles.map((article, index) => {
            const { title, description, url, urlToImage, author } = article;
            if (!title || !description || !url || !author) {
              return null; 
            }
            
            return (
              <CardNews
                key={index}
                title={title}
                description={description}
                url={url}
                img={urlToImage}
                author={author}
              />
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
};

export default NewsComponent;
