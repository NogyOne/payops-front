'use client'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()

  return (
    <main className='flex flex-col items-center min-h-screen h-screen px-24 py-16 bg-[#EFEFEF] h-full w-full overflow-hidden'>
      <section className='mb-20'>
        <img
          className='w-48 animate-spin-slow'
          src='/BlueSpiralV2.png'
          alt='spiral-logo'
        />
      </section>

      <form
        onSubmit={() => router.push('/home')}
        className='flex flex-col items-center gap-8 w-72'
      >
        <div>
          <input
            className='w-72 p-2 bg-transparent border-b-4 border-[#0BBEF9]'
            type='text'
            placeholder='Username'
            name='username'
          />
        </div>
        <div className='mb-8'>
          <input
            className='w-72 p-2 bg-transparent border-b-4 border-[#0BBEF9]'
            type='password'
            placeholder='Password'
            name='password'
          />
        </div>
        <button
          type='submit'
          className='bg-[#1D9BF0] text-white rounded-md w-full py-1 px-2'
        >
          Log in
        </button>
      </form>
    </main>
  )
}
