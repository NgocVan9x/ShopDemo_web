import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/exception/not-found';
import HomePage from './containers/homepage';
export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);
