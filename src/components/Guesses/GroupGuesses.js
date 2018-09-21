import React from 'react';
import PropTypes from 'prop-types';

import GuessMatch from './GuessMatch';
import './GroupGuesses.css';

const renderGuesses = (guesses, read) => guesses.map(guess => (
	<GuessMatch
		key={guess.id}
		homeTeam={guess.homeTeam}
		awayTeam={guess.awayTeam}
		read={read}
	/>
));

const GroupGuesses = ({ guesses, read }) => (
	<div className="GroupGuesses">
		{ renderGuesses(guesses, read) }
	</div>
);

export default GroupGuesses;

GroupGuesses.propTypes = {
	guesses: PropTypes.arrayOf(PropTypes.shape({
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
	read: PropTypes.func.isRequired
};
