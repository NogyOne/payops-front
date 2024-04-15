'use client'
import React, {useState, useEffect} from 'react'
import Row from '@/components/Row'
import { getCustomers } from '@/services/api'
import ModalDelete from '@/components/ModalDelete'

export default function SubsTable() {
  const [customers, setCustomers] = useState([])
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedSubId, setSelectedSubId] = useState(null)

  const handleOpenDeleteModal = idSub => {
    setSelectedSubId(idSub)
    setShowDeleteModal(true)
  }

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customersData = await getCustomers()
        setCustomers(customersData)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [customers])

  return (
    
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      {showDeleteModal && <ModalDelete idSub={selectedSubId} handleCloseDeleteModal={handleCloseDeleteModal}/>}
      <table className='w-full text-sm text-center text-gray-500 animate-fade-down'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-300 '>
          <tr>
            <th scope='col' className='px-6 py-3 text-left'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'>
              Status
            </th>
            <th scope='col' className='px-6 py-3'>
              Start Date
            </th>
            <th scope='col' className='px-6 py-3'>
              End Date
            </th>
            <th scope='col' className='px-6 py-3'>
              Remaining Days
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customers?.map((customer, index) => (
            <Row
              key={index}
              id={customer?.subscription.id}
              name={customer?.name}
              status={customer?.subscription.status}
              initialDate={customer?.subscription.startDate}
              endDate={customer?.subscription.endDate}
              handleOpenDeleteModal={handleOpenDeleteModal}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
