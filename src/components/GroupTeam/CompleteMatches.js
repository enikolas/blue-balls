import React from 'react';
import GroupTeam from './GroupTeam';
import './CompleteMatches.css';

import Palmeiras from './ImageTeam/palmeiras.png'
import Sport from './ImageTeam/sport.png';
import Santos from './ImageTeam/santos.png';
import Corinthians from './ImageTeam/corinthians.png';
import SaoPaulo from './ImageTeam/sao_paulo.png';
import Parana from './ImageTeam/parana.png';
import Gremio from './ImageTeam/gremio.png';
import Cruzeiro from './ImageTeam/cruzeiro.png';
import Flamengo from './ImageTeam/flamengo.png';
import Vitoria from './ImageTeam/vitoria.png';

const GAMES = [
	{
		id: 1,
		homeTeam: {
			acronym: 'SPO',
			image: Sport,
			score: 1,
		},
		awayTeam: {
			acronym: 'PAL',
			image: Palmeiras,
			score: 3,
		}
	},
	{
		id: 2,
		homeTeam: {
			acronym: 'SAN',
			image: Santos,
			score: 4,
		},
		awayTeam: {
			acronym: 'COR',
			image: Corinthians,
			score: 3,
		}
	},
	{
		id: 3,
		homeTeam: {
			acronym: 'SAO',
			image: SaoPaulo,
			score: 0,
		},
		awayTeam: {
			acronym: 'PAR',
			image: Parana,
			score: 0,
		}
	},
	{
		id: 4,
		homeTeam: {
			acronym: 'GRE',
			image: Gremio,
			score: 2,
		},
		awayTeam: {
			acronym: 'CRU',
			image: Cruzeiro,
			score: 1,
		}
	},
	{
		id: 5,
		homeTeam: {
			acronym: 'FLA',
			image: Flamengo,
			score: 3,
		},
		awayTeam: {
			acronym: 'VIT',
			image: Vitoria,
			score: 4,
		}
	},
];

const CompleteMatches = ({isScoreVisible}) => {

	const buttonName = isScoreVisible ? 'Make your guess' : 'View results';
	const title = isScoreVisible ? 'Next games'	 : 'Last results';

	return (
	<div className="CompleteMatches">
		<h2>{title}</h2>
		<GroupTeam matches={GAMES} isScoreVisible={!isScoreVisible} />
		<button className="ChoiceScoresButton">{buttonName}</button>
	</div>
	)
};

export default CompleteMatches;
