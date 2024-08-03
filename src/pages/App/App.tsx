import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import GlobalStyle from '@styles/global';
import { globalTheme } from '@styles/themes';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppComponent } from './styled';

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <AppComponent>
        <GlobalStyle />
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </AppComponent>
    </ThemeProvider>
  );
}

export default App;
