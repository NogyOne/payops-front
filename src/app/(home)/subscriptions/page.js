'use client'
import React, { useState } from 'react'
import SubsTable from '@/components/SubsTable'
import ModalNewSubscription from '@/components/ModalNewSubscription'
import { Icons } from '@/components/Icons'

export default function Subscriptions() {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <section className='bg-[#EFEFEF] w-full overflow-hidden'>
      <button
        type='button'
        className='absolute flex justify-center items-center bg-[#43DE8B] rounded-full w-14 h-14 right-10 top-24 hover:bg-[#3bc47b] text-white'
        onClick={handleOpenModal}
      >
        <Icons.Plus className='w-10 h-10' />
      </button>

      {showModal && <ModalNewSubscription handleCloseModal={() => setShowModal(false)}/>}
      <h1 className='px-10 py-4 text-4xl font-thin'>Subscriptions</h1>
      <article className='px-10 py-6'>
        <SubsTable />
      </article>
    </section>
  )
}
