import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import store from './store/store';
import Routing from 'routes/Routing';

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
