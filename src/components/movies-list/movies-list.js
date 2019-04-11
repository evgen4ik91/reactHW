import React from 'react';
import { connect } from 'react-redux';
import { MovieItem } from '../movie-item/movie-item';
import './movies-list.sass';

import { sortMovies } from '../../functions';
import { Fetcher } from '../../fetcher';

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Fetcher().then(res => {
            if(res.data) this.props.setMoviesList(res.data);
        })
    }

    render() {
        const children = this.props.children ? (
            <div className="movies-list__info">
                <div className="row align justify">
                    {React.Children.map(this.props.children, child => (<div className="col">{React.cloneElement(child)}</div>))}
                </div>
            </div>
        ) : '';
        
        const moviesList = sortMovies(this.props.moviesList, this.props.currentSorting);

        const moviesListRendered = moviesList && moviesList.length ? (
            <div className="row movies-list__row ">
                {moviesList.map((item, i) => {
                    return (<div className="col movies-list__item" key={i}>
                        <MovieItem movie={item} />
                    </div>)
                })}
            </div>
        ) : (
            <div className="movies-list__err">
                <p className="movies-list__err-msg">No films found</p>
            </div>
        )
        return (
            <div className="movies-list container">
                {children}
                {moviesListRendered}
            </div>
        )
    }
}

const setMoviesList = (payload) => ({
    type: 'SET_MOVIES_LIST',
    payload
});

function mapDispatchToProps(dispatch) {
    return {
        setMoviesList: (list) => dispatch(setMoviesList(list)),
    }
}

function mapStateToProps(state) {
    const { moviesList }  = state;
    const { currentSorting }  = state;

    return { moviesList, currentSorting };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);