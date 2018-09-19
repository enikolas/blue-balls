import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Content from './components/Content';
import TopAppBar from './components/AppBar/TopAppBar';
import './App.css';

const App = () => (
	<BrowserRouter>
		<div className="App">
			<Header />
			<TopAppBar />
			<Content />
		</div>
	</BrowserRouter>
);

export default App;
