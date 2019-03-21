import React from 'react';
import CONST from '../../constants';
import { MovieItem } from '../movie-item/movie-item';

export class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesList: CONST.moviesList
        }
    }

    render() {
        let children = this.props.children ? (
            <div className="movies-list__info">
                <div className="row align justify">
                    {React.Children.map(this.props.children, child => (<div className="col">{React.cloneElement(child)}</div>))}
                </div>
            </div>
        ) : '';
        
        let moviesList = this.state.moviesList;

        let moviesListRendered = moviesList && moviesList.length ? (
            <div className="row movies-list__row ">
                {moviesList.map((item, i) => {
                    return (<div className="col movies-list__item" key={i}>
                        <MovieItem movie={item} />
                    </div>)
                })}
            </div>
        ) : (<div className="movies-list__err">
            <p className="movies-list__err-msg">No films found</p>
        </div>)

        return (
            <div className="movies-list container">
                {children}
                {moviesListRendered}
            </div>
        )
    }
}