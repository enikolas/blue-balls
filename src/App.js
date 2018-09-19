import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ButtonAppBar from './components/AppBar/ButtonAppBar';
import Content from './components/Content';
import './App.css';

const App = () => (
	<BrowserRouter>
		<div className="App">
			<ButtonAppBar />
			<Content />
		</div>
	</BrowserRouter>
);

export default App;
