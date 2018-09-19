import React from 'react';
import './Content.css';
import { Route } from 'react-router-dom';
import Home from './Home';

const Content = () => (
	<div className="Content">
		<Route exact path="/" component={Home} />
	</div>
);

export default Content;
