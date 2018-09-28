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

const readGuess = match => match.guess;

const NEXT_GUESSES = [
	{
		id: 6,
		homeTeam: {
			acronym: 'BAH',
			guess: null
		},
		awayTeam: {
			acronym: 'VIT',
			guess: null
		}
	},
	{
		id: 7,
		homeTeam: {
			acronym: 'GRE',
			guess: null
		},
		awayTeam: {
			acronym: 'AME',
			guess: null
		}
	},
	{
		id: 8,
		homeTeam: {
			acronym: 'CAM',
			guess: 10
		},
		awayTeam: {
			acronym: 'BOT',
			guess: 0
		}
	},
	{
		id: 9,
		homeTeam: {
			acronym: 'INT',
			guess: null
		},
		awayTeam: {
			acronym: 'CRU',
			guess: null
		}
	},
	{
		id: 10,
		homeTeam: {
			acronym: 'CHA',
			guess: null
		},
		awayTeam: {
			acronym: 'CEA',
			guess: null
		}
	}
];

const PREVIOUS_GUESSES = [
	{
		id: 11,
		homeTeam: {
			acronym: 'SAO',
			guess: null
		},
		awayTeam: {
			acronym: 'PAL',
			guess: null
		}
	},
	{
		id: 12,
		homeTeam: {
			acronym: 'AME',
			guess: null
		},
		awayTeam: {
			acronym: 'CEA',
			guess: null
		}
	},
	{
		id: 13,
		homeTeam: {
			acronym: 'CHA',
			guess: 10
		},
		awayTeam: {
			acronym: 'PAR',
			guess: 0
		}
	},
	{
		id: 14,
		homeTeam: {
			acronym: 'CAP',
			guess: null
		},
		awayTeam: {
			acronym: 'CRU',
			guess: null
		}
	},
	{
		id: 15,
		homeTeam: {
			acronym: 'INT',
			guess: null
		},
		awayTeam: {
			acronym: 'COR',
			guess: null
		}
	}
];

class Guesses extends React.Component {
	constructor() {
		super();

		this.nextHandler = this.nextHandler.bind(this);
		this.previousHandler = this.previousHandler.bind(this);

		this.state = {
			guesses: GUESSES,
			round: 11
		};
	}

	nextHandler() {
		this.setState({
			guesses: NEXT_GUESSES,
			round: 12
		});
	}

	previousHandler() {
		this.setState({
			guesses: PREVIOUS_GUESSES,
			round: 10
		});
	}

	render() {
		const { guesses, round } = this.state;
		const { nextHandler, previousHandler } = this;

		return (
			<div className="Guesses">
				<h1>Make your guess</h1>
				<GroupGuesses
					guesses={guesses}
					read={readGuess}
					round={round}
					nextHandler={nextHandler}
					previousHandler={previousHandler}
				/>
			</div>
		);
	}
}


export default Guesses;
