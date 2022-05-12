import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { newStore } from './redux/newStore';
import { Toaster } from 'react-hot-toast';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={newStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>

      <Toaster />
    </Provider>
  </React.StrictMode>
);
