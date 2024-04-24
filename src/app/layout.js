import { Inter } from 'next/font/google'
import '../../src/styles/globals.css'
import Toaster from '@/components/Toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PayOps',
  description: 'Developed by Germán G.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}
      <Toaster />
      </body>      
    </html>
  )
}
