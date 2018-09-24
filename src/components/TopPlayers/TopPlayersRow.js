import React from 'react';
import PropTypes from 'prop-types';

import './TopPlayersRow.css';

const TopPlayersRow = ({ position }) => {
	const name = position.name.split(' ', 1);
	const {
		score,
		correct
	} = position;

	return (
		<tr className={`TopPlayersRow ${position.self ? 'user' : ''}`}>
			<td data="Position">{position.position}</td>
			<td data="Player">{name}</td>
			<td data="Score">{score}</td>
			<td data="Correct">{correct}</td>
		</tr>
	);
};

export default TopPlayersRow;

TopPlayersRow.propTypes = {
	position: PropTypes.shape({
		position: PropTypes.number,
		name: PropTypes.string,
		self: PropTypes.bool,
		score: PropTypes.number,
		correct: PropTypes.number
	}).isRequired
};
