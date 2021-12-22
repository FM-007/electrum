import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

import './style.scss';

export const Banner: React.FC = () => {
  return (
    <>
      <div className="banners">
        <div className="banner" id="banner_1">
          <div className="banner-cover"></div>
          <div className="banner-content">
            <h2>Promoção de Notebooks</h2>
            <a href="#">
              Ver Mais <FaArrowCircleRight />
            </a>
          </div>
        </div>
        <div className="banner" id="banner_2">
          <div className="banner-cover"></div>
          <div className="banner-content">
            <h2>Lançamento de Acessórios</h2>
            <a href="#">
              Ver Mais <FaArrowCircleRight />
            </a>
          </div>
        </div>
        <div className="banner" id="banner_3">
          <div className="banner-cover"></div>
          <div className="banner-content">
            <h2>Câmeras Potentes</h2>
            <a href="#">
              Ver Mais <FaArrowCircleRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
