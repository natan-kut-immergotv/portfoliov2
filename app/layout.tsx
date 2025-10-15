import { ReactNode } from 'react'
import type { Metadata } from 'next'
import '../styles/globals.css'
import ClientLayout from './client-layout'

export const metadata: Metadata = {
  title: 'Natan Kutnowski | Frontend Developer',
  description:
    'Frontend Developer specialized in React, Next.js and TypeScript',
  icons: {
    icon: '/favicon.ico',
  },
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
