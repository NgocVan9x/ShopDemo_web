import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'mdn-polyfills/Object.assign';
import '../public/styles/app.less';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { routes } from './router';
import { store, history } from './configureStore';
// import HomePage from './containers/homepage';
// window.$ = require('jquery');
// window.jQuery = require('jquery');
const rootElement = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>,
  rootElement
);
