import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { MovieItem } from '../src/components/movie-item/movie-item';

import Page404 from '../src/components/page404/page404';

const movie = {
  id: 1,
  genres: ['action', 'drama'],
  title: 'Title',
}

storiesOf('page 404', module).add('to Storybook', () => <Page404 />);

storiesOf('Movie Item', module).add('to Storybook', () => <MovieItem movie={movie} />);