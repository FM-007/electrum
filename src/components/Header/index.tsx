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

import styles from './styles.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__topContainer}>
        <div className={styles.storeInfoContainer}>
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
        <div className={styles.header__userTopmenu}>
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
      <div className={styles.mainHeader}>
        <div className={styles.mainHeader__container}>
          <a href="#">
            Electrum <FaBolt />
          </a>
          <form action="" id={styles.searchForm}>
            <input type="text" id={styles.search} placeholder="Busque Aqui" />
            <input type="submit" className={styles.btnHalf} value="Pesquisar" />
          </form>
          <div className={styles.wishList}>
            <span className={styles.qty}>0</span>
            <FaHeart />
            <a href="#">Favoritos</a>
          </div>
          <div className={styles.headerCart}>
            <span className={styles.qty}>0</span>
            <FaShoppingCart />
            <a href="#">Carrinho</a>
          </div>
        </div>
      </div>
      <div className={styles.headerBottom}>
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
