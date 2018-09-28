import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import GroupTeam from './GroupTeam';
import './CompleteMatches.css';

const CompleteMatches = ({
	matchArray, title, label, read
}) => (
	<div className="CompleteMatches">
		<h2>{title}</h2>
		<GroupTeam matches={matchArray} read={read} />
		<Link to="/guesses">
			<button type="submit">{label}</button>
		</Link>
	</div>
);

export default CompleteMatches;

CompleteMatches.propTypes = {
	matchArray: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		homeTeam: PropTypes.shape({
			acronym: PropTypes.string,
			image: PropTypes.string
		}).isRequired,
		awayTeam: PropTypes.shape({
			acronym: PropTypes.string,
			image: PropTypes.string
		}).isRequired
	})).isRequired,
	title: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	read: PropTypes.func.isRequired
};
