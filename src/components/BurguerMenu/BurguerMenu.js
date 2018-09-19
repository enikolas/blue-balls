import React from 'react';
import PropTypes from 'prop-types';

import './BurguerMenu.css';

const BurguerMenu = ({ isOpen, onClick }) => (
	<div className={`BurguerMenu ${isOpen ? 'open' : ''}`}>
		<button
			type="button"
			onClick={() => { onClick(); }}
		>
			<svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
				<path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" />
				<path d="M0 0h24v24H0z" fill="none" />
			</svg>
		</button>
	</div>
);

export default BurguerMenu;

BurguerMenu.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
};
