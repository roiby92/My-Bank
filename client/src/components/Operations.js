import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import { Link } from 'react-router-dom'

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
        width: '70%',
        height: '30%',
        marginLeft: '15%'
    },
    formControl: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
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
        if (transcation.amount && transcation.category && transcation.vendor) {
            this.props.setNewTransaction(transcation)
            this.setState({
                amount: '',
                vendor: "",
                category: ""
            }, () => { return true })
        }
        else {
            return false
        }
    }

    withdraw = () => {
        const transcation = { amount: 0, vendor: this.state.vendor, category: this.state.category }
        const negativAmount = parseInt(this.state.amount) - (parseInt(this.state.amount) * 2)
        transcation.amount = negativAmount
        if (transcation.amount && transcation.category && transcation.vendor) {
            this.props.setNewTransaction(transcation)
            this.setState({
                amount: '',
                vendor: "",
                category: ""
            }, () => { return true })
        } else {
            return false
        }
    }

    render() {
        const state = this.state
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
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-helper">Category</InputLabel>
                        <Select
                            value={state.category}
                            onChange={this.setTranscation}
                            input={<Input name="category" id="age-helper" />}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {categories.map(c => <MenuItem value={c}>{c}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <Divider />
                    <Link to="/transactions"><Button onClick={this.deposit}
                        variant="contained"
                        className={classes.depositButton}
                        color="primary">Deposit</Button>
                    </Link>
                    <Link to="/transactions"><Button onClick={this.withdraw}
                        variant="contained"
                        className={classes.withdraowButton}
                        color="primary">Withdraw</Button>
                    </Link>
                </Paper>
            </Grid>
        );
    }
}

export default withStyles(styles)(Operations);