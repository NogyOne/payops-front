'use client'
import React, { useState } from 'react'
import SubsTable from '@/components/SubsTable'
import ModalNewSubscription from '@/components/ModalNewSubscription'
import { Icons } from '@/components/Icons'

export default function SubscriptionsPage() {
  const [showModal, setShowModal] = useState(false)
  const [showImage, setShowImage] = useState(false)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <section className='bg-[#EFEFEF] w-full h-screen'>
      <button
        type='button'
        className='absolute flex justify-center items-center bg-[#43DE8B] rounded-full w-14 h-14 right-10 top-36 hover:bg-[#3bc47b] text-white animate-jump z-50'
        onClick={handleOpenModal}
      >
        <Icons.Plus className='w-10 h-10' />
      </button>
      {showModal && (
        <ModalNewSubscription handleCloseModal={handleCloseModal} />
      )}
      <h1 className='px-10 pt-4 text-4xl font-thin animate-fade-up'>
        Subscriptions
      </h1>
      <article className='px-10 py-6'>
        <SubsTable setShowImage={setShowImage} />
        {showImage && (
          <div className='animate-fade-down'>
            <img
              src='/norow-animate.svg'
              alt='bro-animate'
              className='w-[350px] mx-auto'
            />
            <p className='mx-auto text-xl font-bold text-center text-gray-400'>
              There are no records.
            </p>
          </div>
        )}
      </article>
    </section>
  )
}
