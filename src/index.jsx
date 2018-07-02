import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
import 'babel-polyfill';
import 'mdn-polyfills/Object.assign';
import '../public/styles/app.less';
import AppRoutes from './router';
import { store } from './configureStore';
// import HomePage from './containers/homepage';
// window.$ = require('jquery');
// window.jQuery = require('jquery');
const rootElement = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  rootElement
);
