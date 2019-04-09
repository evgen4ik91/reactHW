import React from 'react';
import { connect } from 'react-redux';
import './sorting.sass';

class Sorting extends React.Component {
    constructor(props) {
        super(props);
        
        this.updateSortingType = this.updateSortingType.bind(this);
    }

    updateSortingType(e) {
        this.props.setCurrentSorting(e.target.value);
    }

    render() {
        const sortingItems = this.props.sortingTypes.map((item, i) => {
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
                        defaultChecked={i === 0}/>
                    <label htmlFor={`sorting-type-${itemProp}`} className="sorting__label">{item.label}</label>
                </li>
            )
        })
        return (
            <ul className="sorting">
                <li className="sorting__title">Sort by:</li>
                {sortingItems}
            </ul>
        )
    }
}

const setCurrentSorting = (payload) => {
    type: 'SET_CURRENT_SORTING',
    payload
};

function mapDispatchToProps(state) {
    return {
        setCurrentSorting: (currSort) => dispatch(setCurrentSorting(currSort)),
    }
}

function mapStateToProps(state) {
    const { currentSorting }  = state;
    const { sortingTypes }  = state;

    return { currentSorting, sortingTypes };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);