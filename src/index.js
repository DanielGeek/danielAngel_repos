import React from 'react';
import ReactDOM from 'react-dom/client';

import { PokemonApp } from './PokemonApp';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PokemonApp />
  </React.StrictMode>
);
