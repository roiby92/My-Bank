import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
const styles = theme => ({
    rooti: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4,
    },
    withdraowButton: {
        margin: theme.spacing.unit * 2,
        backgroundColor: 'red'
    },
    depositButton: {
        margin: theme.spacing.unit * 2,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200
    },
    grid: {
        width: '60%',
        height: '30%',
        marginLeft: '25%'
    }
});

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: '',
            vendor: "",
            category: ""
        }
    }

    setTranscation = event => {
        const value = event.target.value
        const name = event.target.name
        this.setState({ [name]: value })
    }

    deposit = () => {
        const transcation = { amount: 0, vendor: this.state.vendor, category: this.state.category }
        const amount = parseInt(this.state.amount)
        transcation.amount = amount
        console.log(transcation.amount);
        this.props.setNewTransaction(transcation)
        this.setState({
            amount: '',
            vendor: "",
            category: ""
        })
    }

    withdraw = () => {
        const transcation = { amount: 0, vendor: this.state.vendor, category: this.state.category }
        const negativAmount = parseInt(this.state.amount) - (parseInt(this.state.amount) * 2)
        transcation.amount = negativAmount
        console.log(transcation.amount);
        this.props.setNewTransaction(transcation)
        this.setState({
            amount: '',
            vendor: "",
            category: ""
        })
    }

    render() {
        let state = this.state
        const { classes, categories } = this.props
        return (
            <Grid container className={classes.grid}>
                <Grid item></Grid>
                <Paper className={classes.rooti} elevation={12}>
                    <Typography variant="h6" component="h1">
                        Withdraw / Deposit
                    </Typography>
                    <TextField
                        type="number"
                        name="amount"
                        placeholder="amount"
                        value={state.amount}
                        onChange={this.setTranscation}
                        id="standard-number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal" />

                    <Divider />
                    <TextField
                        name="vendor"
                        placeholder="vendor"
                        value={state.vendor}
                        onChange={this.setTranscation}
                        id="standard-textarea"
                        className={classes.textField}
                        margin="normal" />
                    <Divider />
                    <Select
                        multiple
                        name="category"
                        placeholder="category"
                        value={categories}
                        onChange={this.setTranscation}
                        id="standard-textarea"
                        className={classes.textField}
                        margin="normal">
                    
                    </Select>
                    <Divider />
                    <Button onClick={this.deposit}
                        variant="contained"
                        className={classes.depositButton}
                        color="primary">Deposit</Button>
                    <Button onClick={this.withdraw}
                        variant="contained"
                        className={classes.withdraowButton}
                        color="primary">Withdraw</Button>
                </Paper>
            </Grid>
        );
    }
}

export default withStyles(styles)(Operations);