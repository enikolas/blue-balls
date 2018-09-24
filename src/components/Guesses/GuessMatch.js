import React from 'react';
import PropTypes from 'prop-types';

import './GuessMatch.css';

const GuessMatch = ({ homeTeam, awayTeam, read }) => {

	const currentHomeScore = read(homeTeam) != null ? read(homeTeam) : '';
	const currentAwayScore = read(awayTeam) != null ? read(awayTeam) : '';

	return (
		<div className="GuessMatch">
			<p className="acronym">{homeTeam.acronym}</p>
			<img src={homeTeam.image} alt="HomeTeam" width="32" height="32" />
			<input type="number" className="homeScore" min="0" max="30" defaultValue={currentHomeScore} />
			<p className="x">X</p>
			<input type="number" className="awayScore" min="0" max="30" defaultValue={currentAwayScore} />
			<img src={awayTeam.image} alt="AwayTeam" width="32" height="32" />
			<p className="acronym">{awayTeam.acronym}</p>
		</div>
	);
};

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
