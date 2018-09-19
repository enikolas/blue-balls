import React from 'react';
import PropTypes from 'prop-types';

import GroupTeam from './GroupTeam';
import './CompleteMatches.css';

const CompleteMatches = ({
	matchArray, title, label, read
}) => (
	<div className="CompleteMatches">
		<h2>{title}</h2>
		<GroupTeam matches={matchArray} read={read} />
		<button type="submit">{label}</button>
	</div>
);

export default CompleteMatches;

CompleteMatches.propTypes = {
	matchArray: PropTypes.arrayOf(PropTypes.shape({
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
	title: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	read: PropTypes.func.isRequired
};
