import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Echorbe AI Technology Holdings',
  description: 'A Global AI Tech Holding Company Born in Korea. The Korean Model of Alphabet.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <Script src="https://ghostlink-dev.vercel.app/api/bridge/76d49279-02ef-4f08-867b-637c54d67195.js" />
      </body>
    </html>
  )
}
