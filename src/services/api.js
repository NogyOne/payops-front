const API_URL = 'http://localhost:3001'

export const getSubscriptions = async () => {
  try {
    return await (await fetch(`${API_URL}/subscriptions`)).json()
  } catch (error) {
    throw new Error(error)
  }
}

export const updateSubStatus = async id => {
  try {
    return await (
      await fetch(`${API_URL}/subscriptions/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json()
  } catch (error) {
    throw new Error(error)
  }
}

export const getCustomers = async page => {
  try {
    const response = await fetch(`${API_URL}/customers/page/${page}`)
    if (!response.ok) {
      const errorMessage = await response.json()
      throw new Error(errorMessage.message || 'Failed to fetch customers')
    }
    return await response.json()
  } catch (error) {
    throw new Error(error.message)
  }
}

export const getCustomersByFilters = async (page, plainText, status) => {
  try {
    return await (
      await fetch(`${API_URL}/customers/${page}/${plainText}/${status}`)
    ).json()
  } catch (error) {
    throw new Error(error)
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
        body: JSON.stringify(customerObject),
      })
    ).json()
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteSubscription = async id => {
  try {
    return await (
      await fetch(`${API_URL}/subscriptions/${id}`, {
        method: 'DELETE',
      })
    ).json()
  } catch (error) {
    throw new Error(error)
  }
}

export const getCustomerById = async id => {
  try {
    const response = await fetch(`${API_URL}/customers/${id}`)
    if (!response.ok) {
      const errorMessage = await response.json()
      throw new Error(errorMessage.message || 'Failed to get Customer')
    }
    return await response.json()
  } catch (error) {
    throw new Error(error)
  }
}

export const updateCustomer = async (id, customerObj) => {
  try {
    return await (
      await fetch(`${API_URL}/customers/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerObj),
      })
    ).json()
  } catch (error) {
    throw new Error(error)
  }
}

export const login = async userObj => {
  try {
    return await (
      await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObj),
      })
    ).json()
  } catch (error) {
    throw new Error(error)
  }
}

export const addAdmin = async adminObj => {
  try {
    return await (
      await fetch(`${API_URL}/adminUsers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminObj),
      })
    ).json()
  } catch (error) {
    throw new Error(error)
  }
}
