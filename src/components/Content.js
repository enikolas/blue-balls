import React from 'react';
import { Route } from 'react-router-dom';

import './Content.css';
import Home from './Home/Home';
import TopPlayers from './TopPlayers/TopPlayers';

const Content = () => (
	<div className="Content">
		<Route exact path="/" component={Home} />
		<Route path="/topplayers" component={TopPlayers} />
	</div>
);

export default Content;
