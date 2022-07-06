import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';

import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);