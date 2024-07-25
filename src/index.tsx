import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@pages/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArtworkPage from '@pages/ArtworkPage/ArtworkPage';
import Home from '@pages/Home/Home';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          {/* <Route path='/enter' element={<Enter/>} /> */}
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
  <Provider store={store}>
    <Routing />
  </Provider>,
);

reportWebVitals();
