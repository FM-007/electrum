import React from 'react';
import { Banner } from './components/Banners';
import { Header } from './components/Header';

import './styles/globals.scss';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
};

export default App;
