import React from 'react';
import { Link } from 'react-router-dom';
import './movie-item.sass';

import { getYear } from '../../functions.js';

export class MovieItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const movie = this.props.movie;
        return (
            <Link className="movie-item bg-cover" to={`/movies/${movie.id}`} style={{backgroundImage: `url(${movie.poster_path})`}}>
                <div className="movie-item__info">
                    <div className="movie-item__info-main">
                        <p className="movie-item__title">{movie.title}</p>
                        <p className="movie-item__genre">{movie.genres.join(', ')}</p>
                    </div>
                    <p className="movie-item__year">{getYear(movie.release_date)}</p>
                </div>
            </Link>
        )
    }
}