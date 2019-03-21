import React from 'react';

export class MovieItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let movie = this.props.movie;
        return (
            <a className="movie-item bg-cover" href={`/movies/${movie.id}`} style={{backgroundImage: `url(${movie.imageURL})`}}>
                <div className="movie-item__info">
                    <div className="movie-item__info-main">
                        <p className="movie-item__title">{movie.title}</p>
                        <p className="movie-item__genre">{movie.genre}</p>
                    </div>
                    <p className="movie-item__year">{movie.year}</p>
                </div>
            </a>
        )
    }
}