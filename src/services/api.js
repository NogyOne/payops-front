const API_URL = 'http://localhost:3001'

export const getSubscriptions = async () => {
    try {
        return await (await fetch(`${API_URL}/subscriptions`)).json()
    } catch (error) {
        console.log(error)
    }
}