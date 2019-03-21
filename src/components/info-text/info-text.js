import React from 'react';
	
const InfoText = (props) => <p className="info-text">{parseInt(props.searchByGenre) ? `Films by ${props.text} genre` : `${props.text} movies found`}</p>

export default InfoText;