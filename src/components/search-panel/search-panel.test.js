import React from 'react';
import {shallow} from 'enzyme';
import SearchPanel from './search-panel';

test('SearchPanel should render correctly', () => {
    const component = shallow(
        <SearchPanel/>
    );
    
    expect(component).toMatchSnapshot();
});