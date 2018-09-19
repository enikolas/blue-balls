import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import TemporaryDrawer from '../../TemporaryDrawer';


const styles = {
	root: {
		flexGrow: 1
	},
	flex: {
		flexGrow: 1
	}
};

const ButtonAppBar = ({ classes }) => (
	<div className={classes.root}>
		<AppBar position="static">
			<Toolbar>
				<TemporaryDrawer />
				<Typography
					variant="title"
					color="inherit"
					className={classes.flex}
				>
					{'Blue Balls'}
				</Typography>
			</Toolbar>
		</AppBar>
	</div>
);


ButtonAppBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
