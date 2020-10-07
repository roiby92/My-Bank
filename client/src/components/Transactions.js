import React, { Component } from 'react';
import Transaction from './Transaction'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    transactions: {
        width: '100%',
        marginTop: theme.spacing.unit * 2,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class Transactions extends Component {

    render() {
        const { classes } = this.props;
        const transactions = this.props.transactions
        return (
            <Paper className={classes.transactions}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Vendor</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.map(t => <Transaction key={t._id} transaction={t}
                            deleteTransaction={this.props.deleteTransaction} />)}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

Transactions.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Transactions);