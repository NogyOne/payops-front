import React, { useState } from 'react'
import { Icons } from '@/components/Icons'
import { deleteSubscription } from '@/services/api'
import { toast } from 'sonner'

export default function ModalDelete({ handleCloseDeleteModal, idSub }) {
  const [isVisible, setIsVisible] = useState(true)

  const handleSubmit = async event => {
    event.preventDefault()
    //const data = new FormData(event.target)

    deleteSubscription(idSub)
      .then(res => {
        toast.success('Customer deleted successfully')
      })
      .catch(err => {
        toast.error('Error deleting customer')
      })

    setIsVisible(false)
    setTimeout(() => {
      handleCloseDeleteModal()
    }, 200)
  }

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      handleCloseDeleteModal()
    }, 200)
  }

  return (
    <div
      tabIndex='-1'
      aria-hidden='true'
      className={`overflow-y-auto overflow-x-hidden fixed flex items-center justify-center top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm ${isVisible ? 'animate-jump' : 'animate-jump-out'}`}
    >
      <div className='relative w-full max-w-md max-h-full p-4'>
        <div className='relative bg-white rounded-lg shadow'>
          <button
            type='button'
            className='absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center '
            onClick={handleClose}
          >
            <Icons.X />
            <span className='sr-only'>Close modal</span>
          </button>
          <div className='p-4 text-center md:p-5'>
            <svg
              className='w-12 h-12 mx-auto mb-4 text-red-500 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>
            <h3 className='mb-6 text-lg font-normal text-gray-500 '>
              Are you sure you want to cancel this subscription?
            </h3>

            <form onSubmit={handleSubmit}>
              <div className='mb-6'>
                <label
                  htmlFor='message'
                  className='flex mb-2 ml-2 text-sm font-medium text-gray-600'
                >
                  Reasons about cancellation (Optional)
                </label>
                <textarea
                  id='message'
                  name='reasons'
                  rows='6'
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-700 focus:border-red-700 ring-gray-500 resize-none'
                  placeholder='
                  Your subscription was canceled for...'
                ></textarea>
                <p className='mt-1 ml-2 text-sm text-left text-gray-400'>
                  Note: The message is{' '}
                  <q>Subscription canceled due to expired</q> by default
                </p>
              </div>
              <button
                type='submit'
                className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center'
              >
                Yes, I´m sure
              </button>
              <button
                type='button'
                className='py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100'
                onClick={handleClose}
              >
                No, cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
