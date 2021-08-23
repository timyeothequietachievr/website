import Head from 'next/head'

import Shell from '../components/Shell'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import 'tailwindcss/tailwind.css'

const navigationItems = [
  { name: 'Pricing', href: '#' },
  { name: 'About', href: '#' },
  { name: 'FAQ', href: '#' },
  { name: 'Contact', href: '#' }
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
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      
      <Navigation items={navigationItems} loginLink={loginLink} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
