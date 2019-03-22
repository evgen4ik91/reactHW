import React from 'react';
import CONST from '../../constants';
import './search-selector.sass';

export class SearchSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentType: CONST.selectorList[0]
        }
        this.updateSearchType = this.updateSearchType.bind(this);
    }

    updateSearchType(e) {
        this.setState({
            currentType: e.target.value
        })
    }

    render() {
        let items = CONST.selectorList.map((item, i) => {
            return  (
                <li className="search-selector__item" key={i}>
                    <input 
                        id={`search-type-${item}`}
                        className="search-selector__inp"
                        onChange={this.updateSearchType}
                        value={item}
                        name="search-type" 
                        type="radio"
                        defaultChecked={i === 0}/>
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