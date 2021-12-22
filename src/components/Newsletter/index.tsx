import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from 'react-icons/fa';

import styles from './styles.module.scss';

export const Newsletter: React.FC = () => {
  return (
    <>
      <div className={styles.newsletter_container}>
        <h2>
          Assine a nossa <span>Newsletter</span>
        </h2>
        <form action="">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite o seu e-mail"
          />
          <input
            type="submit"
            className={(styles.btn, styles.btn_half)}
            value="Assinar"
          />
        </form>
        <div className={styles.social_media}>
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaPinterestP />
        </div>
      </div>
    </>
  );
};
