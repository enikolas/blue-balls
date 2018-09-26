import React from 'react';

import RankingTable from '../RankingTable/RankingTable';
import CompleteMatches from '../GroupTeam/CompleteMatches';

const POSITIONS = [
	{
		position: 1, name: 'Matheus', self: false, score: 100, correct: 10
	},
	{
		position: 2, name: 'Nik', self: false, score: 90, correct: 90
	},
	{
		position: 3, name: 'Diogo', self: false, score: 80, correct: 8
	},
	{
		position: 4, name: 'Bruno', self: false, score: 70, correct: 7
	},
	{
		position: 5, name: 'Paulo', self: false, score: 60, correct: 6
	},
	{
		position: 6, name: 'Rodolfo de Oliveira Caetano', self: true, score: 50, correct: 5
	},
	{
		position: 7, name: 'Falsarelo', self: false, score: 40, correct: 4
	},
	{
		position: 8, name: 'Hossomi', self: false, score: 30, correct: 3
	}
];

const GAMES = [
	{
		id: 1,
		homeTeam: {
			acronym: 'SPO',
			score: 1
		},
		awayTeam: {
			acronym: 'PAL',
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
			acronym: 'GRE',
			score: 2
		},
		awayTeam: {
			acronym: 'CRU',
			score: 1
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
			guess: null
		},
		awayTeam: {
			acronym: 'PAL',
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
			guess: 0
		},
		awayTeam: {
			acronym: 'PAR',
			guess: 0
		}
	},
	{
		id: 4,
		homeTeam: {
			acronym: 'GRE',
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

const Home = () => {

	const readScore = match => match.score;

	const readGuess = match => match.guess;

	return (
		<div className="Home">
			<RankingTable positions={POSITIONS} />
			<CompleteMatches matchArray={GUESSES} title="Next games" label="Make your guess" read={readGuess} />
			<CompleteMatches matchArray={GAMES} title="Last results" label="View results" read={readScore} />
		</div>
	);
};

export default Home;
