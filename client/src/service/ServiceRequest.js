import axios from 'axios'

class ServiceRequest {

    getTranscations = async () => {
        const transcations = await axios.get('http://localhost:3100/transactions')
        return transcations.data
    }
    getCategories = async () => {
        const categories = await axios.get('http://localhost:3100/categories')
        return categories.data
    }

    postTranscation = async (transaction) => {
        const newTransaction = await axios.post('http://localhost:3100/transaction', transaction)
        return newTransaction.data
    }
    deleteTransaction = async transcationId => {
        const transaction = await axios.delete(`http://localhost:3100/transaction/${transcationId}`)
        if (transaction) {
            return true
        }
        else {
            return false
        }
    }
    getTotalAmountByCategoty = async () => {
        const totalAaoutByCategoty = await axios.get('http://localhost:3100/total')
        return totalAaoutByCategoty.data
    }

}

export default ServiceRequest