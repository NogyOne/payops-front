import React from 'react'
import { getFormatDate } from '@/lib/utils'
import { updateSubStatus } from '@/services/api'
import { Icons } from '@/components/Icons'

export default function Row({
  id,
  name,
  status,
  initialDate,
  endDate,
  handleOpenDeleteModal,
}) {
  const getRemainingDays = () => {
    const difDates = new Date(endDate).getTime() - new Date().getTime()

    let remainingDays = Math.ceil(difDates / (1000 * 60 * 60 * 24))
    if (remainingDays <= 0) {
      remainingDays = 0
      updateSubStatus(id)
    }

    return remainingDays
  }

  return (
    <tr className='text-center bg-white border-b cursor-pointer hover:bg-gray-100'>
      <th
        scope='row'
        className='px-6 py-4 font-medium text-left text-gray-900 whitespace-nowrap overflow-ellipsis'
      >
        {name}
      </th>
      <td
        className={
          status === 'CURRENT'
            ? 'px-6 py-4 text-green-600'
            : 'px-6 py-4 text-red-600'
        }
      >
        {status}
      </td>
      <td className='px-6 py-4'>{getFormatDate(initialDate)}</td>
      <td className='px-6 py-4'>{getFormatDate(endDate)}</td>
      <td className='px-6 py-4'>{getRemainingDays()}</td>
      <td className='flex items-center justify-center py-4 pr-6'>
        <div className='flex space-x-2'>
          <Icons.Pencil className='text-gray-300 hover:text-blue-600' />
          <Icons.X
            className='text-gray-300 hover:text-red-600'
            onClick={() => handleOpenDeleteModal(id)}
          />
        </div>
      </td>
    </tr>
  )
}
