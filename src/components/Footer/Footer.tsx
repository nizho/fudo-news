import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
    label: string;
    onClick: () => void;
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className={styles.container}>
        </div>
    );
};

export default Footer;
