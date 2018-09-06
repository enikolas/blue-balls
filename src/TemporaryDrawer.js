import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = {
  list: {
    width: 256,
    height: 48,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
      <List
       component="nav"
       subheader={<ListSubheader component="div">Menu</ListSubheader>}>
        <ListItemText>Início</ListItemText>
        <ListItemText>Ranking</ListItemText>
        <ListItemText>Palpites</ListItemText>
        <ListItemText>Tabela</ListItemText>      
      </List>
      <Divider />
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <Divider />
      </div>
    );

    return (
      <div>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)} >
            <MenuIcon />
        </IconButton>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
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
  classes: PropTypes.object.isRequired,
};

const firstStep = withStyles(styles);
firstStep(TemporaryDrawer);

export default withStyles(styles)(TemporaryDrawer);