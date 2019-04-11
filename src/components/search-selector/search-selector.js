import React from 'react';
import { connect } from 'react-redux';
import CONST from '../../constants';
import './search-selector.sass';

class SearchSelector extends React.Component {
    constructor(props) {
        super(props);
        this.updateSearchType = this.updateSearchType.bind(this);
    }

    updateSearchType(e) {
        this.props.setSearchBy(e.target.value);
    }

    render() {
        const items = CONST.selectorList.map((item, i) => {
            return  (
                <li className="search-selector__item" key={i}>
                    <input 
                        id={`search-type-${item}`}
                        className="search-selector__inp"
                        onChange={this.updateSearchType}
                        value={item}
                        name="search-type" 
                        type="radio"
                        defaultChecked={item === this.props.searchBy}/>
                    <label htmlFor={`search-type-${item}`} className="search-selector__label">{item}</label>
                </li>
            )
        })
        return  (
            <ul className="search-selector">
                <li className="search-selector__title">Search by</li>
                {items}
            </ul>
        )
    }
}

const setSearchBy = (payload) => ({
    type: 'SET_SEARCH_BY',
    payload
});

function mapDispatchToProps(dispatch) {
    return {
        setSearchBy: (prop) => dispatch(setSearchBy(prop)),
    }
}

function mapStateToProps(state) {
    const { searchBy }  = state;

    return { searchBy };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSelector);