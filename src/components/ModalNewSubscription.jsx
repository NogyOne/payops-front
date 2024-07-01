import React, { useState } from 'react'
import { Icons } from '@/components/Icons'
import { addCustomer, sendEmail } from '@/services/api'
import { toast } from 'sonner'
import { getFormatDate, validateForm } from '@/lib/utils'
import { useAuth } from '@/store/authStore'

export default function ModalNewSubscription({ handleCloseModal }) {
  const [isVisible, setIsVisible] = useState(true)
  const { user } = useAuth()

  const handleSubmit = async event => {
    event.preventDefault()
    const data = new FormData(event.target)

    const name = data.get('name')
    const email = data.get('email').toLowerCase().trim()
    const fieldArr = [name, email]

    if (validateForm(fieldArr)) {
      const customer = {
        adminUser: user.id,
        name: name,
        email: email,
        monthsPaid: +data.get('monthspaid'),
      }

      addCustomer(customer)
        .then(res => {
          toast.success('Customer added successfully.')
          sendEmail({
            from: user.company,
            to: customer.email,
            subject: 'Payment Confirmation',
            html: '<h3>Payment Confirmation💸</h3><br/> <p><strong>Months Paid: </strong>1</p>',
          })
            .then(res => {
              toast.success('Payment confirmation email sent.')
            })
            .catch(err => {
              toast.error('Error sending email payment confirmation.')
            })
        })
        .catch(err => {
          toast.error('Error adding customer.')
        })
    } else {
      toast.error('Please fill all the fields.')
    }

    setIsVisible(false)
    setTimeout(() => {
      handleCloseModal()
    }, 200)
  }

  const handleClose = event => {
    event.preventDefault()
    setIsVisible(false)
    setTimeout(() => {
      handleCloseModal()
    }, 200)
  }

  return (
    <div
      tabIndex='-1'
      aria-hidden='true'
      className={`overflow-y-auto overflow-x-hidden fixed flex items-center justify-center top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm animate-jump ${isVisible ? 'animate-jump' : 'animate-jump-out'}`}
    >
      <div className='relative w-full max-w-md max-h-full p-4'>
        <div className='relative pb-4 bg-white rounded-lg shadow'>
          <div className='flex items-center justify-between p-5 border-b rounded-t '>
            <div>
              <h3 className='text-xl font-semibold text-gray-900 '>
                New Subscription
              </h3>
              <p className='font-light text-md'>
                Current Date: {getFormatDate(new Date())}
              </p>
            </div>
            <button
              type='button'
              className='end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
              onClick={handleClose}
            >
              <Icons.X />
              <span className='sr-only'>Close modal</span>
            </button>
          </div>

          <div className='px-10 py-5'>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div className='relative z-0'>
                <input
                  type='text'
                  id='floating_name'
                  name='name'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='floating_name'
                  className='absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
                >
                  NAME <span className='text-red-700'>*</span>
                </label>
              </div>

              <div className='relative z-0'>
                <input
                  type='email'
                  id='floating_email'
                  name='email'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='floating_email'
                  className='absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
                >
                  E-MAIL <span className='text-red-700'>*</span>
                </label>
              </div>

              <div className='relative z-0'>
                <input
                  type='number'
                  id='floating_months'
                  name='monthspaid'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  min={1}
                />
                <label
                  htmlFor='floating_months'
                  className='absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
                >
                  MONTHS TO PAY
                </label>
                <p className='mt-1 text-sm text-gray-400'>
                  Note: The value of Months is 1 by default
                </p>
              </div>

              <button
                type='submit'
                className='w-full text-white bg-[#386EF6] hover:bg-[#3363dd] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
              >
                Add new client
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
