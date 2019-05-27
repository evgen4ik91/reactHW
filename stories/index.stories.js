import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { MovieItem } from '../src/components/movie-item/movie-item';
const stories = storiesOf('MovieItem', module)
stories.addDecorator(StoryRouter())

import Page404 from '../src/components/page404/page404';

const movie = {
  id: 1,
  genres: ['action', 'drama'],
  title: 'Title',
  poster_path: 'https://upload.wikimedia.org/wikipedia/ru/0/05/Париж_уснул_киноплакат.jpg',
  release_date: '1995-10-20',
}

storiesOf('page 404', module).add('to Storybook', () => <Page404 />);

stories.add('to Storybook', () => <MovieItem movie={movie} />);