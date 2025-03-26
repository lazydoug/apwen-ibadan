import { SpeedInsights } from '@vercel/speed-insights/next'

import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

import NavBar from '@/components/common/NavBar'
import Footer from '@/components/Footer'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'APWEN Ibadan',
  description:
    'The Official website of the Association Of Professional Women Engineers of Nigeria (APWEN) Ibadan branch',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${plusJakartaSans.className} bg-purple-98 min-w-80`}>
        <header>
          <NavBar />
        </header>
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
