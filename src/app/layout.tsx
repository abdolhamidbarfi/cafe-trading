import type { Metadata } from 'next'
import { Vazirmatn  , Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets : ['latin']
})

const vazirmatn = Vazirmatn( {
    subsets : ['latin'],
    variable : "--font-vazirmatn",
    display: "swap"
})

export const metadata: Metadata = {
  title: 'Cafe Trading',
  description: 'Trading and Investment Training Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir='rtl'>
      <body className={vazirmatn.className}>{children}</body>
    </html>
  )
}
