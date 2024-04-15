'use client'
import React, { useState, useEffect } from 'react'
import { getSubscriptions } from '@/services/api'

export default function HomePage() {
  const [subscriptions, setSubscriptions] = useState([])
  const [currentSubs, setCurrentSubs] = useState(0)
  const [expiredSubs, setExpiredSubs] = useState(0)

  useEffect(() => {
    fetchData()
  },)

  const fetchData = async () => {
    try {
      const subscriptionsData = await getSubscriptions()
      setSubscriptions(subscriptionsData)
      updateDataValues(subscriptionsData)
    } catch (error) {
      console.log(error)
    }      
  }

  const updateDataValues = (subscriptionsData) => {
    let currentCount = 0
    let expiredCount = 0

    subscriptionsData.forEach((subscription) => {
      if (subscription.status === 'CURRENT')
        currentCount++
      else
        expiredCount++
    })

    setCurrentSubs(currentCount)
    setExpiredSubs(expiredCount)
  }

  return (
    <section className='w-full overflow-hidden'>
      <h1 className='px-10 py-4 text-4xl font-thin animate-fade-up'>Home</h1>
      <section>
        <div className='flex justify-center mx-auto animate-jump'>
          <img
            className='w-40 mt-8 animate-spin-slow'
            src='/BlueSpiralV2.png'
            alt='spiral-logo'
          />
        </div>
        <article className='grid items-center justify-center grid-cols-3 mt-24 animate-fade-down'>
          <div className='flex flex-col items-center text-2xl'>
            <p className='font-thin'>Total of Subscribers</p>
            <p className='font-bold text-[#386EF6]'>{subscriptions?.length}</p>
          </div>

          <div className='flex flex-col items-center text-2xl'>
            <p className='font-thin'>Current</p>
            <p className='font-bold text-[#3DC07A]'>{currentSubs}</p>
          </div>

          <div className='flex flex-col items-center text-2xl'>
            <p className='font-thin'>Expired</p>
            <p className='font-bold text-[#F12222]'>{expiredSubs}</p>
          </div>
        </article>
      </section>
    </section>
  )
}
// Need to put a global tag to put into all tags for the same padding
// See the posibility to use React Fragment instead main
