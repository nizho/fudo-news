import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
    label: string;
    onClick: () => void;
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <div className={styles.container}>
        </div>
    );
};

export default Header;
