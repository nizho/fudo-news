import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar: React.FC = () => {
    return (
        <div className={styles['search-container']}>
            <input
                className={styles['search-input']}
                placeholder='Search news'>
            </input>
            <button className={styles['search-button']}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
