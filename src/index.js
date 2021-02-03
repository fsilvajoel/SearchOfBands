import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { YouTubeProvider } from './context/youTubeContext';
import './index.css';
// import RoutePages from './routes/index';

import Home from './pages/index';
import ListPage from './pages/ListPage';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <YouTubeProvider>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/list" component={ListPage} />
        </Switch>
      </YouTubeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
