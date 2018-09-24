import React from 'react';

import Palmeiras from '../GroupTeam/ImageTeam/palmeiras.png';
import Sport from '../GroupTeam/ImageTeam/sport.png';
import Santos from '../GroupTeam/ImageTeam/santos.png';
import Corinthians from '../GroupTeam/ImageTeam/corinthians.png';
import SaoPaulo from '../GroupTeam/ImageTeam/sao_paulo.png';
import Parana from '../GroupTeam/ImageTeam/parana.png';
import Gremio from '../GroupTeam/ImageTeam/gremio.png';
import Cruzeiro from '../GroupTeam/ImageTeam/cruzeiro.png';
import Flamengo from '../GroupTeam/ImageTeam/flamengo.png';
import Vitoria from '../GroupTeam/ImageTeam/vitoria.png';
import GroupGuesses from './GroupGuesses';
import './Guesses.css';

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
			guess: 10
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
