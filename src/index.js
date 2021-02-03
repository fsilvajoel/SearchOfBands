import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RoutePages from './routes/index';

ReactDOM.render(
  <StrictMode>
    <RoutePages />
  </StrictMode>,
  document.getElementById('root')
);
