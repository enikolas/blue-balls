import React from 'react';
import PropTypes from 'prop-types';

import ClubRankingRow from './ClubRankingRow';
import './ClubRankingTable.css';

const ClubRankingTable = ({ clubrank }) => {
	const rows = clubrank.map(position => (

		<ClubRankingRow
			clubrank={position}
			key={position.team}
		/>
	));

	return (
		<table className="ClubRankingTable">
			<thead>
				<tr>
					<th>Position</th>
					<th>Club</th>
					<th>Points</th>
					<th>Played</th>
					<th>Won</th>
					<th>Drawn</th>
					<th>Lost</th>
					<th>GF</th>
					<th>GA</th>
					<th>GD</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

export default ClubRankingTable;

ClubRankingTable.propTypes = {
	clubrank: PropTypes.arrayOf(PropTypes.shape({
		position: PropTypes.number,
		team: PropTypes.string
	})).isRequired
};
