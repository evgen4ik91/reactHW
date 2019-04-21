import React from 'react';
import { connect } from 'react-redux';
import './movie-details.sass';

import { getYear } from '../../functions';

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
	}
	
	componentDidMount() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}

    render() {
		const movieID =  parseInt(this.props.match.params.id);
		const movie = this.props.moviesList.find(movie => movie.id === movieID);
        return (
			<div className="row">
				<div className="col movie-details__img-col">
					<div className="movie-details__img bg-cover" style={{backgroundImage: `url(${movie.poster_path})`}}></div>
				</div>
				<div className="col movie-details__content-col">
					<h1 className="movie-details__title">{movie.title}</h1>
					<p className="movie-details__rate">Vote: {movie.vote_average}({movie.vote_count})</p>
					<p className="movie-details__descr">{movie.overview}</p>
					<p className="movie-details__genre">{movie.genres.map((genre,i) => (i === 0 ? '' : ', ') + genre)}</p>
					<p className="movie-details__year">{getYear(movie.release_date)}</p>
				</div>
			</div>
        )
    }
}


function mapStateToProps(state) {
    const { moviesList }  = state;

    return { moviesList };
}

export default connect(mapStateToProps)(MovieDetails);