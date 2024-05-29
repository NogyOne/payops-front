'use client'
import Navbar from '@/components/Navbar'
import { useAuth } from '@/store/authStore'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function Layout({ children }) {
  const { setUser, clearUser } = useAuth()
  const { data, status } = useSession()

  useEffect(() => {
    if (status === 'authenticated') {
      setUser(data.user.user)
    }
  }, [status])

  return (
    <div className='h-screen bg-[#EFEFEF] overflow-hidden'>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  )
}
