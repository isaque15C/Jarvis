import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'J.A.R.V.I.S. AI',
  description: 'Just A Rather Very Intelligent System - Intelligent Assistant',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
