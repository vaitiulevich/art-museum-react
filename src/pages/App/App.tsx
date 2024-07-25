import React from 'react';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import GlobalStyle from '@styles/global';
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
