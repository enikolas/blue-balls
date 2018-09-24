import React from 'react';
import { Route } from 'react-router-dom';

import './Content.css';
import Home from './Home/Home';
import Guesses from './Guesses/Guesses';

const Content = () => (
	<div className="Content">
		<Route exact path="/" component={Home} />
		<Route path="/guesses" component={Guesses} />
	</div>
);

export default Content;
