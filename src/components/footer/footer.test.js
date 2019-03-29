import React from 'react';
import renderer from 'react-test-renderer';
import { Footer } from './footer';

test('Footer should render correctly', () => {
    const component = renderer.create(
        <Footer />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})