'use client'
import { Icons } from '@/components/Icons'
import Navlink from '@/components/Navlink'
import { listMenu } from '@/config/topbar'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/store/authStore'
import { Dropdown } from 'flowbite-react'
import { signOut } from 'next-auth/react'
import ModalNewAdmin from '@/components/ModalNewAdmin'

// Set de parameters of the user
export default function Navbar() {
  const { user } = useAuth()
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState(pathname)
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => {
    setShowModal(false)
  }

  const handleOpen = () => {
    setShowModal(true)
  }

  const handleActive = page => {
    setCurrentPage(page)
  }

  return (
    <nav className='flex justify-between items-center h-32 bg-[#386EF6] text-white w-full px-10 border-b-[5px] border-[#0DBCFB]'>
      {showModal && <ModalNewAdmin handleClose={handleClose}></ModalNewAdmin>}

      <section className='flex flex-col justify-between'>
        <div className='flex flex-row items-center justify-start gap-2 mt-6 mb-8'>
          <Icons.UserRound className='w-8 h-8' />
          <div className='flex flex-col justify-center align-middle'>
            <div className='text-[15px] whitespace-nowrap overflow-ellipsis leading-3 font-bold'>
              {user?.name}
            </div>
            <div className='text-[15px] text-gray-300 font-normal'>
              @{user?.username}
            </div>
          </div>
          <Dropdown color='' icon='' className='px-2 rounded-lg '>
            <Dropdown.Item
              onClick={() => {
                handleOpen()
              }}
              className='flex items-center justify-start gap-2'
            >
              <Icons.UserRound />
              Add admin
            </Dropdown.Item>

            <Dropdown.Item
              onClick={() => {
                signOut()
              }}
              className='flex items-center justify-start gap-2'
            >
              <Icons.LogOut />
              Log out
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div className='flex gap-1'>
          {listMenu.map((item, index) => (
            <Navlink
              key={index}
              name={item.name}
              href={item.href}
              currentPage={currentPage}
              handleActive={handleActive}
            />
          ))}
        </div>
      </section>
    </nav>
  )
}
