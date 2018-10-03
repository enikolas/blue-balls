import React from 'react';

import GroupGuesses from './GroupGuesses';
import './Guesses.css';

const GAMES = [
	{
		id: 1,
		homeTeam: {
			acronym: 'SPO',
			score: 0
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
			score: 2
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

const NEXT_GAMES = [
	{
		id: 6,
		homeTeam: {
			acronym: 'SPO',
			score: null
		},
		awayTeam: {
			acronym: 'INT',
			score: null
		}
	},
	{
		id: 7,
		homeTeam: {
			acronym: 'SAN',
			score: null
		},
		awayTeam: {
			acronym: 'COR',
			score: null
		}
	},
	{
		id: 8,
		homeTeam: {
			acronym: 'SAO',
			score: null
		},
		awayTeam: {
			acronym: 'PAR',
			score: null
		}
	},
	{
		id: 9,
		homeTeam: {
			acronym: 'FLU',
			score: null
		},
		awayTeam: {
			acronym: 'CRU',
			score: null
		}
	},
	{
		id: 10,
		homeTeam: {
			acronym: 'FLA',
			score: null
		},
		awayTeam: {
			acronym: 'VIT',
			score: null
		}
	}
];

const PREVIOUS_GAMES = [
	{
		id: 11,
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
		id: 12,
		homeTeam: {
			acronym: 'SAN',
			score: 4
		},
		awayTeam: {
			acronym: 'COR',
			score: 0
		}
	},
	{
		id: 13,
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
		id: 14,
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
		id: 15,
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

const readGuess = match => match.guess;
class Guesses extends React.Component {
	constructor() {
		super();

		this.nextHandler = this.nextHandler.bind(this);
		this.previousHandler = this.previousHandler.bind(this);

		this.state = {
			guesses: GUESSES,
			games: GAMES,
			round: 11
		};
	}

	nextHandler() {
		this.setState({
			guesses: NEXT_GUESSES,
			games: NEXT_GAMES,
			round: 12
		});
	}

	previousHandler() {
		this.setState({
			guesses: PREVIOUS_GUESSES,
			games: PREVIOUS_GAMES,
			round: 10
		});
	}

	render() {
		const { guesses, round, games } = this.state;
		const { nextHandler, previousHandler } = this;

		return (
			<div className="Guesses">
				<h1>Make your guess</h1>
				<GroupGuesses
					guesses={guesses}
					read={readGuess}
					round={round}
					games={games}
					nextHandler={nextHandler}
					previousHandler={previousHandler}
				/>
			</div>
		);
	}
}

export default Guesses;
