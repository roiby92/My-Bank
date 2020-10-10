import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    icon: {
        margin: theme.spacing.unit,
        fontSize: 32,
    },
    greenRow: {
        backgroundColor: "#4caf50"
    },
    redRow: {
        backgroundColor: "#f44336"
    }
});


class Transaction extends Component {

    deleteTransaction = () => {
        this.props.deleteTransaction(this.props.transaction._id)
    }

    render() {
        let { transaction, classes } = this.props
        return (
            <TableRow className={transaction.amount > 0 ? classes.greenRow : classes.redRow}>
                <TableCell align="right">{transaction.vendor}</TableCell>
                <TableCell align="right">{transaction.amount}</TableCell>
                <TableCell align="right">{transaction.category}</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">
                    <DeleteIcon
                        className={classes.icon}
                        onClick={this.deleteTransaction} />
                </TableCell>
            </TableRow>
        );
    }
}
Transaction.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Transaction);