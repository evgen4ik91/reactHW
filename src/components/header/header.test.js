import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from './header';

test('Header should render correctly', () => {
    const component = renderer.create(
        <Header />
    );
    
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});