import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@pages/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArtworkPage from '@pages/ArtworkPage/ArtworkPage';
import Home from '@pages/Home/Home';
import FavouritesPage from '@pages/FavouritesPage/FavouritesPage';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavouritesPage />} />
          <Route path="/artwork/:id" element={<ArtworkPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <Routing />
    </Provider>
  </ErrorBoundary>,
);

reportWebVitals();
