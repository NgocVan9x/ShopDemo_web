import React from 'react';
import { Switch, Route } from 'react-router';
import NotFound from './components/exception/not-found';
import HomePage from './containers/homepage';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="*" component={NotFound} />
  </Switch>
);
