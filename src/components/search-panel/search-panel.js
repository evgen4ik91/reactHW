import React from 'react';
import { connect } from 'react-redux';
import SearchSelector from '../search-selector/search-selector'
import './search-panel.sass';

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);

        this.keyUpHandler = this.keyUpHandler.bind(this);
    }

    keyUpHandler(e) {
        this.props.setSearchQuery(e.target.value);
    }

    render() {
        return (
            <div className="search">
                <p className="search__title">Find your movie</p>
                <input
                    className="search__field" 
                    onKeyUp={this.keyUpHandler} 
                    defaultValue={this.props.searchQuery}
                    placeholder="Search..."
                />
                <div className="row align justify">
                    <div className="col">
                        <SearchSelector/>
                    </div>
                    <div className="col">
                        <button className="btn-main lg">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

const setSearchQuery = (payload) => ({
    type: 'SET_SEARCH_QUERY',
    payload
});

function mapDispatchToProps(dispatch) {
    return {
        setSearchQuery: str => dispatch(setSearchQuery(str)),
    }
}

function mapStateToProps(state) {
    const { searchBy }  = state;
    const { searchQuery }  = state;

    return { searchBy, searchQuery };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);