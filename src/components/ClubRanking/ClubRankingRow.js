import React from 'react';
import PropTypes from 'prop-types';

import './ClubRankingRow.css';

const ClubRankingRow = ({ clubrank }) => {
	const {
		team,
		score,
		games,
		wins,
		draw,
		loses,
		goalsfor,
		goalsagainst,
		goalsdifference
	} = clubrank;

	return (
		<tr className="ClubRankingRow">
			<td>{clubrank.position}</td>
			<td>{team}</td>
			<td>{score}</td>
			<td>{games}</td>
			<td>{wins}</td>
			<td>{draw}</td>
			<td>{loses}</td>
			<td>{goalsfor}</td>
			<td>{goalsagainst}</td>
			<td>{goalsdifference}</td>
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
