import React from 'react'

export default function AdvertisementPage() {
  return (
    <section className='w-full h-screen bg-[#EFEFEF]'>
      <h1 className='px-10 pt-4 text-4xl font-thin animate-fade-up'>
        Advertisements
      </h1>
      <section className='px-10 py-6'>
        <form className='flex flex-col gap-4'>
          <div className='relative z-0'>
            <input
              type='text'
              id='floating_name'
              name='name'
              className='block py-2.5 px-2  w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded-lg'
              placeholder=' '
              required
            />
            <label
              htmlFor='floating_name'
              className='absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-[#EFEFEF] ml-2 px-2 rounded-lg peer-focus:px-4'
            >
              To <span className='text-red-700'>*</span>
            </label>
          </div>
          <div className='relative z-0'>
            <input
              type='text'
              id='floating_name'
              name='name'
              className='block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded-lg'
              placeholder=' '
              required
            />
            <label
              htmlFor='floating_name'
              className='absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto bg-[#EFEFEF] ml-2 px-2 rounded-lg peer-focus:px-4'
            >
              Subject <span className='text-red-700'>*</span>
            </label>
          </div>
          <div className='relative z-0'>
            <textarea
              type='text'
              id='floating_name'
              name='name'
              rows='16'
              className='block px-2 py-2.5 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none rounded-lg'
              placeholder=' '
              required
            />
            <label
              htmlFor='floating_name'
              className='absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:px-4 bg-[#EFEFEF] ml-2 px-2 rounded-lg '
            >
              Advertisement <span className='text-red-700'>*</span>
            </label>
          </div>
        </form>
      </section>
    </section>
  )
}
