import React, { useEffect, useState } from 'react';
import { getNews, searchNews } from '../../services/newsApi';

//components
import Spinner from '../../components/Spinner';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardNews from '../../components/CardNews';
import EmptyState from '../../components/EmptyState';
import ErrorMsg from '../../components/ErrorMsg';

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
  const [error, setError] = useState<boolean | null>(null);
  const [itemsToShow, setItemsToShow] = useState(20); 

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews('top-headlines', { country: 'us' });
        setArticles(data.articles);
      } catch (err) {
        setError(true);
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (bottom) {
        setItemsToShow((prev) => prev + 20);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = async (query: string) => {
    const filteredQuery = query.replace(/[<>{}[\]/\\;:'"()-]+/g, '');
    
    setLoading(true);
    setError(false);
    
    try {
      const data = await searchNews('everything',filteredQuery); 
      setArticles(data.articles);
      setItemsToShow(20); 
    } catch (err) {
      setError(true);
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

  const visibleArticles = articles.slice(0, itemsToShow);

  if (loading) return <Spinner />;
  if (error) return <ErrorMsg/>

  return (
    <div className={styles['main-container']}>
      <Header onSearch={handleSearch} />
      <div className={styles['content-section']}>
        {visibleArticles.length === 0 ? (
          <EmptyState /> 
        ) : (
          visibleArticles.map((article, index) => {
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
