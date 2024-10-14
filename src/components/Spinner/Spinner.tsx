import React from 'react';
import styles from './Spinner.module.css';

const Spinner: React.FC = () => {
    return (
        <div className={styles.container}>
            Cargando noticias
        </div>
    );
};

export default Spinner;
