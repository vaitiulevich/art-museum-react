import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import App from '@pages/App/App';
import ArtworkPage from '@pages/ArtworkPage/ArtworkPage';
import FavouritesPage from '@pages/FavouritesPage/FavouritesPage';
import Home from '@pages/Home/Home';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter as Router,Route, Routes } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import store from './store/store';

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavouritesPage />} />
          <Route path="/artwork/:id" element={<ArtworkPage />} />
        </Route>
      </Routes>
    </Router>
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
