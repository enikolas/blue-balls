import React from 'react';
import PropTypes from 'prop-types';

import RankingRow from './RankingRow';
import './RankingTable.css';

const RankingTable = ({ positions }) => {
	const user = positions.filter(position => position.self === true);

	const rows = positions
		.slice(0, 3)
		.concat(user)
		.map(position => (

			<RankingRow
				position={position}
				key={position.name}
			/>
		));

	return (
		<table className="RankingTable">
			<thead>
				<tr>
					<th>Position</th>
					<th>Player</th>
					<th>Score</th>
					<th>Hit</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

export default RankingTable;

RankingTable.propTypes = {
	positions: PropTypes.arrayOf(PropTypes.shape({
		self: PropTypes.bool,
		name: PropTypes.string
	})).isRequired
};
