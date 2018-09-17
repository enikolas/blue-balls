import React from 'react';
import GroupTeam from './GroupTeam';
import './CompleteMatches.css';

const GAMES = [
	{
		id: 1,
		homeTeam: {
			acronym: 'SPO',
			image: 'https://s.glbimg.com/es/sde/f/equipes/2015/07/21/sport65.png',
			score: 1,
		},
		awayTeam: {
			acronym: 'PAL',
			image: 'https://s.glbimg.com/es/sde/f/equipes/2014/04/14/palmeiras_60x60.png',
			score: 3,
		}
	},
	{
		id: 2,
		homeTeam: {
			acronym: 'SAN',
			image: 'https://s.glbimg.com/es/sde/f/equipes/2014/04/14/santos_60x60.png',
			score: 4,
		},
		awayTeam: {
			acronym: 'COR',
			image: 'https://s.glbimg.com/es/sde/f/equipes/2014/04/14/corinthians_60x60.png',
			score: 3,
		}
	},
	{
		id: 3,
		homeTeam: {
			acronym: 'SAO',
			image: 'https://s.glbimg.com/es/sde/f/equipes/2014/04/14/sao_paulo_60x60.png',
			score: 0,
		},
		awayTeam: {
			acronym: 'PAR',
			image: 'https://s.glbimg.com/es/sde/f/equipes/2014/04/13/parana_60x60.png',
			score: 0,
		}
	},
	{
		id: 4,
		homeTeam: {
			acronym: 'GRE',
			image: 'https://s.glbimg.com/es/sde/f/equipes/2014/04/14/gremio_60x60.png',
			score: 2,
		},
		awayTeam: {
			acronym: 'CRU',
			image: 'https://s.glbimg.com/es/sde/f/equipes/2015/04/29/cruzeiro_65.png',
			score: 1,
		}
	},
	{
		id: 5,
		homeTeam: {
			acronym: 'FLA',
			image: 'https://s.glbimg.com/es/sde/f/equipes/2018/04/09/Flamengo-65.png',
			score: 3,
		},
		awayTeam: {
			acronym: 'VIT',
			image: 'https://s.glbimg.com/es/sde/f/equipes/2014/04/14/vitoria_60x60.png',
			score: 4,
		}
	},
];

const CompleteMatches = ({isNextGame}) => {

	const buttonName = isNextGame ? 'Palpitar' : 'Visualizar';
	const title = isNextGame ? 'Próximos Jogos'	 : 'Últimos Resultados';

	return (
	<div className="CompleteMatches">
		<div className="CompleteTitle"><h3>{title}</h3></div>
		<GroupTeam matches={GAMES} isScoreVisible={!isNextGame} />
		<button className="ChoiceScoresButton">{buttonName}</button>
	</div>
	)
};

export default CompleteMatches;
