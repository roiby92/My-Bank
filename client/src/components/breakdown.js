import React, { Component } from 'react';

class breakdown extends Component {

    componentDidMount =()=>{
        this.props.transactions
    }

    render() {

        return (
            <div>
                <TableCell align="right">{transaction.amount}</TableCell>
                <TableCell align="right">{transaction.category}</TableCell>
            </div>
        );
    }
}

export default breakdown;