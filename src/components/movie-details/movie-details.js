import React from 'react';
import { connect } from 'react-redux';
import './movie-details.sass';

import { Fetcher } from '../../fetcher';
import { getYear, scrollTo } from '../../functions';

class MovieDetails extends React.PureComponent {
    constructor(props) {
		super(props);
		this.state = {
			movie: null,
		}
		this.setMovie = this.setMovie.bind(this);
	}

	setMovie(props) {
		return new Promise(res => {
			const movieID =  parseInt(props.match.params.id);
			const movie = [...props.moviesList, ...props.relatedList].find(movie => movie.id === movieID);
			this.setState({movie}, res);
		});
	}

	updateRelatedMovies(props) {
		const genre = this.state.movie.genres[0];
		props.setRelatedGenre(genre);
		Fetcher(genre, 'genres', 4).then(res => {
			if(res.data) props.setRelatedList(res.data);
		});
	}

	componentWillReceiveProps(props) {
		this.setMovie(props);
    }

	componentDidMount() {
		scrollTo();
		this.setMovie(this.props).then(() => {
			this.updateRelatedMovies(this.props);
		});
	}
	
	componentDidUpdate() {
		scrollTo();
	}

    render() {
		const movie = this.state.movie;
		if (movie) {
        	return (
				<div className="row">
					<div className="col movie-details__img-col">
						<div className="movie-details__img bg-cover" style={{backgroundImage: `url(${movie.poster_path})`}}></div>
					</div>
					<div className="col movie-details__content-col">
						<h1 className="movie-details__title">{movie.title}</h1>
						<p className="movie-details__rate">Vote: {movie.vote_average} ({movie.vote_count})</p>
						<p className="movie-details__descr">{movie.overview}</p>
						<p className="movie-details__genre">{movie.genres.join(', ')}</p>
						<p className="movie-details__year">{getYear(movie.release_date)}</p>
					</div>
				</div>
			)
		} else {
			return (
				<div className="movie-details__not-found">
					<p className="movie-details__not-found-text">Movie not found</p>
				</div>
			);
		}
    }
}


const setRelatedGenre = (payload) => ({
    type: 'SET_RELATED_GENRE',
    payload
});

const setRelatedList = (payload) => ({
    type: 'SET_RELATED_LIST',
    payload
});

function mapDispatchToProps(dispatch) {
    return {
        setRelatedGenre: str => dispatch(setRelatedGenre(str)),
        setRelatedList: (list) => dispatch(setRelatedList(list)),
    }
}

function mapStateToProps(state) {
	const { moviesList }  = state;
	const { relatedList }  = state;

    return { moviesList, relatedList };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);