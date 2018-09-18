import React from 'react';
import RankingRow from './RankingRow';
import './RankingTable.css';

const RankingTable = ({ positions }) => {
	let user = positions.filter(position => position.self === true);

	const rows = positions
		.slice(0,3)
		.concat(user)
		.map((position) => (

		<RankingRow
			position={position}
			key={position.name} />
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
}

  export default RankingTable;
