import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import MenuIcon from 'C:\\Users\\rcaetano\\blue-balls\\src\\Icons\\menuIcon.svg';
import MenuItem from './MenuItem';
import FlagIcon from 'C:\\Users\\rcaetano\\blue-balls\\src\\Icons\\flagIcon.svg';
import HomeIcon from 'C:\\Users\\rcaetano\\blue-balls\\src\\Icons\\homeIcon.svg';
import StarIcon from 'C:\\Users\\rcaetano\\blue-balls\\src\\Icons\\starIcon.svg';
import ListIcon from 'C:\\Users\\rcaetano\\blue-balls\\src\\Icons\\listIcon.svg';
import './TopAppBar.css';

class TopAppBar extends Component {
	constructor(props) {
		super(props);

		this._onClick = this._onClick.bind(this);
		this.state = { isOpen: false};
	}

	_onClick() {
		const { isOpen } = this.state;
		this.setState({ isOpen: !isOpen});
	}

	render (){
		const { isOpen } = this.state;

		return (
			<nav className="TopAppBar" onClick={this._onClick}>
				<a href="#" className="menuIcon">
					<img src={MenuIcon} alt="hamburguer-menu" className="menuIcon"/>
				</a>
				<p className="menuTitle">
					<h3>Blue Balls</h3>
				</p>
				<div className={`DrawerMenu ${ isOpen ? 'open' : ''}`}>
					<ul>
						<MenuItem label="Início" to="/" icon={HomeIcon}/>
						<MenuItem label="Ranking" to="/ranking" icon={StarIcon}/>
						<MenuItem label="Palpites" to="/palpites" icon={FlagIcon}/>
						<MenuItem label="Tabela" to="/tabela" icon={ListIcon}/>
					</ul>
				</div>
			</nav>
		);
	}
};

export default TopAppBar;