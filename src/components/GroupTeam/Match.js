import React from 'react';
import './Match.css';

const Match = ({ homeTeam, awayTeam, read }) => (
	<div className="Match">
		<p className="acronym">{homeTeam.acronym}</p>
		<img src={homeTeam.image} alt="HomeTeam" width="32" height="32" />
		<p className="homeScore">{ read(homeTeam) != null ? read(homeTeam) : '?' }</p>
		<p className="x">X</p>
		<p className="awayScore">{ read(awayTeam) != null ? read(awayTeam) : '?' }</p>
		<img src={awayTeam.image} alt="AwayTeam" width="32" height="32" />
		<p className="acronym">{awayTeam.acronym}</p>
	</div>
);

export default Match;