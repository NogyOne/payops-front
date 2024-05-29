'use client'
import LoginPage from '@/components/pages/LoginPage'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/store/authStore'

export default function Login() {
  const { setUser, clearUser } = useAuth()
  const { data, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      setUser(data.user.user)
      router.push('/home')
    }
  }, [status])

  return <LoginPage />
}
