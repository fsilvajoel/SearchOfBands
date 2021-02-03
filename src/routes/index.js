import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/index';
import ListPage from '../pages/ListPage';

const RoutePages = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/list" component={ListPage} />
    </Switch>
  </BrowserRouter>
);
export default RoutePages;
