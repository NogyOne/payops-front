import React from 'react'

export default function Row({name, status, initialDate, endDate, daysLeft}) {
  
const formatDate = dateProv => {
  const date = new Date(dateProv)
  return date.toLocaleDateString('en-US',{
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getRemainingDays = () => {
  const dt1 = new Date(initialDate).getTime()
  const dt2 = new Date().getTime()

  const remainingDays = Math.ceil(((((dt2 - dt1)/1000)/60)/60/24))
  return remainingDays
}

  return (
    <tr className='bg-white border-b '>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
                >
                  {name}
                </th>
                {/* Change status from row */}
                <td className={'CURRENT' ? 'px-6 py-4 text-green-600' : 'px-6 py-4 text-red-600'}>{status}</td>
                <td className='px-6 py-4'>{formatDate(initialDate)}</td>
                <td className='px-6 py-4'>{formatDate(endDate)}</td>
                <td className='px-6 py-4'>{getRemainingDays()}</td>
              </tr>
  )
}
