import React from 'react';
import styles from './Header.module.css';
import SearchBar from '../SearchBar';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <div className={styles['header-container']}>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Header;
