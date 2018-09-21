import React from 'react';
import PropTypes from 'prop-types';

import './GuessMatch.css';

const GuessMatch = ({ homeTeam, awayTeam, read }) => (
	<div className="GuessMatch">
		<p className="acronym">{homeTeam.acronym}</p>
		<img src={homeTeam.image} alt="HomeTeam" width="32" height="32" />
		<input type="text" className="homeScore" maxLength="2" defaultValue={` ${read(homeTeam) != null ? read(homeTeam) : ''} `} />
		<p className="x">X</p>
		<input type="text" className="awayScore" maxLength="2" defaultValue={` ${read(awayTeam) != null ? read(awayTeam) : ''} `} />
		<img src={awayTeam.image} alt="AwayTeam" width="32" height="32" />
		<p className="acronym">{awayTeam.acronym}</p>
	</div>
);

export default GuessMatch;

GuessMatch.propTypes = {
	homeTeam: PropTypes.shape({
		acronym: PropTypes.string,
		image: PropTypes.string
	}).isRequired,
	awayTeam: PropTypes.shape({
		acronym: PropTypes.string,
		image: PropTypes.string
	}).isRequired,
	read: PropTypes.func.isRequired
};
