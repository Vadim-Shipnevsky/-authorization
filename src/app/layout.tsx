import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="samplebot" data-size="large" data-auth-url="https://authorization-five.vercel.app/" data-request-access="write"></script>
      <body className={inter.className}>
        {children}</body>
    </html>
  )
}
