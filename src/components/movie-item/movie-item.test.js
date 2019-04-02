import React from 'react';
import renderer from 'react-test-renderer';
import { MovieItem } from './movie-item';

test('Footer should render correctly', () => {
    const movieObj = {
        id: 0,
        title: 'Green Book 1',
        genre: 'Comedy',
        description: 'Descr text',
        imageURL: 'https://st.kp.yandex.net/images/film_iphone/iphone360_1108577.jpg',
        year: '2018',
        rating: '8.3',
        duration: '120'
    }
    const component = renderer.create(
        <MovieItem movie={movieObj} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})