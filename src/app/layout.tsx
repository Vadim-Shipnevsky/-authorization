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
  function onTelegramAuth(user : any) {
    alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
  }
  return (
    <html lang="en" >
     <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="authorizationMy" data-size="large" data-auth-url="https://authorization-five.vercel.app/" data-request-access="write"></script>
      <body className={inter.className}>
        {children}</body>
    </html>
  )
}
