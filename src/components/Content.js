import React from 'react';
import RankingTable from './RankingTable/RankingTable';
import CompleteMatches from './GroupTeam/CompleteMatches';
import './Content.css';

const POSITIONS = [
	{position: 1, name: 'Matheus', self: false, score: 100, hit: 10},
	{position: 2, name: 'Nik', self: false, score: 90, hit: 90},
	{position: 3, name: 'Diogo', self: false, score: 80, hit: 8},
	{position: 4, name: 'Bruno', self: false, score: 70, hit: 7},
	{position: 5, name: 'Paulo', self: false, score: 60, hit: 6},
	{position: 6, name: 'Rodolfo de Oliveira Caetano', self: true, score: 50, hit: 5},
	{position: 7, name: 'Falsarelo', self: false, score: 40, hit: 4},
	{position: 8, name: 'Hossomi', self: false, score: 30, hit: 3},
];

const Content = () => (
	<div className="Content">
		<RankingTable positions={POSITIONS} />
		<CompleteMatches isScoreVisible={false} />
		<CompleteMatches isScoreVisible={true} />
	</div>
);

export default Content;
