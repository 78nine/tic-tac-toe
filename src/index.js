import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'
import './styles/normalize.scss';
import './styles/global.scss';
import './styles/typography.scss';
import './styles/settings.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>
);

