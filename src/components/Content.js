import React from 'react';
import { Route } from 'react-router-dom';

import './Content.css';
import Home from './Home/Home';

const Content = () => (
	<div className="Content">
		<Route exact path="/" component={Home} />
	</div>
);

export default Content;
