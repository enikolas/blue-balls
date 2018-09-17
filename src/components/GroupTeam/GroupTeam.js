import React from 'react';
import Match from './Match';
import './GroupTeam.css';

const GroupTeam = ({matches, isScoreVisible}) => {
	const games = matches.slice(0,4).map(match => (
		<Match
			key={match.id}
			isScoreVisible={isScoreVisible}
			homeTeam={match.homeTeam}
			awayTeam={match.awayTeam}
		/>
	));

	return (
		<div className="GroupTeam">
			{games}
		</div>
	);
};

export default GroupTeam;
