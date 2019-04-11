import React from 'react';
import { connect } from 'react-redux';
import './sorting.sass';

import CONST from '../../constants';

class Sorting extends React.Component {
    constructor(props) {
        super(props);
        this.updateSortingType = this.updateSortingType.bind(this);
    }

    updateSortingType(e) {
        this.props.setCurrentSorting(e.target.value);
    }

    render() {
        if (CONST.sortingTypes) {
            const sortingItems = CONST.sortingTypes.map((item, i) => {
                const itemProp = item.prop;
                return (
                    <li className="sorting__item" key={i}>
                        <input className="so"
                            id={`sorting-type-${itemProp}`}
                            className="sorting__inp"
                            onChange={this.updateSortingType}
                            value={itemProp}
                            name="sorting-type" 
                            type="radio"
                            defaultChecked={itemProp === this.props.currentSorting}/>
                        <label htmlFor={`sorting-type-${itemProp}`} className="sorting__label">{item.label}</label>
                    </li>
                )
            });
            return (
                <ul className="sorting">
                    <li className="sorting__title">Sort by:</li>
                    {sortingItems}
                </ul>
            );
        } else {
            return '';
        }
    }
}

const setCurrentSorting = (payload) => ({
    type: 'SET_CURRENT_SORTING',
    payload
});

function mapDispatchToProps(dispatch) {
    return {
        setCurrentSorting: (currSort) => dispatch(setCurrentSorting(currSort)),
    }
}

function mapStateToProps(state) {
    const { currentSorting }  = state;

    return { currentSorting };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);