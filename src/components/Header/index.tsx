import React from 'react';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaDollarSign,
  FaUser,
  FaBolt,
  FaHeart,
  FaShoppingCart,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import './styles.scss';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__topContainer">
        <div className="container">
          <div className="storeInfoContainer">
            <span>
              <FaPhone /> (11)4444-3333
            </span>
            <span>
              <MdEmail />
              electrum_teste@email.com
            </span>
            <span>
              <FaMapMarkerAlt />
              Rua Teste, 1234
            </span>
          </div>
          <div className="header__userTopmenu">
            <span>
              <FaDollarSign />
              <a href="#"> BRL</a>
            </span>
            <span>
              <FaUser />
              <a href="#"> Minha Conta</a>
            </span>
          </div>
        </div>
      </div>
      <div className="mainHeader">
        <div className="mainHeader__container">
          <a href="#" id="brand">
            Electrum <FaBolt />
          </a>
          <form action="" id="searchForm">
            <input type="text" id="search" placeholder="Busque Aqui" />
            <input
              type="submit"
              className="btn btn__btnHalf"
              value="Pesquisar"
            />
          </form>
          <div className="headerActionsMenu">
            <div className="wishList">
              <span className="qty">0</span>
              <FaHeart />
              <a href="#">Favoritos</a>
            </div>
            <div className="headerCart">
              <span className="qty">0</span>
              <FaShoppingCart />
              <a href="#">Carrinho</a>
            </div>
          </div>
        </div>
      </div>
      <div className="headerBottom">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Promoções</a>
            </li>
            <li>
              <a href="#">Notebooks</a>
            </li>
            <li>
              <a href="#">Celulares</a>
            </li>
            <li>
              <a href="#">Câmeras</a>
            </li>
            <li>
              <a href="#">Acessórios</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
