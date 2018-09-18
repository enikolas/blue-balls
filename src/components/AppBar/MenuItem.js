import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { prototype } from 'react-transition-group/TransitionGroup';

const MenuItem = ({
	label, to, icon
}) => {
	const isSelected = (to.length >= 1) 
	const className = isSelected ? 'selected' : '';

	return (
		<li className={className}>
			<img src={icon} alt="Icon"/>
			<span>{label}</span>
		</li>
	);
};

export default MenuItem;

MenuItem.propTypes = {
	label: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	icon: PropTypes.string
};

MenuItem.defaultProps = {
	icon: ''
};