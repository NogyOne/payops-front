'use client'
import React, { useState, useEffect } from 'react'
import Row from '@/components/Row'
import { getCustomers, getCustomersByFilters } from '@/services/api'
import ModalDelete from '@/components/ModalDelete'
import SearchBar from '@/components/SearchBar'

export default function SubsTable() {
  const [customers, setCustomers] = useState([])
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedSubId, setSelectedSubId] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchParams, setSearchParams] = useState({ plainText: ' ', status: 'All' })

  const handleSearchSubmit = async (status, plainText) => {
    //Arreglar page = 1 con validaciones
    const customersData = await getCustomersByFilters(currentPage, plainText, status)
    console.log(customersData)
    setCustomers(customersData)
  }

  const handleOpenDeleteModal = idSub => {
    setSelectedSubId(idSub)
    setShowDeleteModal(true)
  }

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false)
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customersData = await getCustomersByFilters(currentPage, searchParams.plainText, searchParams.status)
        setCustomers(customersData)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [searchParams, currentPage])

  return (
    <>
      <SearchBar handleSearchSubmit={handleSearchSubmit}/>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        {showDeleteModal && (
          <ModalDelete
            idSub={selectedSubId}
            handleCloseDeleteModal={handleCloseDeleteModal}
          />
        )}
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
      {/* Buttons Pagination */}
      <div className='flex items-end justify-end'>
        <div className='inline-flex mt-2 shadow-md xs:mt-0'>
          <button
            className='flex items-center justify-center h-8 px-3 text-sm font-medium bg-white rounded-s hover:bg-gray-100'
            disabled={currentPage === 1 || customers === 0}
            onClick={handlePrevPage}
          >
            Prev
          </button>
          <button
            className='flex items-center justify-center h-8 px-3 text-sm font-medium bg-white border-0 border-gray-200 border-s rounded-e hover:bg-gray-100'
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}
