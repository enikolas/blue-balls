import React, { Component } from 'react';
import SimpleRankingTable from './components/SimpleRankingTable';
import './App.css';

const POSICOES = [
	{position: 1, name: 'Matheus', self: false},
	{position: 2, name: 'Nik', self: false},
	{position: 3, name: 'Diogo', self: false},
	{position: 4, name: 'Bruno', self: false},
	{position: 5, name: 'Paulo', self: false},
	{position: 6, name: 'Rodolfo', self: true},
	{position: 7, name: 'Falsarelo', self: false},
	{position: 8, name: 'Hossomi', self: false},
];

class App extends Component {
  render() {
    return (
      <SimpleRankingTable posicoes={POSICOES} />
    );
  }
}

export default App;
