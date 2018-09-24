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
					<th>
						<div className="Full">Position</div>
						<div className="Short">Pos</div>
					</th>
					<th>Club</th>
					<th>
						<div className="Full">Points</div>
						<div className="Short">Pts</div>
					</th>
					<th>
						<div className="Full">Played</div>
						<div className="Short">Pl</div>
					</th>
					<th>
						<div className="Full">Won</div>
						<div className="Short">W</div>
					</th>
					<th>
						<div className="Full">Drawn</div>
						<div className="Short">D</div>
					</th>
					<th>
						<div className="Full">Lost</div>
						<div className="Short">L</div>
					</th>
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
