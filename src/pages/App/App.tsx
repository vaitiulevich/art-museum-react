import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import GlobalStyle from '@styles/global';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { AppComponent } from './styled';

function App() {
  return (
    <AppComponent>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </AppComponent>
  );
}

export default App;
