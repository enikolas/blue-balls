import React from 'react';
import { Route } from 'react-router-dom';

import './Content.css';
import Home from './Home/Home';
import TopRanking from './TopRanking/TopPlayers';

const Content = () => (
	<div className="Content">
		<Route exact path="/" component={Home} />
		<Route path="/topplayers" component={TopRanking} />
	</div>
);

export default Content;
