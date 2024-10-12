import React from 'react';
import styles from './CardNews.module.css';

interface CardNewsProps {
    label: string;
    onClick: () => void;
}

const CardNews: React.FC<CardNewsProps> = () => {
    return (
        <div className={styles.container}>
        </div>
    );
};

export default CardNews;
