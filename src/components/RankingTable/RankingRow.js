import React from 'react';
import PropTypes from 'prop-types';

import './RankingRow.css';

const RankingRow = ({ position }) => {
	const name = position.name.split(' ', 1);
	const {
		score,
		hit
	} = position;

	return (
		<tr className="RankingRow">
			<td>{position.position}</td>
			<td>{name}</td>
			<td>{score}</td>
			<td>{hit}</td>
		</tr>
	);
};

export default RankingRow;

RankingRow.propTypes = {
	position: PropTypes.shape({
		position: PropTypes.number,
		name: PropTypes.string,
		self: PropTypes.bool,
		score: PropTypes.number,
		hit: PropTypes.number
	}).isRequired
};
