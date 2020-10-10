import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom'

const drawerWidth = 200;
const styles = theme => ({
    rooti: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        display: 'none'
    }
});

class Manu extends Component {

    handleDrawer = () => {
        this.props.handleDrawer()
    }

    render() {
        const { classes, open,theme } = this.props;
        return (
            <Drawer
                variant="permanent"
                className={classNames(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: classNames({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}>
                <div className={classes.toolbar}>
                    <IconButton onClick={this.handleDrawe}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon onClick={this.handleDrawer}/> : <ChevronLeftIcon onClick={this.handleDrawer}/>}
                    </IconButton>
                </div>
                <List component="nav">
                    <Link to="/transactions"><ListItem onClick={this.handleDrawer} button >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Transactions" />
                    </ListItem>
                    </Link>
                    <Link to="/operations"><ListItem onClick={this.handleDrawer} button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Operetions" />
                    </ListItem>
                    </Link>
                    <Link to="/breakdown"><ListItem onClick={this.handleDrawer} button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Brackdown" />
                    </ListItem>
                    </Link>
                </List>
            </Drawer>
        );
    }
}

Manu.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Manu);