const API_URL = 'http://localhost:3001'

export const getSubscriptions = async () => {
    try {
        return await (
            await fetch(`${API_URL}/subscriptions`)).json()
    } catch (error) {
        console.log(error)
    }
}

export const getCustomers = async () => {
    try {
        return await (
            await fetch(`${API_URL}/customers`)).json()
    } catch (error) {
        console.log(error)
    }
}

export const addCustomer = async customerObject => {
    try {
        return await (
            await fetch(`${API_URL}/customers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(customerObject)
            })).json()
    } catch (error) {
        console.log(error)
    }
}