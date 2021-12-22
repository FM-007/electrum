import React from 'react';
import { Banner } from './components/Banners';
import { BestSeller } from './components/BestSeller';
import { Deal } from './components/Deal';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Newsletter } from './components/Newsletter';
import { Products } from './components/Products';

import './styles/_reset.scss';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <Products />
      <Deal />
      <BestSeller />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
