import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ServiceRequest from './service/ServiceRequest'
import Home from './components/Home'
import Transactions from './components/Transactions'
import Operations from './components/Operations'
import Layout from './style/Layout'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.ServiceRequest = new ServiceRequest()
    this.categories = []
    this.state = {
      transactions: [],
      balance: 0,
    }
  }

  componentDidMount = async () => {
    let categoriesDB = await this.ServiceRequest.getCategories()
    this.categories = categoriesDB.map(category => category.category)
    const transactions = await this.ServiceRequest.getTranscations()
    this.setState({
      transactions: transactions
    }, () => this.setBalance())
  }

  setBalance = () => {
    let Total = 0
    this.state.transactions.forEach(t => Total += t.amount)
    this.setState({
      balance: Total
    })
  }

  setNewTransaction = async transcation => {
    const transactionDb = await this.ServiceRequest.postTranscation(transcation)
    const transactions = [...this.state.transactions]
    transactions.push(transactionDb)
    this.setState({ transactions: transactions }, () => this.setBalance())
  }

  deleteTransaction = async transactionId => {
    const transactionDb = await this.ServiceRequest.deleteTransaction(transactionId)
    if (transactionDb) {
      const transactions = [...this.state.transactions]
      let index = transactions.findIndex(t => t._id === transactionId)
      transactions.splice(index, 1)
      this.setState({ transactions: transactions }, () => this.setBalance())
    }
    return false;
  }

  render() {
    console.log(this.state.balance);
    return (
      <Fragment>
        <Router>
          <Layout>
            {/* <Link to="/">Home</Link>
            <Link to="/transactions">transcations</Link>
            <Link to="/operations">Operations</Link> */}
            <Route path="/" exact render={() => <Home />} />
            <Route path="/transactions" exact render={
              () => <Transactions
                transactions={this.state.transactions}
                balance={this.state.balance}
                updateBalance={this.updateBalance}
                deleteTransaction={this.deleteTransaction} />} />
            <Route path="/operations" exact render={
              () => <Operations setNewTransaction={this.setNewTransaction} categories={this.categories} />} />
          </Layout >
        </Router >
      </Fragment >)

  }
}

export default App;
