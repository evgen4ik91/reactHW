import React from 'react';
import './info-text.sass';
	
const InfoText = (props) => <p className="info-text">{props.searchByGenre ? `Films by ${props.text} genre` : `${props.text} movies found`}</p>

export default InfoText;