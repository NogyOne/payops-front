'use client'
import { SessionProvider } from 'next-auth/react'

const SessionProviderLayout = ({ children }) => {
  return <SessionProvider basePath='/api/auth'>{children}</SessionProvider>
}

export default SessionProviderLayout
