const API_URL = 'http://localhost:3001'

export const getSubscriptions = async () => {
  try {
    return await (await fetch(`${API_URL}/subscriptions`)).json()
  } catch (error) {
    console.log(error)
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
    console.log(error)
  }
}

export const getCustomers = async page => {
  try {
    return await (
      await fetch(`${API_URL}/customers/page/${page}`)
    ).json()
  } catch (error) {
    console.log(error)
  }
}

export const getCustomersByFilters = async (page, plainText, status) => {
    try {
        return await (
            await fetch(`${API_URL}/customers/${page}/${plainText}/${status}`)
        ).json()
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
        body: JSON.stringify(customerObject),
      })
    ).json()
  } catch (error) {
    console.log(error)
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
    console.log(error)
  }
}
