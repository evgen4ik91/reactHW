import React from 'react';
import { connect } from 'react-redux';
import './info-text.sass';
	
const InfoText = (props) => {
    let text = props.moviesList ? `${props.moviesList.length} movies found` : ``;
    if (props.searchByGenre) text = `Films by ${props.text} genre`

    return (<p className="info-text">{text}</p>)
}

function mapStateToProps(state) {
    const { moviesList }  = state;

    return { moviesList };
}

export default connect(mapStateToProps)(InfoText);