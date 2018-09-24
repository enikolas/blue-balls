import React from 'react';
import PropTypes from 'prop-types';

import TopPlayerRow from './TopPlayersRow';
import './TopPlayersTable.css';

const TopPlayersTable = ({ positions }) => {
	const rows = positions
		.map(position => (

			<TopPlayerRow
				position={position}
				key={position.name}
			/>
		));

	return (
		<table className="TopPlayersTable">
			<thead>
				<tr>
					<th>Position</th>
					<th>Player</th>
					<th>Score</th>
					<th>Correct</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

export default TopPlayersTable;

TopPlayersTable.propTypes = {
	positions: PropTypes.arrayOf(PropTypes.shape({
		self: PropTypes.bool,
		name: PropTypes.string
	})).isRequired
};
