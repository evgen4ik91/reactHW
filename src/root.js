import React from 'react';
import { hot } from 'react-hot-loader';
import {App} from './app';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter } from 'react-router-dom';
import 'babel-polyfill';

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default hot(module)(Root);