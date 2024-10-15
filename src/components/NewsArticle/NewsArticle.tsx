
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './NewsArticle.module.css';

const NewsArticle: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className={styles['article-container']}>
      {/* Ready for custom article details */}
    </div>
  );
};

export default NewsArticle;
