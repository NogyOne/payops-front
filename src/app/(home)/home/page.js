import Navbar from '@/components/Navbar'
import { Fragment } from 'react'

export default function Home() {
  return (
    <section className='w-full overflow-hidden'>
      <main>
        <div className='w-full gap-4 px-10 py-4'>
          <h1 className='text-4xl font-thin'>Home</h1>
          {/* <hr className='border-gray-300 ' /> */}
        </div>
        <section>
          <div className='flex justify-center mx-auto'>
            <img
              className='w-40 mt-8 animate-spin-slow'
              src='/BlueSpiralV2.png'
              alt='spiral-logo'
            />
          </div>
          <article className='grid items-center justify-center grid-cols-3 mt-24'>
            <div className='flex flex-col items-center text-2xl'>
              <p className='font-thin'>Total of Subscribers</p>
              <p className='font-bold text-[#386EF6]'>1000</p>
            </div>

            <div className='flex flex-col items-center text-2xl'>
              <p className='font-thin'>Current</p>
              <p className='font-bold text-[#3DC07A]'>900</p>
            </div>

            <div className='flex flex-col items-center text-2xl'>
              <p className='font-thin'>Expired</p>
              <p className='font-bold text-[#F12222]'>100</p>
            </div>
          </article>
        </section>
      </main>
    </section>
  )
}
// Need to put a global tag to put into all tags for the same padding
// See the posibility to use React Fragment instead main
