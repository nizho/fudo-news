import React from 'react';
import styles from './CardNews.module.css';
import imgNotAvailable from './../../assets/no-image.jpeg'

interface CardNewsProps {
    title: string;
    description: string;
    url: string;
    img: string;
    author: string;
  }
const CardNews: React.FC<CardNewsProps> = ({ title, description, url, img, author }) => {
    const handleClick = () => {
        window.open(url, '_blank');
      };

    return (
        <div className={styles['card-container']} onClick={handleClick}>
            <div className={styles['image-wrapper']}>
                <img 
                    className={styles['image']} 
                    src={img || imgNotAvailable}>
                </img>
            </div>
            <div className={styles['card-author']}>
                by: {author}
            </div>
            <div className={styles['card-title']}>
                {title}
            </div>
            <div className={styles['card-description']}>
                {description}
            </div>
        </div>
    );
};

export default CardNews;
