import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import CrispProvider from '@/components/crisp-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SparkX AI',
  description: 'An advanced AI used to generate images, videos, music, code and ask any question. Powered by OpenAI. Developed by Tech-Tez (Tejas Patel)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          {children}
          {/* <Footer /> */}
        </body>
      </html>
    </ClerkProvider>
  )
}
