import React from 'react';
import { FaStar } from 'react-icons/fa';

import styles from './styles.module.scss';

export const Products: React.FC = () => {
  return (
    <>
      <div className={styles.productsGrid}>
        <h2>Produtos Novos</h2>
        <div className={styles.products_grid_container}>
          <div className={styles.products_grid_card}>
            <span className={(styles.label, styles.new)}></span>
            <img
              src={`https://raw.githubusercontent.com/matheusbattisti/curso_sass/main/10_projeto_electrum/img/prod-1.jpg`}
              alt="Produto 1"
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
            <span className={(styles.label, styles.new)}></span>
            <img
              src={`https://raw.githubusercontent.com/matheusbattisti/curso_sass/main/10_projeto_electrum/img/prod-2.jpg`}
              alt="Produto 2"
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
            <span className={(styles.label, styles.new)}></span>
            <img
              src={`https://raw.githubusercontent.com/matheusbattisti/curso_sass/main/10_projeto_electrum/img/prod-3.jpg`}
              alt="Produto 3"
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
            <span className={(styles.label, styles.new)}></span>
            <img
              src={`https://raw.githubusercontent.com/matheusbattisti/curso_sass/main/10_projeto_electrum/img/prod-4.jpg`}
              alt="Produto 4"
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
