import React from 'react';
import styles from './Header.module.css';

// components
import SearchBar from '../SearchBar';

const Header: React.FC = () => {
    return (
        <div className={styles['header-container']}>
            <SearchBar />
        </div>
    );
};

export default Header;
