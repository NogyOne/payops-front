export const getFormatDate = dateProv => {
  const date = new Date(dateProv)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const validateForm = fieldsArr => {
  fieldsArr.forEach(field => {
    if (field.trim() === '') {
      console.log(field.trim())
      return false
    }
  })
  return true
}

export const validatePassword = (pass, confirmPass) => {
  if (pass === confirmPass) {
    return true
  }
  return false
}
