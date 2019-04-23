import React from 'react';
import { connect } from 'react-redux';
import { MovieItem } from '../movie-item/movie-item';
import './movies-list.sass';

import { sortMovies } from '../../functions';

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const children = this.props.children ? (
            <div className="movies-list__info">
                <div className="row align justify">
                    {React.Children.map(this.props.children, child => (<div className="col">{React.cloneElement(child)}</div>))}
                </div>
            </div>
        ) : '';
        
        const genreMode = this.props.relatedList.length;
        let moviesList = genreMode ? this.props.relatedList : sortMovies(this.props.moviesList, this.props.currentSorting);

        const moviesListRendered = moviesList && moviesList.length ? (
            <div className={`row movies-list__row ${genreMode ? 'genres' : ''}`}>
                {moviesList.map((item, i) => {
                    return (<div className='col movies-list__item' key={i}>
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

function mapStateToProps(state) {
    const { moviesList }  = state;
    const { currentSorting }  = state;
    const { relatedList }  = state;

    return { moviesList, currentSorting, relatedList };
}

export default connect(mapStateToProps)(MoviesList);