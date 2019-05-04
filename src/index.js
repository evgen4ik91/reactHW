import React from 'react';
import { hydrate } from 'react-dom';

import Root from './root';

const root = (<Root/>);

hydrate(
  root,
  document.getElementById('app')
);