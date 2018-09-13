import React, { Component } from 'react';
import RankingTable from './components/RankingTable';
import ButtonAppBar from './ButtonAppBar.js';
import './App.css';

const POSICOES = [
	{position: 1, name: 'Matheus', self: false, pontos: 100, acertos: 10},
	{position: 2, name: 'Nik', self: false, pontos: 90, acertos: 90},
	{position: 3, name: 'Diogo', self: false, pontos: 80, acertos: 8},
	{position: 4, name: 'Bruno', self: false, pontos: 70, acertos: 7},
	{position: 5, name: 'Paulo', self: false, pontos: 60, acertos: 6},
	{position: 6, name: 'Rodolfo de Oliveira Caetano', self: true, pontos: 50, acertos: 5},
	{position: 7, name: 'Falsarelo', self: false, pontos: 40, acertos: 4},
	{position: 8, name: 'Hossomi', self: false, pontos: 30, acertos: 3},
];

class App extends Component {
  render() {
    return (
			<div>
				<ButtonAppBar/>
      	<RankingTable posicoes={POSICOES} />
			</div>
    );
  }
}

export default App;
