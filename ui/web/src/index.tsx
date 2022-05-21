import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import './i18n';
import App from './App';

function start(rootId: string) {
  const rootDom = document.getElementById(rootId);
  const root = createRoot(rootDom);
  root.render(<App />);
}

(window as any).start = start;
