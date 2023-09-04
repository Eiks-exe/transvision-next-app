import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AppNavbar from './components/AppNavbar/AppNavbar'
import AppLayout from './components/AppLayout/AppLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Transvision',
  description: '....',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLayout>
          {children}
        </AppLayout>
        </body>
    </html>
  )
}
