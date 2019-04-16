import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import 'babel-polyfill';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();