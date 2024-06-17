import React, { useState, useEffect } from 'react'
import { getFormatDate } from '@/lib/utils'
import { updateSubStatus, sendEmail } from '@/services/api'
import { Icons } from '@/components/Icons'

export default function Row({
  idCustomer,
  idSub,
  name,
  status,
  initialDate,
  endDate,
  handleOpenDeleteModal,
  handleOpenEditModal,
  email,
}) {
  const [remainingDays, setRemainingDays] = useState(
    calculateRemainingDays(endDate)
  )

  function calculateRemainingDays(endDate) {
    const difDates = new Date(endDate).getTime() - new Date().getTime()
    return Math.ceil(difDates / (1000 * 60 * 60 * 24))
  }

  useEffect(() => {
    // Función para actualizar los días restantes
    const updateRemainingDays = () => {
      const days = calculateRemainingDays(endDate)
      setRemainingDays(days > 0 ? days : 0)

      if (days <= 0) {
        updateSubStatus(idSub)
          .then(() => {
            // sendEmail({
            //   to: email,
            //   subject: 'Company name',
            //   html: '<h2>Subscription Expired, renovate it now</h2><br/> <p>Your subscription has been expired.</p>',
            // })
          })
          .catch(error =>
            console.error('Error updating subscription status', error)
          )
      }
    }

    // Llamar a la función de actualización inmediatamente
    updateRemainingDays()

    // Establecer un intervalo para actualizar los días restantes cada 24 horas
    const intervalId = setInterval(updateRemainingDays, 24 * 60 * 60 * 1000)

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId)
  }, [endDate, idSub, email])

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
            ? 'px-6 py-4 text-green-400 font-semibold'
            : 'px-6 py-4 text-red-600 font-semibold'
        }
      >
        {status}
      </td>
      <td className='px-6 py-4'>{getFormatDate(initialDate)}</td>
      <td className='px-6 py-4'>{getFormatDate(endDate)}</td>
      <td className='px-6 py-4'>{remainingDays}</td>
      <td className='flex items-center justify-center py-4 pr-6'>
        <div className='flex space-x-2'>
          <Icons.Pencil
            className='text-gray-300 hover:text-blue-600'
            onClick={() => handleOpenEditModal(idCustomer)}
          />
          <Icons.X
            className='text-gray-300 hover:text-red-600'
            onClick={() => handleOpenDeleteModal(idSub)}
          />
        </div>
      </td>
    </tr>
  )
}
