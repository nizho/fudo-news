import React from 'react';
import styles from './ErrorMsg.module.css';

const ErrorMsg: React.FC = () => {
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className={styles.container}>
            <div className={styles.error}>
                Oops, Fudo News challenge crashed
            </div>
            <a href="#" onClick={handleRefresh}>
                Click here and try again
            </a>
        </div>
    );
};

export default ErrorMsg;
