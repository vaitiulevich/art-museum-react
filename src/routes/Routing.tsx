import React, { ReactElement } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import App from '@pages/App/App';
import ArtworkPage from '@pages/ArtworkPage/ArtworkPage';
import FavouritesPage from '@pages/FavouritesPage/FavouritesPage';
import Home from '@pages/Home/Home';

export default function Routing(): ReactElement {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/favorites" element={<FavouritesPage />} />
          <Route path="/artwork/:id" element={<ArtworkPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
