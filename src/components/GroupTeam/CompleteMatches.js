import React from 'react';
import GroupTeam from './GroupTeam';
import './CompleteMatches.css';

const CompleteMatches = ({matchArray, title, label, read}) => (
	<div className="CompleteMatches">
		<h2>{title}</h2>
		<GroupTeam matches={matchArray} read={read} />
		<button>{label}</button>
	</div>
);

export default CompleteMatches;
