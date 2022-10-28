import React from 'react';

import ReactDOM from 'react-dom/client';

import { CharactersProvider } from 'context/CharactersContext';
import { ComicsProvider } from 'context/ComicsContext';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ComicsProvider>
      <CharactersProvider>
        <App />
      </CharactersProvider>
    </ComicsProvider>
  </React.StrictMode>,
);
