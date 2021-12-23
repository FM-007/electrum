import React from 'react';
import { FaStar } from 'react-icons/fa';

import './styles.scss';

export const Products: React.FC = () => {
  return (
    <>
      <div className="productsGrid">
        <h2>Produtos Novos</h2>
        <div className="products_grid_container">
          <div className="products_grid_card">
            <span className="label new">New</span>
            <img
              src={`https://raw.githubusercontent.com/matheusbattisti/curso_sass/main/10_projeto_electrum/img/prod-1.jpg`}
              alt="Produto 1"
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
            <span className="label new">New</span>
            <img
              src={`https://raw.githubusercontent.com/matheusbattisti/curso_sass/main/10_projeto_electrum/img/prod-2.jpg`}
              alt="Produto 2"
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
            <span className="label new">New</span>
            <img
              src={`https://raw.githubusercontent.com/matheusbattisti/curso_sass/main/10_projeto_electrum/img/prod-3.jpg`}
              alt="Produto 3"
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
            <span className="label new">New</span>
            <img
              src={`https://raw.githubusercontent.com/matheusbattisti/curso_sass/main/10_projeto_electrum/img/prod-4.jpg`}
              alt="Produto 4"
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
