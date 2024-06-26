'use client'
import React, { useState, useEffect } from 'react'
import Row from '@/components/Row'
import { getCustomersByFilters, getCustomers } from '@/services/api'
import ModalDelete from '@/components/ModalDelete'
import ModalEdit from '@/components/ModalEdit'
import SearchBar from '@/components/SearchBar'
import { Icons } from '@/components/Icons'
import { toast } from 'sonner'

export default function SubsTable({ setShowImage }) {
  const [customers, setCustomers] = useState([])
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedSubId, setSelectedSubId] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [status, setStatus] = useState('All')
  const [plainText, setPlainText] = useState(' ')

  const handleSearchSubmit = async (status, plainText) => {
    setCurrentPage(1)
    setStatus(status)
    setPlainText(plainText)
    const customersData = await getCustomersByFilters(
      currentPage,
      plainText,
      status
    )
    setCustomers(customersData)
  }

  const handleOpenEditModal = id => {
    setSelectedSubId(id)
    setShowEditModal(true)
  }

  const handleCloseEdit = () => {
    setShowEditModal(false)
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

  const handleRefresh = () => {
    //window.location.reload()
    fetchData()
    toast.info('Subscriptions page refreshed')
  }

  useEffect(() => {
    const fetchCustomersDefault = async () => {
      try {
        const customersDefault = await getCustomersByFilters(
          currentPage,
          plainText,
          status
        )
        setCustomers(customersDefault)
        setShowImage(customersDefault.length === 0)
      } catch (error) {
        toast.error('Error getting customers. Try later.')
      }
    }

    // const promise =
    fetchCustomersDefault()

    // toast.promise(promise, {
    //   loading: 'Loading...',
    //   success: 'Customers loaded successfully',
    //   error: 'Error getting customers. Try later.',
    // }) //Check it later, maybe it won't work well
  }, [currentPage]) //customers dependecy makes infinite loop

  // useEffect(() => {
  //   const fetchCustomersDefault = async () => {
  //     try {
  //       const customersDefault = await getCustomers(currentPage)
  //       setCustomers(customersDefault)
  //     } catch (error) {
  //       toast.error('Error getting customers. Try later.')
  //     }
  //   }

  //   fetchCustomersDefault()
  // }, [currentPage])

  // useEffect(() => {
  //   fetchData()
  //   console.log('ola')
  // }, [searchParams, currentPage]) //SearchParams maybe is not neccesary bc currentpage is updated when search is purchased

  // const fetchData = async () => {
  //   try {
  //     const customersData = await getCustomersByFilters(
  //       currentPage,
  //       searchParams.plainText,
  //       searchParams.status
  //     )
  //     setCustomers(customersData)
  //   } catch (error) {
  //     toast.error('Error getting customers')
  //   }
  // }

  return (
    <>
      <section className='flex items-center justify-end'>
        {/* <button
          className='text-[#386EF6] hover:text-blue-400 p-1 rounded-lg hover:scale-105 transition duration-200 active:text-blue-700'
          onClick={handleRefresh}
        >
          <Icons.RefreshCcw />
        </button> */}
        <SearchBar handleSearchSubmit={handleSearchSubmit} />
      </section>

      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        {showDeleteModal && (
          <ModalDelete
            idSub={selectedSubId}
            handleCloseDeleteModal={handleCloseDeleteModal}
          />
        )}

        {showEditModal && (
          <ModalEdit handleCloseEdit={handleCloseEdit} id={selectedSubId} />
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
                idCustomer={customer?.id}
                idSub={customer?.subscription.id}
                name={customer?.name}
                status={customer?.subscription.status}
                initialDate={customer?.subscription.startDate}
                endDate={customer?.subscription.endDate}
                email={customer?.email}
                emailExpiredSent={customer?.subscription.emailExpiredSent}
                handleOpenDeleteModal={handleOpenDeleteModal}
                handleOpenEditModal={handleOpenEditModal}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* Buttons Pagination */}
      <div className='flex items-end justify-end'>
        <div className='inline-flex mt-2 shadow-md xs:mt-0'>
          <button
            className={`flex items-center justify-center h-8 px-3 text-sm font-medium rounded-s hover:bg-gray-100 ${currentPage === 1 || (customers.length === 0 && currentPage === 1) ? 'bg-gray-300 hover:bg-gray-300 text-gray-400' : 'bg-white'}`}
            disabled={
              currentPage === 1 || (customers.length === 0 && currentPage === 1)
            }
            onClick={handlePrevPage}
          >
            Prev
          </button>
          <button
            className={`flex items-center justify-center h-8 px-3 text-sm font-medium rounded-s hover:bg-gray-100 ${customers.length < 6 ? 'bg-gray-300 hover:bg-gray-300 text-gray-400' : 'bg-white'}`}
            disabled={customers.length < 6}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}
