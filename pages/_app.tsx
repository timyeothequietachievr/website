import { useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'

import { siteMetaData, navigationItems } from '../config/core'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Toaster from '../components/Toaster'

import * as gtag from '../lib/gtag'
import type { EventData } from '../lib/gtag'

import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }

    const trackGaEvents = (e) => {
      // Walk up from the click target to find the nearest element
      // that has all three data-event-* attributes. This makes the
      // listener work on CTAs with nested children (icon + text).
      const target = e.target instanceof Element
        ? e.target.closest('[data-event-category][data-event-action][data-event-label]') as HTMLElement | null
        : null;

      if (target) {
        let eventData: EventData = {
          action: target.dataset.eventAction,
          category: target.dataset.eventCategory,
          label: target.dataset.eventLabel,
        };

        if (target.dataset.eventValue) {
          eventData.value = target.dataset.eventValue;
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
        <title>{siteMetaData.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={siteMetaData.description} />
        <meta property="og:site_name" content={siteMetaData.title} />
        <meta property="og:description" content={siteMetaData.description} />
        <meta property="og:title" content={siteMetaData.title} />
        <meta property="og:image" content={siteMetaData.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={siteMetaData.title} />
        <meta name="twitter:description" content={siteMetaData.description} />
        <meta name="twitter:image" content={siteMetaData.image} />
      </Head>
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

      <Toaster />
      <Navigation items={navigationItems} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
