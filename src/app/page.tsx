'use client'
import Link from 'next/link'
import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { SessionProvider } from "next-auth/react";
import Auth from './Auth';

export default function Home( {params: { session, ...params}} : any ) {
  return (
    <SessionProvider session={session}>
      <main >
        <Auth />
      </main>
    </SessionProvider>
  )
}
