import React from 'react';

import TopPlayersTable from './TopPlayersTable';
import './TopPlayers.css';

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

const TopPlayers = () => (
	<div className="TopPlayers">
		<h1>Top players ranking</h1>
		<TopPlayersTable positions={POSITIONS} />
	</div>
);

export default TopPlayers;
