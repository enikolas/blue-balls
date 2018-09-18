import React from 'react';
import Match from './Match';
import './GroupTeam.css';

const renderMatches = (matches, read) => 
	matches.slice(0,4).map(match => (
		<Match
			key={match.id}
			homeTeam={match.homeTeam}
			awayTeam={match.awayTeam}
			read={read}
		/>
	)
);

const GroupTeam = ({matches, read}) => (
	<div className="GroupTeam">
		{ renderMatches(matches, read) }
	</div>
);

export default GroupTeam;
