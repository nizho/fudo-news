import React from 'react';
import styles from './Footer.module.css';
import iconLinkedin from './../../assets/LinkedIn_icon_circle.svg';
import iconWhatsapp from './../../assets/whatsApp.svg';

const Footer: React.FC = () => {
    const linkedinUrl = 'https://www.linkedin.com/in/diegorodolfomartinez/';
    const whatsappNumber = '+541160455192'; 
    const whatsappMessage = 'Hi Diego! We are reviewing your challenge now, good luck!';

    return (
        <div className={styles['footer-container']}>
            <div className={styles['icon-wrapper']}>
                <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={iconLinkedin}
                        className={styles['icon']}
                        alt="LinkedIn"
                    />
                </a>
            </div>
            <div className={styles['icon-wrapper']}>
                <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={iconWhatsapp}
                        className={styles['icon']}
                        alt="WhatsApp"
                    />
                </a>
            </div>
            <div className={styles['footer-label']}>Fudo challenge by Diego Martinez</div>
        </div>
    );
};

export default Footer;
