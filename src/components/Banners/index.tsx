import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

import styles from './styles.module.scss';

export const Banner: React.FC = () => {
  return (
    <>
      <div className={styles.banners}>
        <div className={styles.banner} id={styles.banner_1}>
          <h2>Promoção de Notebooks</h2>
          <a href="#">
            Ver Mais <FaArrowCircleRight />
          </a>
        </div>
        <div className={styles.banner} id={styles.banner_2}>
          <h2>Lançamento de Acessórios</h2>
          <a href="#">
            Ver Mais <FaArrowCircleRight />
          </a>
        </div>
        <div className={styles.banner} id={styles.banner_3}>
          <h2>Câmeras Potentes</h2>
          <a href="#">
            Ver Mais <FaArrowCircleRight />
          </a>
        </div>
      </div>
    </>
  );
};
