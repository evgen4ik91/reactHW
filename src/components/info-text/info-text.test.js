import React from 'react';
import {shallow} from 'enzyme';
import InfoText from './info-text';

test('info-text text should match', () => {
    const component = shallow(
        <InfoText searchByGenre={true} text={'comedy'} />,
    );
    
    expect(component.text()).toEqual('Films by comedy genre');
});

test('info-text text should match', () => {
    const component = shallow(
        <InfoText searchByGenre={false} text={'1'} />,
    );
    
    expect(component.text()).toEqual('1 movies found');
});