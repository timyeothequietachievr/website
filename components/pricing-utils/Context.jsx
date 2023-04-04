import { createContext, useContext, useEffect, useReducer } from 'react'

import { courseTiers } from './course-tiers';
import { giftTiers } from './gift-tiers';

const initialState = {
  currency: 'aud',
  subscriptionPeriod: 'yearly',
  unit: 'yr',
  price: 199,
  courseTiers,
  giftTiers,
}

const PricingContext = createContext()

function pricingReducer(state, action) {
  switch (action.type) {
    case 'changeCurrency': {
      return { ...state, currency: action.currency }
    }
    case 'changeSubscriptionPeriod': {
      return { ...state, subscriptionPeriod: action.subscriptionPeriod }
    }
    case 'changePrice': {
      return { ...state, price: action.price }
    }
    case 'changeSaving': {
      return { ...state, saving: action.saving }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export function PricingContextProvider({ children }) {
  const [state, dispatch] = useReducer(pricingReducer, initialState)
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch }

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

export function usePaymentOptions({ kind } = {}) {
  const context = useContext(PricingContext)

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }

  const { currency, subscriptionPeriod, courseTiers, giftTiers } = context.state

  let selectedTiers;
  
  switch (kind) {
    case 'gift':
      selectedTiers = giftTiers;
      break;

    case 'course':
    default:
      selectedTiers = courseTiers;
      break;
  }

  const { stripeLink, stripeLinkPaymentPlanMonthly, price, currencyName, periodName, saving } =
    kind === 'gift'
      ? selectedTiers[0].variants[currency]
      : selectedTiers[0].variants[currency][subscriptionPeriod]

  useEffect(() => {
    const lowestPriceAvailable = selectedTiers[0].variants[currency].yearly.price

    context.dispatch({ type: 'changePrice', price: lowestPriceAvailable })
  }, [currency])

  useEffect(() => {
    if (subscriptionPeriod === 'monthly') {
      context.dispatch({ type: 'changeSaving', saving: null })
      return
    }

    context.dispatch({
      type: 'changeSaving',
      saving
    })
  }, [currency, subscriptionPeriod])

  return {
    onCurrencyChanged: (currency) =>
      context.dispatch({ type: 'changeCurrency', currency }),
    onSubscriptionPeriodChanged: (subscriptionPeriod) =>
      context.dispatch({
        type: 'changeSubscriptionPeriod',
        subscriptionPeriod
      }),
    stripeLink,
    stripeLinkPaymentPlanMonthly,
    price,
    currencyName,
    periodName,
    selectedTiers,
    saving,
    subscriptionPeriod,
    getTierAt(idx) {
      return selectedTiers[idx]
    },
    getTierVariantAt(idx) {
      return selectedTiers[idx].variants[currency]
    }
  }
}
/*
'Full access 30+ videos on demand (more added over time)',
        'Weekly office hours',
        'Monthly guest speakers',
      '24/7 online community of introverts'
      */