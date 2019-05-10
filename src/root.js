import React from 'react';
import { hot } from 'react-hot-loader';
import {App} from './app';
import { Provider } from 'react-redux';

import 'babel-polyfill';

const Root = ({Router, location, context, store}) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <App />
    </Router>
  </Provider>
);

export default hot(module)(Root);