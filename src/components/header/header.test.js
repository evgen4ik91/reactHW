import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from './header';

test('Header should contain title', () => {
    const component = renderer.create(
        <Header />
    );
    
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});