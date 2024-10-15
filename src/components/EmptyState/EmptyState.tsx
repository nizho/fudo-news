import React from 'react';
import styles from './EmptyState.module.css'; // Crea un archivo de estilos si es necesario

const EmptyState: React.FC = () => {
  return (
    <div className={styles['empty-state']}>
      <h2>No items available</h2>
      <p>Try a different search or come back later</p>
    </div>
  );
};

export default EmptyState;
