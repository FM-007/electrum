import React from 'react';
import { FaStar } from 'react-icons/fa';

import styles from './styles.module.scss';

export const BestSeller: React.FC = () => {
  return (
    <>
      <div className={styles.products_grid}>
        <h2>Mais Vendidos</h2>
        <div className={styles.products_grid_container}>
          <div className={styles.products_grid_card}>
            <span className={(styles.label, styles.hot)}>Hot</span>
            <img
              src={`https://raw.githubusercontent.com/matheusbattisti/curso_sass/main/10_projeto_electrum/img/prod-5.jpg`}
              alt="Produto 5"
            />
            <p className={styles.category}>Categoria</p>
            <h3 className={styles.product_name}>Nome do Produto</h3>
            <p className={styles.product_price}>R$ 124,90</p>
            <div className={styles.rating_box}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <button className={styles.btn}>Comprar</button>
          </div>
          <div className={styles.products_grid_card}>
            <span className={(styles.label, styles.hot)}>Hot</span>
            <img
              src={`https://raw.githubusercontent.com/matheusbattisti/curso_sass/main/10_projeto_electrum/img/prod-8.jpg`}
              alt="Produto 5"
            />
            <p className={styles.category}>Categoria</p>
            <h3 className={styles.product_name}>Nome do Produto</h3>
            <p className={styles.product_price}>R$ 124,90</p>
            <div className={styles.rating_box}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <button className={styles.btn}>Comprar</button>
          </div>
          <div className={styles.products_grid_card}>
            <span className={(styles.label, styles.hot)}>Hot</span>
            <img
              src={`https://raw.githubusercontent.com/matheusbattisti/curso_sass/main/10_projeto_electrum/img/prod-6.jpg`}
              alt="Produto 6"
            />
            <p className={styles.category}>Categoria</p>
            <h3 className={styles.product_name}>Nome do Produto</h3>
            <p className={styles.product_price}>R$ 124,90</p>
            <div className={styles.rating_box}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <button className={styles.btn}>Comprar</button>
          </div>
          <div className={styles.products_grid_card}>
            <span className={(styles.label, styles.hot)}>Hot</span>
            <img
              src={`https://raw.githubusercontent.com/matheusbattisti/curso_sass/main/10_projeto_electrum/img/prod-7.jpg`}
              alt="Produto 7"
            />
            <p className={styles.category}>Categoria</p>
            <h3 className={styles.product_name}>Nome do Produto</h3>
            <p className={styles.product_price}>R$ 124,90</p>
            <div className={styles.rating_box}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <button className={styles.btn}>Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
};
