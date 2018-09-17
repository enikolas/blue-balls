import React from 'react';
import './RankingRow.css';

const RankingRow = ({position}) => {
		const name = position.name.split(' ',1);
		const score = position.score;
		const hit = position.hit;

		return (
			<tr className="RankingRow">
				<td>{position.position}</td>
				<td>{name}</td>
				<td>{score}</td>
				<td>{hit}</td>
			</tr>
		); 
  }

  export default RankingRow;