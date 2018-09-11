import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimpleRankingTable from './components/SimpleRankingTable';
import registerServiceWorker from './registerServiceWorker';

const POSICOES = [
    {position: '1', name: 'Rodolfo'},
    {position: '2', name: 'Nik'},
    {position: '3', name: 'Diogo'},
    {position: '4', name: 'Bruno'}  
];

ReactDOM.render(<SimpleRankingTable posicoes={POSICOES} />, document.getElementById('root'));
registerServiceWorker();
