import React from 'react';
import './Match.css';

const Match = ({ homeTeam, awayTeam, isScoreVisible }) => (
	<div className="Match">
		<p className="acronym">{homeTeam.acronym}</p>
		<img src={homeTeam.image} alt="Acronym" width="32" height="32" />
		<p className="homeScore">{isScoreVisible ? homeTeam.score : ''}</p>
		<p className="x">X</p>
		<p className="awayScore">{isScoreVisible ? awayTeam.score : ''}</p>
		<img src={awayTeam.image} alt="Acronym" width="32" height="32" />
		<p className="acronym">{awayTeam.acronym}</p>
	</div>
);

export default Match;