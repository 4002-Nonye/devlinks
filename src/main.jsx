import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import { LinkProvider } from './contexts/LinksContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LinkProvider>
      <App />
    </LinkProvider>
  </StrictMode>,
);
