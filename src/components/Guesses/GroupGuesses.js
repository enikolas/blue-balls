import React from 'react';
import PropTypes from 'prop-types';

import GuessMatch from './GuessMatch';
import LeftArrow from '../AppBar/Icons/leftArrowIcon.svg';
import RightArrow from '../AppBar/Icons/rightArrowIcon.svg';
import './GroupGuesses.css';


const GameMatch = (games, id) => games.filter(game => (game.id === id));

const renderGuesses = (guesses, read, games) => guesses.map(guess => (
	<GuessMatch
		key={guess.id}
		homeTeam={guess.homeTeam}
		awayTeam={guess.awayTeam}
		games={GameMatch(games, guess.id)}
		read={read}
	/>
));

const GroupGuesses = ({ guesses, read, games }) => (
	<div className="GroupGuesses">
		<h2 className="Round">
			<a href="previousRound">
				<img className="LeftArrow" src={LeftArrow} alt="Left Arrow" />
			</a>
			<span>Round</span>
			<a href="nextRound">
				<img className="RightArrow" src={RightArrow} alt="Right Arrow" />
			</a>
		</h2>
		{ renderGuesses(guesses, read, games) }
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
	read: PropTypes.func.isRequired,
	games: PropTypes.array.isRequired
};
