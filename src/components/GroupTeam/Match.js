import React from 'react';
import PropTypes from 'prop-types';
import crestHandler from '../../utils/crestHandler';

import './Match.css';

const Match = ({ homeTeam, awayTeam, read }) => (
	<div className="Match">
		<p className="acronym">{homeTeam.acronym}</p>
		<img src={crestHandler(homeTeam.acronym)} alt="HomeTeam" width="32" height="32" />
		<p className="homeScore">{ read(homeTeam) != null ? read(homeTeam) : '?' }</p>
		<p className="x">X</p>
		<p className="awayScore">{ read(awayTeam) != null ? read(awayTeam) : '?' }</p>
		<img src={crestHandler(awayTeam.acronym)} alt="AwayTeam" width="32" height="32" />
		<p className="acronym">{awayTeam.acronym}</p>
	</div>
);

export default Match;

Match.propTypes = {
	homeTeam: PropTypes.shape({
		acronym: PropTypes.string,
		image: PropTypes.string
	}).isRequired,
	awayTeam: PropTypes.shape({
		acronym: PropTypes.string,
		image: PropTypes.string
	}).isRequired,
	read: PropTypes.func.isRequired
};
