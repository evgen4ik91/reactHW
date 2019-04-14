import React from 'react';
import { connect } from 'react-redux';
import SearchSelector from '../search-selector/search-selector'
import './search-panel.sass';
import { Fetcher } from '../../fetcher';

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);

        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    getMovies(searchStr, searchBy) {
        Fetcher(searchStr, searchBy).then(res => {
            if(res.data) this.props.setMoviesList(res.data);
        })
    }

    componentDidMount() {
        this.getMovies();
    }

    keyUpHandler(e) {
        this.props.setSearchQuery(e.target.value);
    }

    submitHandler() {
        this.getMovies(this.props.searchQuery, this.props.searchBy);
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
                        <button className="btn-main lg" onClick={this.submitHandler}>Submit</button>
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

const setMoviesList = (payload) => ({
    type: 'SET_MOVIES_LIST',
    payload
});

function mapDispatchToProps(dispatch) {
    return {
        setSearchQuery: str => dispatch(setSearchQuery(str)),
        setMoviesList: (list) => dispatch(setMoviesList(list)),
    }
}

function mapStateToProps(state) {
    const { searchBy }  = state;
    const { searchQuery }  = state;

    return { searchBy, searchQuery };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);