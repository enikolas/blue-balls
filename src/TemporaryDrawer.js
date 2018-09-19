import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';
import TableIcon from '@material-ui/icons/FormatListNumbered';
import FlagIcon from '@material-ui/icons/Flag';

const styles = {
	list: {
		width: 256,
		height: 48
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	listItemText: {
		fontWeight: 'bold'
	}
};

class TemporaryDrawer extends React.Component {
	constructor() {
		super();
		this.state = {
			left: false
		};
	}

	toggleDrawer(side, open) {
		return () => {
			this.setState({
				[side]: open
			});
		};
	}

	render() {
		const { classes } = this.props;
		const { left } = this.state;

		const sideList = (
			<div className={classes.list}>
				<List
					component="nav"
				>
					<ListItem className={classes.listItem} button component="a" href="#inicio">
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText className={classes.listItemText} inset primary="Início" />
					</ListItem>
					<ListItem className={classes.listItem} button component="a" href="#ranking">
						<ListItemIcon>
							<StarIcon />
						</ListItemIcon>
						<ListItemText className={classes.listItemText} inset primary="Ranking" />
					</ListItem>
					<ListItem className={classes.listItem} button component="a" href="#palpites">
						<ListItemIcon>
							<FlagIcon />
						</ListItemIcon>
						<ListItemText className={classes.listItemText} inset primary="Palpites" />
					</ListItem>
					<ListItem className={classes.listItem} button component="a" href="#tabela">
						<ListItemIcon>
							<TableIcon />
						</ListItemIcon>
						<ListItemText className={classes.listItemText} inset primary="Tabela" />
					</ListItem>
				</List>
				<Divider />
			</div>
		);

		return (
			<div>
				<IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
					<MenuIcon />
				</IconButton>
				<Drawer open={left} onClose={this.toggleDrawer('left', false)}>
					<div
						tabIndex={0}
						role="button"
						onClick={this.toggleDrawer('left', false)}
						onKeyDown={this.toggleDrawer('left', false)}
					>
						{sideList}
					</div>
				</Drawer>
			</div>
		);
	}
}

TemporaryDrawer.propTypes = {
	classes: PropTypes.object.isRequired
};

const firstStep = withStyles(styles);
firstStep(TemporaryDrawer);

export default withStyles(styles)(TemporaryDrawer);
