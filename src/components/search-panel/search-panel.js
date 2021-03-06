import React from 'react';
import { connect } from 'react-redux';
import SearchSelector from '../search-selector/search-selector'
import './search-panel.sass';
import { Fetcher } from '../../fetcher';

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);

        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    getMovies(searchStr, searchBy) {
        Fetcher(searchStr, searchBy).then(res => {
            if(res.data) this.props.setMoviesList(res.data);
        })
    }

    updateComp() {
        let searchReq = this.props.match.params.req;
        this.props.setSearchQuery(searchReq || '');
        if (searchReq) this.getMovies(searchReq, this.props.searchBy);
        else this.getMovies();
    }

    componentDidMount() {
        if (this.props.location.pathname !== '/') this.updateComp();
        else if (this.props.moviesList.length === 0) this.updateComp();

        this.props.setRelatedList([]);
        this.props.setRelatedGenre('');
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) this.updateComp();
    }

    keyUpHandler(e) {
        this.props.setSearchQuery(e.target.value);
    }

    keyDownHandler(e) {
        if (e.key === 'Enter') this.submitHandler();
    }

    submitHandler() {
        const searchQuery = this.props.searchQuery;
        if (searchQuery.length) {
            this.props.history.push(`/search/${searchQuery}`);
        }
    }

    render() {
        return (
            <div className="search">
                <p className="search__title">Find your movie</p>
                <input
                    className="search__field" 
                    onKeyUp={this.keyUpHandler}
                    onKeyDown={this.keyDownHandler} 
                    defaultValue={this.props.searchQuery}
                    placeholder="Search..."
                />
                <div className="row align justify">
                    <div className="col">
                        <SearchSelector/>
                    </div>
                    <div className="col">
                        <button className="btn-main lg" onClick={this.submitHandler} disabled={!this.props.searchQuery.length}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

const setRelatedList = (payload) => ({
    type: 'SET_RELATED_LIST',
    payload
});

const setRelatedGenre = (payload) => ({
    type: 'SET_RELATED_GENRE',
    payload
});

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
        setRelatedList: list => dispatch(setRelatedList(list)),
        setRelatedGenre: str => dispatch(setRelatedGenre(str)),
        setSearchQuery: str => dispatch(setSearchQuery(str)),
        setMoviesList: (list) => dispatch(setMoviesList(list)),
    }
}

function mapStateToProps(state) {
    const { searchBy }  = state;
    const { searchQuery }  = state;
    const { moviesList }  = state;

    return { searchBy, searchQuery, moviesList };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);