import React from 'react';
import {
  FaLocationArrow,
  FaPhone,
  FaEnvelope,
  FaCcMastercard,
  FaCcVisa,
  FaCcDinersClub,
  FaCcAmazonPay,
  FaCcApplePay,
} from 'react-icons/fa';

import './style.scss';

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer_top">
          <div className="footer_top_about">
            <h3>Sobre Nós</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              repellat nesciunt eius dolores nulla, atque suscipit rem voluptate
              dignissimos accusamus sit quo non architecto ducimus culpa,
              numquam sunt odit aspernatur?
            </p>
            <p>
              <FaLocationArrow />
              <a href="#">Rua Teste, 1234</a>
            </p>
            <p>
              <FaPhone />
              <a href="#">(48)99999-0000</a>
            </p>
            <p>
              <FaEnvelope />
              <a href="#">electrum@email.com</a>
            </p>
          </div>
          <div className="footer_top_categories">
            <h3>Categorias</h3>
            <ul>
              <li>
                <a href="#">Promoções</a>
              </li>
              <li>
                <a href="#">Headsets</a>
              </li>
              <li>
                <a href="#">PC Gamer</a>
              </li>
              <li>
                <a href="#">Câmeras</a>
              </li>
              <li>
                <a href="#">Mouse e teclado</a>
              </li>
            </ul>
          </div>
          <div className="footer_top_information">
            <h3>Informações</h3>
            <ul>
              <li>
                <a href="#">Sobre nós</a>
              </li>
              <li>
                <a href="#">Entre em contato</a>
              </li>
              <li>
                <a href="#">Política de privacidade</a>
              </li>
              <li>
                <a href="#">Pedidos e devoluções</a>
              </li>
              <li>
                <a href="#">Termos e condições</a>
              </li>
            </ul>
          </div>
          <div className="footer_top_menu">
            <h3>Menu</h3>
            <ul>
              <li>
                <a href="#">Minha Conta</a>
              </li>
              <li>
                <a href="#">Carrinho</a>
              </li>
              <li>
                <a href="#">Lista de Desejos</a>
              </li>
              <li>
                <a href="#">Rastrear Pedido</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom_payments">
            <FaCcMastercard />
            <FaCcVisa />
            <FaCcDinersClub />
            <FaCcAmazonPay />
            <FaCcApplePay />
          </div>
          <p>Copyright &copy; 2021 - Electrum</p>
        </div>
      </footer>
    </>
  );
};
