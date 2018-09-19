import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItem = ({
	label, to, path, icon
}) => {
	const isSelected = (to.length >= 1 && to === path);
	const className = isSelected ? 'selected' : '';

	return (
		<li className={className}>
			<div className="icon">
				<img src={icon} alt="icon" />
			</div>
			<Link to={to}>
				{label}
			</Link>
		</li>
	);
};

export default MenuItem;

MenuItem.propTypes = {
	label: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
	icon: PropTypes.string
};

MenuItem.defaultProps = {
	icon: ''
};
