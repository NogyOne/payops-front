
export const getFormatDate = dateProv => {
    const date = new Date(dateProv)
    return date.toLocaleDateString('en-US',{
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }