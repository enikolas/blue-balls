import React from 'react';
import { Route } from 'react-router-dom';

import './Content.css';
import Home from './Home/Home';
import TopPlayers from './TopPlayers/TopPlayers';
import Guesses from './Guesses/Guesses';
import ClubRankings from './ClubRanking/ClubRanking';

const Content = () => (
	<div className="Content">
		<Route exact path="/" component={Home} />
		<Route path="/topplayers" component={TopPlayers} />
		<Route path="/guesses" component={Guesses} />
		<Route path="/clubrankings" component={ClubRankings} />
	</div>
);

export default Content;
