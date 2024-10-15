
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Article.module.css';

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className={styles['article-container']}>
      {/* Ready for custom article details */}
    </div>
  );
};

export default Article;
