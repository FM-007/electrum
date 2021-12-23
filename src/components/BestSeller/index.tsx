import React from 'react';
import { FaStar } from 'react-icons/fa';

import './style.scss';

export const BestSeller: React.FC = () => {
  return (
    <>
      <div className="products_grid">
        <h2>Mais Vendidos</h2>
        <div className="products_grid_container">
          <div className="products_grid_card">
            <span className="label styles.hot">Hot</span>
            <img
              src={`https://raw.githubusercontent.com/matheusbattisti/curso_sass/main/10_projeto_electrum/img/prod-5.jpg`}
              alt="Produto 5"
            />
            <p className="category">Categoria</p>
            <h3 className="product_name">Nome do Produto</h3>
            <p className="product_price">R$ 124,90</p>
            <div className="rating_box">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <button className="btn">Comprar</button>
          </div>
          <div className="products_grid_card">
            <span className="label styles.hot">Hot</span>
            <img
              src={`https://raw.githubusercontent.com/matheusbattisti/curso_sass/main/10_projeto_electrum/img/prod-8.jpg`}
              alt="Produto 5"
            />
            <p className="category">Categoria</p>
            <h3 className="product_name">Nome do Produto</h3>
            <p className="product_price">R$ 124,90</p>
            <div className="rating_box">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <button className="btn">Comprar</button>
          </div>
          <div className="products_grid_card">
            <span className="label hot">Hot</span>
            <img
              src={`https://raw.githubusercontent.com/matheusbattisti/curso_sass/main/10_projeto_electrum/img/prod-6.jpg`}
              alt="Produto 6"
            />
            <p className="category">Categoria</p>
            <h3 className="product_name">Nome do Produto</h3>
            <p className="product_price">R$ 124,90</p>
            <div className="rating_box">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <button className="btn">Comprar</button>
          </div>
          <div className="products_grid_card">
            <span className="label hot">Hot</span>
            <img
              src={`https://raw.githubusercontent.com/matheusbattisti/curso_sass/main/10_projeto_electrum/img/prod-7.jpg`}
              alt="Produto 7"
            />
            <p className="category">Categoria</p>
            <h3 className="product_name">Nome do Produto</h3>
            <p className="product_price">R$ 124,90</p>
            <div className="rating_box">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <button className="btn">Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
};
