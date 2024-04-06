import React from 'react'
import { getFormatDate } from '@/lib/utils'

export default function Row({name, status, initialDate, endDate, daysLeft}) {

const getRemainingDays = () => {
  const difDates = new Date(endDate).getTime() - new Date().getTime()

  const remainingDays = Math.ceil((difDates) / (1000 * 60 * 60 * 24))
  return remainingDays
}

  return (
    <tr className='text-center bg-white border-b cursor-pointer hover:bg-gray-100'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-left text-gray-900 whitespace-nowrap '
                >
                  {name}
                </th>
                {/* Change status from row */}
                <td className={'CURRENT' ? 'px-6 py-4 text-green-600' : 'px-6 py-4 text-red-600'}>{status}</td>
                <td className='px-6 py-4'>{getFormatDate(initialDate)}</td>
                <td className='px-6 py-4'>{getFormatDate(endDate)}</td>
                <td className='px-6 py-4'>{getRemainingDays()}</td>
              </tr>
  )
}
