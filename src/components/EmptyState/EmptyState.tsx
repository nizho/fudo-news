import React from 'react';
import styles from './EmptyState.module.css'; // Crea un archivo de estilos si es necesario

const EmptyState: React.FC = () => {
  return (
    <div className={styles['empty-state']}>
      <h2>No hay artículos disponibles</h2>
      <p>Prueba a realizar una búsqueda diferente o vuelve más tarde.</p>
    </div>
  );
};

export default EmptyState;
