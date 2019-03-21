import React from 'react';
import CONST from '../../constants';

export class Sorting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentType: CONST.sortingTypes[0]
        }
        this.updateSortingType = this.updateSortingType.bind(this);
    }

    updateSortingType(e) {
        this.setState({
            currentType: e.target.value
        })
    }

    render() {
        let sortingItems = CONST.sortingTypes.map((item, i) => {
            let itemProp = item.prop;
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