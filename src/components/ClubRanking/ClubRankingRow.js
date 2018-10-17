import React from 'react';
import PropTypes from 'prop-types';

import './ClubRankingRow.css';

const ClubRankingRow = ({ clubrank }) => {
	const {
		position,
		team,
		points,
		playedGames,
		won,
		draw,
		lost,
		goalsFor,
		goalsAgainst,
		goalDifference
	} = clubrank;

	return (
		<tr className="ClubRankingRow">
			<td>{position}</td>
			<td>{team}</td>
			<td>{points}</td>
			<td>{playedGames}</td>
			<td>{won}</td>
			<td>{draw}</td>
			<td>{lost}</td>
			<td>{goalsFor}</td>
			<td>{goalsAgainst}</td>
			<td>{goalDifference}</td>
		</tr>
	);
};

export default ClubRankingRow;

ClubRankingRow.propTypes = {
	clubrank: PropTypes.shape({
		position: PropTypes.number,
		team: PropTypes.string,
		score: PropTypes.number,
		games: PropTypes.number,
		wins: PropTypes.number,
		draw: PropTypes.number,
		loses: PropTypes.number,
		goalsfor: PropTypes.number,
		goalsagainst: PropTypes.number,
		goalsdifference: PropTypes.number
	}).isRequired
};
