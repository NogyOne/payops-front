'use client'
import LoginPage from '@/components/pages/LoginPage'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/home')
    }
  }, [status])

  return <LoginPage />
}
