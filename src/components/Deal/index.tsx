import React from 'react';

import styles from './styles.module.scss';

export const Deal: React.FC = () => {
  return (
    <>
      <div className={styles.deal_container}>
        <div className={styles.deal_container_content}>
          <div className={styles.deal_container_content_timer}>
            <div className={styles.deal_container_timer}>
              <span className={styles.deal_container_timer_time}>02</span>
              <span className={styles.deal_container_timer_word}>Dias</span>
            </div>
            <div className={styles.deal_container_timer}>
              <span className={styles.deal_container_timer_time}>02</span>
              <span className={styles.deal_container_timer_word}>Dias</span>
            </div>
            <div className={styles.deal_container_timer}>
              <span className={styles.deal_container_timer_time}>02</span>
              <span className={styles.deal_container_timer_word}>Dias</span>
            </div>
            <div className={styles.deal_container_timer}>
              <span className={styles.deal_container_timer_time}>02</span>
              <span className={styles.deal_container_timer_word}>Dias</span>
            </div>
          </div>
          <h2 className={styles.deal_container_content_title}>
            Promoção de Fone Gamer
          </h2>
          <p className={styles.deal_container_content_subtitle}>
            Toda a linha gamer com 50% de desconto
          </p>
          <button className={styles.btn}>Comprar Agora</button>
        </div>
      </div>
    </>
  );
};
