import React from 'react';

import GroupGuesses from './GroupGuesses';
import './Guesses.css';

const GAMES = [
	{
		id: 1,
		homeTeam: {
			acronym: 'SPO',
			score: 1
		},
		awayTeam: {
			acronym: 'INT',
			score: 3
		}
	},
	{
		id: 2,
		homeTeam: {
			acronym: 'SAN',
			score: 4
		},
		awayTeam: {
			acronym: 'COR',
			score: 3
		}
	},
	{
		id: 3,
		homeTeam: {
			acronym: 'SAO',
			score: 0
		},
		awayTeam: {
			acronym: 'PAR',
			score: 0
		}
	},
	{
		id: 4,
		homeTeam: {
			acronym: 'FLU',
			score: 3
		},
		awayTeam: {
			acronym: 'CRU',
			score: 3
		}
	},
	{
		id: 5,
		homeTeam: {
			acronym: 'FLA',
			score: 3
		},
		awayTeam: {
			acronym: 'VIT',
			score: 4
		}
	}
];

const GUESSES = [
	{
		id: 1,
		homeTeam: {
			acronym: 'SPO',
			guess: 1
		},
		awayTeam: {
			acronym: 'INT',
			guess: 3
		}
	},
	{
		id: 2,
		homeTeam: {
			acronym: 'SAN',
			guess: 1
		},
		awayTeam: {
			acronym: 'COR',
			guess: 4
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
			guess: 3
		},
		awayTeam: {
			acronym: 'CRU',
			guess: 3
		}
	},
	{
		id: 5,
		homeTeam: {
			acronym: 'FLA',
			guess: 2
		},
		awayTeam: {
			acronym: 'VIT',
			guess: 1
		}
	}
];

const Guesses = () => {
	const readGuess = match => match.guess;

	return (
		<div className="Guesses">
			<h1>Make your guess</h1>
			<GroupGuesses guesses={GUESSES} games={GAMES} read={readGuess} />
		</div>
	);
};

export default Guesses;
