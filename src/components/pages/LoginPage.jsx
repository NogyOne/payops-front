'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { toast } from 'sonner'

export default function LoginPage() {
  const { register, handleSubmit } = useForm()
  const router = useRouter()

  const onSubmit = handleSubmit(async data => {
    const res = await signIn('credentials', {
      username: data.username,
      password: data.password,
      redirect: false,
    })

    if (res.error) {
      toast.error(res.error)
    } else {
      router.push('/home')
      toast.success('Logged Succesfully.')
      router.refresh()
    }
  })

  return (
    <main className='flex flex-col items-center  px-24 bg-[#EFEFEF] h-full w-full overflow-hidden min-h-screen'>
      <section className='mb-20 select-none mt-36'>
        <h1 className='text-5xl font-bold text-gray-700'>
          Pay
          <span className='relative inline-block align-middle'>
            <img
              className='inline-block w-12 h-12 mb-4 ml-1 animate-spin-slow'
              src='/BlueSpiralV2.png'
              alt='spiral-logo'
            />
          </span>
          ps
        </h1>
      </section>

      <form
        onSubmit={onSubmit}
        className='flex flex-col items-center gap-8 w-72'
        method='POST'
      >
        <div className='relative z-0'>
          <input
            className='block py-2.5 px-0 w-72 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0BBEF9] peer'
            type='text'
            id='floating_username'
            {...register('username', {
              required: {
                value: true,
                message: 'Username is required.',
              },
            })}
            placeholder=' '
            name='username'
          />
          <label
            htmlFor='floating_username'
            className='absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
          >
            USERNAME
          </label>
        </div>

        <div className='relative z-0 mb-8'>
          <input
            className='block py-2.5 px-0 w-72 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0BBEF9] peer'
            type='password'
            id='floating_pass'
            {...register('password', {
              required: {
                value: true,
                message: 'Password is required.',
              },
            })}
            placeholder=' '
            name='password'
          />
          <label
            htmlFor='floating_pass'
            className='absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
          >
            PASSWORD
          </label>
        </div>

        <button
          type='submit'
          className='bg-[#386EF6]  text-white rounded-md w-full py-1 px-2'
        >
          Log in
        </button>
      </form>
    </main>
  )
}
