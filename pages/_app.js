import Head from 'next/head'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Toaster from '../components/Toaster'
import ToasterEarly from '../components/ToasterEarly'

import 'tailwindcss/tailwind.css'

const navigationItems = [
    { name: 'About', href: '/about' },
]

const loginLink = 'https://circle.so'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      
      {  <Toaster /> }
      <Navigation items={navigationItems} loginLink={loginLink} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
