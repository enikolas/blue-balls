import React from 'react';

import GroupGuesses from './GroupGuesses';
import './Guesses.css';

const GUESSES = [
	{
		id: 1,
		homeTeam: {
			acronym: 'SPO',
			guess: null
		},
		awayTeam: {
			acronym: 'INT',
			guess: null
		}
	},
	{
		id: 2,
		homeTeam: {
			acronym: 'SAN',
			guess: null
		},
		awayTeam: {
			acronym: 'COR',
			guess: null
		}
	},
	{
		id: 3,
		homeTeam: {
			acronym: 'SAO',
			guess: 10
		},
		awayTeam: {
			acronym: 'PAR',
			guess: 0
		}
	},
	{
		id: 4,
		homeTeam: {
			acronym: 'FLU',
			guess: null
		},
		awayTeam: {
			acronym: 'CRU',
			guess: null
		}
	},
	{
		id: 5,
		homeTeam: {
			acronym: 'FLA',
			guess: null
		},
		awayTeam: {
			acronym: 'VIT',
			guess: null
		}
	}
];

const Guesses = () => {
	const readGuess = match => match.guess;

	return (
		<div className="Guesses">
			<h1>Make your guess</h1>
			<GroupGuesses guesses={GUESSES} read={readGuess} />
		</div>
	);
};

export default Guesses;
