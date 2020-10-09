import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 25,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 7,

    overflowX: 'auto',
  },
  table: {
    minWidth: '50%',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class Breakdown extends Component {
  render() {
    const { classes,TotalAmountByCategoty } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell align="center">Category</CustomTableCell>
              <CustomTableCell align="center" >Amaount</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TotalAmountByCategoty.map(row => (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell align="center">
                  {row._id}
                </CustomTableCell>
                <CustomTableCell align="center">{row.total}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
Breakdown.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Breakdown);