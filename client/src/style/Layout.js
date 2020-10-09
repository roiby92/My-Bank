import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './AppBar'
import Manu from './Manu'
import BottomAppBar from './BottomAppBar'

const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        textAlign: 'center'
    }
});

class Layout extends Component {
    constructor() {
        super()
        this.state = {
            open: false
        }
    }
    handleDrawer = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const { classes,balance } = this.props
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar open={this.state.open} handleDrawer={this.handleDrawer} />
                <Manu open={this.state.open} handleDrawer={this.handleDrawer} />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {this.props.children}
                </main>
                <BottomAppBar balance={balance}/>
            </div>
        );
    }
}
Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(Layout);