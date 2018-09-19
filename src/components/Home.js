import React from 'react';
import RankingTable from './RankingTable/RankingTable';
import CompleteMatches from './GroupTeam/CompleteMatches';

import Palmeiras from './GroupTeam/ImageTeam/palmeiras.png';
import Sport from './GroupTeam/ImageTeam/sport.png';
import Santos from './GroupTeam/ImageTeam/santos.png';
import Corinthians from './GroupTeam/ImageTeam/corinthians.png';
import SaoPaulo from './GroupTeam/ImageTeam/sao_paulo.png';
import Parana from './GroupTeam/ImageTeam/parana.png';
import Gremio from './GroupTeam/ImageTeam/gremio.png';
import Cruzeiro from './GroupTeam/ImageTeam/cruzeiro.png';
import Flamengo from './GroupTeam/ImageTeam/flamengo.png';
import Vitoria from './GroupTeam/ImageTeam/vitoria.png';

const POSITIONS = [
	{
		position: 1, name: 'Matheus', self: false, score: 100, hit: 10
	},
	{
		position: 2, name: 'Nik', self: false, score: 90, hit: 90
	},
	{
		position: 3, name: 'Diogo', self: false, score: 80, hit: 8
	},
	{
		position: 4, name: 'Bruno', self: false, score: 70, hit: 7
	},
	{
		position: 5, name: 'Paulo', self: false, score: 60, hit: 6
	},
	{
		position: 6, name: 'Rodolfo de Oliveira Caetano', self: true, score: 50, hit: 5
	},
	{
		position: 7, name: 'Falsarelo', self: false, score: 40, hit: 4
	},
	{
		position: 8, name: 'Hossomi', self: false, score: 30, hit: 3
	}
];

const GAMES = [
	{
		id: 1,
		homeTeam: {
			acronym: 'SPO',
			image: Sport,
			score: 1
		},
		awayTeam: {
			acronym: 'PAL',
			image: Palmeiras,
			score: 3
		}
	},
	{
		id: 2,
		homeTeam: {
			acronym: 'SAN',
			image: Santos,
			score: 4
		},
		awayTeam: {
			acronym: 'COR',
			image: Corinthians,
			score: 3
		}
	},
	{
		id: 3,
		homeTeam: {
			acronym: 'SAO',
			image: SaoPaulo,
			score: 0
		},
		awayTeam: {
			acronym: 'PAR',
			image: Parana,
			score: 0
		}
	},
	{
		id: 4,
		homeTeam: {
			acronym: 'GRE',
			image: Gremio,
			score: 2
		},
		awayTeam: {
			acronym: 'CRU',
			image: Cruzeiro,
			score: 1
		}
	},
	{
		id: 5,
		homeTeam: {
			acronym: 'FLA',
			image: Flamengo,
			score: 3
		},
		awayTeam: {
			acronym: 'VIT',
			image: Vitoria,
			score: 4
		}
	}
];

const GUESSES = [
	{
		id: 1,
		homeTeam: {
			acronym: 'SPO',
			image: Sport,
			guess: null
		},
		awayTeam: {
			acronym: 'PAL',
			image: Palmeiras,
			guess: null
		}
	},
	{
		id: 2,
		homeTeam: {
			acronym: 'SAN',
			image: Santos,
			guess: null
		},
		awayTeam: {
			acronym: 'COR',
			image: Corinthians,
			guess: null
		}
	},
	{
		id: 3,
		homeTeam: {
			acronym: 'SAO',
			image: SaoPaulo,
			guess: 0
		},
		awayTeam: {
			acronym: 'PAR',
			image: Parana,
			guess: 0
		}
	},
	{
		id: 4,
		homeTeam: {
			acronym: 'GRE',
			image: Gremio,
			guess: null
		},
		awayTeam: {
			acronym: 'CRU',
			image: Cruzeiro,
			guess: null
		}
	},
	{
		id: 5,
		homeTeam: {
			acronym: 'FLA',
			image: Flamengo,
			guess: null
		},
		awayTeam: {
			acronym: 'VIT',
			image: Vitoria,
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
