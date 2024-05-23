import { Inter } from 'next/font/google'
import '../../src/styles/globals.css'
import Toaster from '@/components/Toaster'
import TitleBar from '@/components/TitleBar'
import Session from '@/components/Session'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PayOps',
  description: 'Developed by Germán G.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='overflow-y-hidden'>
      <body className={inter.className}>
        <TitleBar />
        <Session>{children}</Session>
        <Toaster />
      </body>
    </html>
  )
}
