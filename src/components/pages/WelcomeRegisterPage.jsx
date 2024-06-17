'use client'
import React from 'react'
import { toast } from 'sonner'
import { validateForm } from '@/lib/utils'
import { addAdmin } from '@/services/api'
import { useRouter } from 'next/navigation'

export default function WelcomeRegisterPage() {
  const router = useRouter()

  const handleSubmit = async event => {
    event.preventDefault()
    const data = new FormData(event.target)

    const name = data.get('name')
    const username = data.get('username')
    const email = data.get('email')
    const password = data.get('password')
    const confirmPass = data.get('confirmPass')
    const company = data.get('company')
    const fieldArr = [name, username, email, password, confirmPass, company]

    if (validateForm(fieldArr)) {
      const newAdmin = {
        name,
        username,
        email,
        password,
        company,
      }

      addAdmin(newAdmin)
        .then(res => {
          toast.success('Administrator added succesfully.')
          router.push('/login')
        })
        .catch(err => {
          toast.error('Error adding administrator.')
        })
    } else {
      toast.error('Please fill all the fields')
    }
  }

  return (
    <main className=' bg-[#EFEFEF] h-full w-full overflow-hidden min-h-screen py-16 px-40 select-none'>
      <div className='flex items-center justify-center align-middle '>
        <h1 className='text-5xl font-bold text-gray-700'>
          Welcome to{' '}
          <span className='text-5xl font-bold text-gray-700'>
            Pay
            <span className='relative inline-block align-middle'>
              <img
                className='inline-block w-12 h-12 mb-4 ml-1 animate-spin-slow'
                src='/BlueSpiralV2.png'
                alt='spiral-logo'
              />
            </span>
            ps
          </span>
        </h1>
      </div>
      <section className='flex items-center justify-center gap-20 mt-8'>
        <div className='w-2/4 px-10 py-5'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div className='relative z-0'>
              <input
                type='text'
                id='floating_company'
                name='company'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='floating_company'
                className='absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
              >
                COMPANY NAME <span className='text-red-700'>*</span>
              </label>
            </div>
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
                type='text'
                id='floating_username'
                name='username'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='floating_name'
                className='absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
              >
                USERNAME <span className='text-red-700'>*</span>
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
                type='password'
                id='floating_password'
                name='password'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                minLength={8}
                required
              />
              <label
                htmlFor='floating_password'
                className='absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
              >
                PASSWORD <span className='text-red-700'>*</span>
              </label>
            </div>

            <div className='relative z-0'>
              <input
                type='password'
                id='floating_confpassword'
                name='confirmPass'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                minLength={8}
                required
              />
              <label
                htmlFor='floating_password'
                className='absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
              >
                CONFIRM PASSWORD <span className='text-red-700'>*</span>
              </label>
            </div>

            <button
              type='submit'
              className='w-full text-white bg-[#386EF6] hover:bg-[#3363dd] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
            >
              Register
            </button>
          </form>
        </div>
        <div>
          <img
            src='/register-animate.svg'
            alt='bro-animate'
            className='w-[500px] ml-auto'
          />
        </div>
      </section>
      {/* <a href='https://storyset.com/online'>Online illustrations by Storyset</a> */}
    </main>
  )
}
