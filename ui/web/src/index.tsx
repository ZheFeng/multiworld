import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import './i18n';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

function start(rootId: string) {
  const rootDom = document.getElementById(rootId);
  const root = createRoot(rootDom);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

(window as any).start = start;
