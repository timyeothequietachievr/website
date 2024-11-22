import { createContext, useContext, useEffect, useReducer } from 'react'
import localforage from 'localforage'

import { listingMetaData } from '../../config/core'

import coachingOffers from '../../lib/offers/coaching'
import { listingOffersFromCoachingOffers } from '../../lib/listing/coaching'

import courseOffers from '../../lib/offers/courses'
import { listingOffersFromCourseOffers } from '../../lib/listing/courses'

import bookdigitalOffers from '../../lib/offers/booksdigital'
import { listingOffersFromBookDigitalOffers } from '../../lib/listing/booksdigital'

import bookphysicalOffers from '../../lib/offers/booksphysical'
import { listingOffersFromBookPhysicalOffers } from '../../lib/listing/booksphysical'

import Habits30days30Offers from '../../lib/offers/habits30days30'
import { listingOffersFromHabits30days30Offers } from '../../lib/listing/habits30days30'

localforage.config({
  name: 'thequietachivr',
  description: 'User settings for thequietachivr.com'
})

const PricingContext = createContext(null)

function pricingReducer(state, action) {
  switch (action.type) {
    case 'changeCurrency': {
      return { ...state, currency: action.currency }
    }
    case 'changeFrequency': {
      return { ...state, frequency: action.frequency }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export function PricingContextProvider({ children }) {
  const [state, dispatch] = useReducer(pricingReducer, { ...listingMetaData })
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch }

  useEffect(() => {
    localforage.getItem('frequency').then((frequency) => {
      if (frequency) {
        dispatch({ type: 'changeFrequency', frequency })
      }
    })

    localforage.getItem('currency').then((currency) => {
      if (currency) {
        dispatch({ type: 'changeCurrency', currency })
      }
    })
  }, [])

  useEffect(() => {
    localforage.setItem('frequency', state.frequency)
  }, [state.frequency])

  useEffect(() => {
    localforage.setItem('currency', state.currency)
  }, [state.currency])

  return (
    <PricingContext.Provider value={value}>{children}</PricingContext.Provider>
  )
}

export function PricingContextConsumer({ children }) {
  return (
    <PricingContext.Consumer>
      {(context) => {
        if (context === undefined) {
          throw new Error(
            'PricingContextConsumer must be used within a PricingContextProvider'
          )
        }
        return children(context)
      }}
    </PricingContext.Consumer>
  )
}

export type OfferKind = 'course' | 'coaching' | 'one-each' | 'all' | 'bookdigital' | 'bookphysical'

interface UsePaymentOptionsProps {
  kind: OfferKind
}

export function usePaymentOptions({ kind }: UsePaymentOptionsProps) {
  const context = useContext(PricingContext)

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }

  const { currency, frequency, userLocale } = context.state

  let offers = {
    get course() {
      return listingOffersFromCourseOffers(courseOffers, currency, userLocale)
    },

    get bookdigital() {
      return listingOffersFromBookDigitalOffers(bookdigitalOffers, currency, userLocale)
    },

    get bookphysical() {
      return listingOffersFromBookPhysicalOffers(bookphysicalOffers, currency, userLocale)
    },

    get coaching() {
      return listingOffersFromCoachingOffers(
        coachingOffers,
        currency,
        frequency,
        userLocale
      )
    },

    fetchByKind(kind: OfferKind) {
      switch (kind) {
        case 'coaching':
          return offers.coaching

        case 'course':
          return offers.course

        case 'bookdigital':
          return offers.bookdigital

          case 'bookphysical':
            return offers.bookphysical

        case 'one-each':
          return [offers.coaching[0], offers.course[0]]

        case 'all':
        default:
          return [...offers.coaching, ...offers.course, ...offers.bookdigital, , ...offers.bookphysical]
      }
    }
  }

  return {
    onCurrencyChanged: (currency: Currency) =>
      context.dispatch({ type: 'changeCurrency', currency }),
    onFrequencyChanged: (frequency: Frequency) =>
      context.dispatch({
        type: 'changeFrequency',
        frequency
      }),
    offers: offers.fetchByKind(kind),
    frequency,
    currency,
    userLocale
  }
}
/*
'Full access 30+ videos on demand (more added over time)',
        'Weekly office hours',
        'Monthly guest speakers',
      '24/7 online community of introverts'
      */
