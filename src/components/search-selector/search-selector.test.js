import React from 'react';
import renderer from 'react-test-renderer';
import { SearchSelector } from './search-selector';

test('SearchSelector should render correctly', () => {
    const component = renderer.create(
        <SearchSelector />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})