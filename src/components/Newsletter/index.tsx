import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from 'react-icons/fa';

import './style.scss';

export const Newsletter: React.FC = () => {
  return (
    <>
      <div className="newsletter_container">
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
          <input type="submit" className="btn btn__btnHalf" value="Assinar" />
        </form>
        <div className="social_media">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaPinterestP />
        </div>
      </div>
    </>
  );
};
