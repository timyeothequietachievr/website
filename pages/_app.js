import { useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'

import * as gtag from '../lib/gtag'

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
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }

    const trackGaEvents = (e) => {
      if (e.target.matches('[data-event-category][data-event-action][data-event-label]')) {
        let eventData = {
          action: e.target.dataset.eventAction,
          category: e.target.dataset.eventCategory,
          label: e.target.dataset.eventLabel,
        };

        if (e.target.dataset.eventValue) {
          eventData.value = e.target.dataset.eventValue;
        }

        gtag.event(eventData)
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    document.addEventListener('click', trackGaEvents);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      document.removeEventListener('click', trackGaEvents);
    };
  }, [router.events]);

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

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      
      {  <Toaster /> }
      <Navigation items={navigationItems} loginLink={loginLink} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
