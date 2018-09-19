import React from 'react';
import PropTypes from 'prop-types';

import Match from './Match';
import './GroupTeam.css';

const renderMatches = (matches, read) => matches.slice(0, 4).map(match => (
	<Match
		key={match.id}
		homeTeam={match.homeTeam}
		awayTeam={match.awayTeam}
		read={read}
	/>
));

const GroupTeam = ({ matches, read }) => (
	<div className="GroupTeam">
		{ renderMatches(matches, read) }
	</div>
);

export default GroupTeam;

GroupTeam.propTypes = {
	matches: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		homeTeam: PropTypes.shape({
			acronym: PropTypes.string,
			image: PropTypes.object
		}).isRequired,
		awayTeam: PropTypes.shape({
			acronym: PropTypes.string,
			image: PropTypes.object
		}).isRequired
	})).isRequired,
	read: PropTypes.func.isRequired
};
