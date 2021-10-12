import { createContext } from 'react'

let value = {
  price: null,
  unit: null,
  currency: 'AUD'
}

export const PricingContext = createContext({
  value,
  setPricing({ price, unit, currency }) {
    value = { price, unit, currency };
  },
})
