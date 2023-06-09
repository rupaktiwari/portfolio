import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/components/navbar'
const inter = Inter({ subsets: ['latin'] })
import Main from '@/components/main'
import About from '@/components/about'

export default function Home() {
  return (
    <>
      <Head>
        <title>Wanderer | Rupak</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="widqth=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main/>
      <About/>
    </>
  )
}
