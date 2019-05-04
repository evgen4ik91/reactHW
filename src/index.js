import React from 'react';
import { render } from 'react-dom';

import Root from './root';

const root = (<Root/>);

render(
  root,
  document.getElementById('app')
);