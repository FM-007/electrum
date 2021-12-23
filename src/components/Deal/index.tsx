import React from 'react';

import './styles.scss';

export const Deal: React.FC = () => {
  return (
    <>
      <div className="deal_container">
        <div className="deal_container_content">
          <div className="deal_container_content_timer">
            <div className="deal_container_timer">
              <span className="deal_container_timer_time">02</span>
              <span className="deal_container_timer_word">Dias</span>
            </div>
            <div className="deal_container_timer">
              <span className="deal_container_timer_time">02</span>
              <span className="deal_container_timer_word">Dias</span>
            </div>
            <div className="deal_container_timer">
              <span className="deal_container_timer_time">02</span>
              <span className="deal_container_timer_word">Dias</span>
            </div>
            <div className="deal_container_timer">
              <span className="deal_container_timer_time">02</span>
              <span className="deal_container_timer_word">Dias</span>
            </div>
          </div>
          <h2 className="deal_container_content_title">
            Promoção de Fone Gamer
          </h2>
          <p className="deal_container_content_subtitle">
            Toda a linha gamer com 50% de desconto
          </p>
          <button className="btn">Comprar Agora</button>
        </div>
      </div>
    </>
  );
};
