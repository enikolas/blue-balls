import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import FlagIcon from './Icons/flagIcon.svg';
import HomeIcon from './Icons/homeIcon.svg';
import StarIcon from './Icons/starIcon.svg';
import ListIcon from './Icons/listIcon.svg';
import BurguerMenu from '../BurguerMenu/BurguerMenu';
import MenuItem from './MenuItem';
import './TopAppBar.css';

class TopAppBar extends Component {
	constructor(props) {
		super(props);

		this._onClick = this._onClick.bind(this);
		this.state = { isOpen: false };
	}

	_onClick() {
		const { isOpen } = this.state;
		this.setState({ isOpen: !isOpen });
	}

	render() {
		const { location: { pathname } } = this.props;
		const { isOpen } = this.state;

		/*
			eslint-disable jsx-a11y/click-events-have-key-events,
			jsx-a11y/no-noninteractive-element-interactions
		*/
		return (
			<nav className="TopAppBar" onClick={this._onClick}>
				<BurguerMenu
					isOpen={isOpen}
					onClick={() => { this.setState({ isOpen: !isOpen }); }}
				/>
				<div className={`DrawerMenu ${isOpen ? 'open' : ''}`}>
					<ul>
						<MenuItem label="Home" to="/" path={pathname} icon={HomeIcon} />
						<MenuItem label="Top players" to="/topplayers" path={pathname} icon={StarIcon} />
						<MenuItem label="Guesses" to="/guesses" path={pathname} icon={FlagIcon} />
						<MenuItem label="Club rankings" to="/clubrankings" path={pathname} icon={ListIcon} />
					</ul>
				</div>
			</nav>
		);
		/*
			eslint-enable jsx-a11y/click-events-have-key-events,
			jsx-a11y/no-noninteractive-element-interactions
		*/
	}
}

export default withRouter(TopAppBar);

TopAppBar.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string
	}).isRequired
};
