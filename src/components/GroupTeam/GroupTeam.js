import React from 'react';
import Match from './Match';
import './GroupTeam.css';

const renderMatches = (matches, isScoreVisible) => 
	matches.slice(0,4).map(match => (
		<Match
			key={match.id}
			isScoreVisible={isScoreVisible}
			homeTeam={match.homeTeam}
			awayTeam={match.awayTeam}
		/>
	)
);

const GroupTeam = ({matches, isScoreVisible}) => {
	return (
		<div className="GroupTeam">
			{ renderMatches(matches, isScoreVisible) }
		</div>
	);
};

export default GroupTeam;
