import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';
import { Provider } from 'react-redux';
import configureStore from './store';
import 'babel-polyfill';

import initialState from './initialState';

const store = configureStore({...initialState});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();