import React from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
    label: string;
    onClick: () => void;
}

const SearchBar: React.FC<SearchBarProps> = () => {
    return (
        <div className={styles.container}>
        </div>
    );
};

export default SearchBar;
