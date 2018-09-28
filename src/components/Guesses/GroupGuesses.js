import React from 'react';
import PropTypes from 'prop-types';

import GuessMatch from './GuessMatch';
import LeftArrow from '../AppBar/Icons/leftArrowIcon.svg';
import RightArrow from '../AppBar/Icons/rightArrowIcon.svg';
import './GroupGuesses.css';

const GameMatch = (games, id) => games.filter(game => (game.id === id));

const renderGuesses = (guesses, read, round, games) => guesses.map(guess => (
	<GuessMatch
		key={guess.id}
		homeTeam={guess.homeTeam}
		awayTeam={guess.awayTeam}
		games={GameMatch(games, guess.id)}
		read={read}
		round={round}
	/>
));

const GroupGuesses = ({
	guesses,
	read,
	round,
	games,
	nextHandler,
	previousHandler
}) => (
	<div className="GroupGuesses">
		<h2 className="Round">
			<button type="button" onClick={previousHandler}>
				<img className="LeftArrow" src={LeftArrow} alt="Left Arrow" />
			</button>
			<span>{`Round: ${round}`}</span>
			<button type="button" onClick={nextHandler}>
				<img className="RightArrow" src={RightArrow} alt="Right Arrow" />
			</button>
		</h2>
		{ renderGuesses(guesses, read, round, games) }
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
	games: PropTypes.array.isRequired,
	round: PropTypes.number.isRequired,
	nextHandler: PropTypes.func.isRequired,
	previousHandler: PropTypes.func.isRequired
};
