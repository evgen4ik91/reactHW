import React from 'react';
import { connect } from 'react-redux';
import './info-text.sass';
	
const InfoText = (props) => {
    let text = props.moviesList ? `${props.moviesList.length} movies found` : ``;
    if (props.relatedGenre.length) text = `Films by ${props.relatedGenre} genre`

    return (<p className="info-text">{text}</p>)
}

function mapStateToProps(state) {
    const { moviesList }  = state;
    const { relatedGenre }  = state;

    return { moviesList, relatedGenre };
}

export default connect(mapStateToProps)(InfoText);