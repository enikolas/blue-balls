import React from 'react';
import PropTypes from 'prop-types';

import crestHandler from '../../utils/crestHandler';
import './GuessMatch.css';

const GuessMatch = ({
	homeTeam, awayTeam, games, read
}) => {
	const currentHomeScore = read(homeTeam) != null ? read(homeTeam) : '';
	const currentAwayScore = read(awayTeam) != null ? read(awayTeam) : '';
	const gameHomeTeam = games.homeTeam.score;
	const gameAwayTeam = games.awayTeam.score;
	const correct = (gameAwayTeam === currentAwayScore) && (gameHomeTeam === currentHomeScore);

	return (
		<div className="GuessMatch">
			<p className="acronym">{homeTeam.acronym}</p>
			<img src={crestHandler(homeTeam.acronym)} alt="HomeTeam" width="32" height="32" />
			<input type="number" className="homeScore" min="0" max="30" defaultValue={currentHomeScore} disabled={gameHomeTeam != null && gameAwayTeam != null} />
			<div className="groupResults">
				<p className="x">X</p>
				<p className="score" style={{ color: correct ? '#20a332' : '#d12323' }}>{`${gameHomeTeam != null ? `${gameHomeTeam} x ` : ''}${gameAwayTeam != null ? gameAwayTeam : ''}`}</p>
			</div>
			<input type="number" className="awayScore" min="0" max="30" defaultValue={currentAwayScore} disabled={gameHomeTeam != null && gameAwayTeam != null} />
			<img src={crestHandler(awayTeam.acronym)} alt="AwayTeam" width="32" height="32" />
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
	games: PropTypes.shape({
		id: PropTypes.number.isRequired,
		homeTeam: PropTypes.shape({
			acronym: PropTypes.string,
			score: PropTypes.string
		}).isRequired,
		awayTeam: PropTypes.shape({
			acronym: PropTypes.string,
			score: PropTypes.string
		}).isRequired
	}).isRequired,
	read: PropTypes.func.isRequired
};
