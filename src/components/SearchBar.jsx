import React, { useState } from 'react'
import { Icons } from '@/components/Icons'
import { Dropdown } from 'flowbite-react'

export default function SearchBar({handleSearchSubmit}) {

    const [selectedStatus, setSelectedStatus] = useState('All')

    const handleSubmit = event => {
        event.preventDefault()
        const data = new FormData(event.target)
        let plainText = ' '
        if(data.get('inputText') != ''){
            plainText = data.get('inputText')
        }
        
        handleSearchSubmit(selectedStatus, plainText)
    }

    const handleStatus = statusFromDrop => {
        setSelectedStatus(statusFromDrop)
    }

  return (
    <form className='w-2/5 mb-2 ml-auto' onSubmit={handleSubmit}>
      <div className='flex items-center justify-center'>

        <div className='rounded-l-lg bg-[#386EF6] text-white h-full px-4 z-40 hover:bg-blue-800'>
          <Dropdown label={selectedStatus} color='' icon='' className='px-2 rounded-lg'>
            <Dropdown.Item onClick={() => {handleStatus('All')}}>👥 All</Dropdown.Item>
            <Dropdown.Item onClick={() => {handleStatus('Current')}}>✅ Current</Dropdown.Item>
            <Dropdown.Item onClick={() => {handleStatus('Expired')}}>❌ Expired</Dropdown.Item>
          </Dropdown>
        </div>

        <div className='relative w-full'>
          <input
            type='text'
            name='inputText'
            className='block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-0 focus:border-none'
            placeholder='Search customers & Status...'
          />
          <button
            type='submit'
            className='absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#386EF6] rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
          >
            <Icons.Search className='w-5 h-5' />
            <span className='sr-only'>Search</span>
          </button>
        </div>
      </div>
    </form>
  )
}
