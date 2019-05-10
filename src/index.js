import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Root from './root';
import configureStore from './store';
import initialState from './initialState';

const store = configureStore(window.PRELOADED_STATE || initialState);

const root = (<Root 
    Router={BrowserRouter}
    store={store}
  />);

hydrate(
  root,
  document.getElementById('app')
);