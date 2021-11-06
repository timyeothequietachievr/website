import { createContext, useContext, useEffect, useReducer } from 'react'

const initialState = {
  currency: 'aud',
  subscriptionPeriod: 'monthly',
  unit: 'mo',
  price: 19.99,
  tiers: [
    {
      title: 'billed: ',
      features: [
        'Full access 60+ videos on demand (more added over time)',
        'Weekly office hours',
        'Monthly guest speakers',
        '24/7 online community of introverts'
      ],
      cta: 'Buy Now',
      mostPopular: true,
      variants: {
        aud: {
          monthly: {
            stripeLink: 'https://stripe.com/aud/monthly',
            price: 19.99,
            currencyName: 'AUD',
            periodName: 'mo',
            totalPerYear: 239.88
          },
          quarterly: {
            stripeLink: 'https://stripe.com/aud/quarterly',
            price: 17.99,
            currencyName: 'AUD',
            periodName: 'mo',
            totalPerYear: 215.96,
            saving: {
              absolute: 24,
              relative: '10%'
            }
          },
          yearly: {
            stripeLink: 'https://stripe.com/aud/yearly',
            price: 15.99,
            currencyName: 'AUD',
            periodName: 'mo',
            totalPerYear: 189.99,
            saving: {
              absolute: '50',
              relative: '20%'
            }
          }
          /* groupcourse1: {
            stripeLink: 'https://stripe.com/aud/groupcourse1',
            price: 695,
            currencyName: 'AUD',
            periodName: 'course',
          } */
        },
        usd: {
          monthly: {
            stripeLink: 'https://stripe.com/usd/monthly',
            price: 14.99,
            currencyName: 'USD',
            periodName: 'mo',
            totalPerYear: 179.88,
          },
          quarterly: {
            stripeLink: 'https://stripe.com/aud/quarterly',
            price: 13.33,
            currencyName: 'USD',
            periodName: 'mo',
            totalPerYear: 161.88,
            saving: {
              absolute: 20,
              relative: '10%'
            }
          },
          yearly: {
            stripeLink: 'https://stripe.com/usd/yearly',
            price: 11.99,
            currencyName: 'USD',
            periodName: 'mo',
            totalPerYear: 143.88,
            saving: {
              absolute: 40,
              relative: '20%'
            }
          }
        },
        cad: {
          monthly: {
            stripeLink: 'https://stripe.com/cad/monthly',
            price: 18.99,
            currencyName: 'CAD',
            periodName: 'mo',
            totalPerYear: 227.88
          },
          quarterly: {
            stripeLink: 'https://stripe.com/cad/quarterly',
            price: 16.99,
            currencyName: 'CAD',
            periodName: 'mo',
            totalPerYear: 203.88,
            saving: {
              absolute: 28,
              relative: '10%'
            }
          },
          yearly: {
            stripeLink: 'https://stripe.com/cad/yearly',
            price: 14.99,
            currencyName: 'CAD',
            periodName: 'mo',
            totalPerYear: 179.88,
            saving: {
              absolute: 40,
              relative: '20%'
            }
          }
        },
        gbp: {
          monthly: {
            stripeLink: 'https://stripe.com/gbp/monthly',
            price: 9.99,
            currencyName: 'GBP',
            periodName: 'mo',
            totalPerYear: 119.88,
          },
          quarterly: {
            stripeLink: 'https://stripe.com/gbp/quarterly',
            price: 8.99,
            currencyName: 'GBP',
            periodName: 'mo',
            totalPerYear: 107.88,
            saving: {
              absolute: 12,
              relative: '10%'
            }
          },
          yearly: {
            stripeLink: 'https://stripe.com/gbp/yearly',
            price: 7.99,
            currencyName: 'GBP',
            periodName: 'mo',
            totalPerYear: 95.99,
            saving: {
              absolute: 24,
              relative: '20%'
            }
          }
        },
        eur: {
          monthly: {
            stripeLink: 'https://stripe.com/eur/monthly',
            price: 12.99,
            currencyName: 'EUR',
            periodName: 'mo',
            totalPerYear: 155.88,
          },
          quarterly: {
            stripeLink: 'https://stripe.com/eur/quarterly',
            price: 11.99,
            currencyName: 'EUR',
            periodName: 'mo',
            totalPerYear: 143.88,
            saving: {
              absolute: 16,
              relative: '10%'
            }
          },
          yearly: {
            stripeLink: 'https://stripe.com/eur/yearly',
            price: 10.99,
            currencyName: 'EUR',
            periodName: 'mo',
            totalPerYear: 131.88,
            saving: {
              absolute: 32,
              relative: '20%'
            }
          }
        },
        sgd: {
          monthly: {
            stripeLink: 'https://stripe.com/sgd/monthly',
            price: 19.88,
            currencyName: 'SGD',
            periodName: 'mo',
            totalPerYear: 238.56
          },
          quarterly: {
            stripeLink: 'https://stripe.com/sgd/quarterly',
            price: 17.88,
            currencyName: 'SGD',
            periodName: 'mo',
            totalPerYear: 214.56,
            saving: {
              absolute: 27,
              relative: '10%'
            }
          },
          yearly: {
            stripeLink: 'https://stripe.com/sgd/yearly',
            price: 15.88,
            currencyName: 'SGD',
            periodName: 'mo',
            totalPerYear: 190.56,
            saving: {
              absolute: 50,
              relative: '20%'
            }
          }
        }
      }
    },
    {
      title: '4-week group course',
      frequency: '/course',
      description: 'via video conference',
      features: [
        '4 weeks of intensive learning and practicing',
        'Small group of 12-15 members',
        'Weekly coaching with the group',
        '1 year full access to Video On-Demand'
      ],
      cta: 'Coming Feb 2022 - Join Waitlist',
      mostPopular: false,
      variants: {
        aud: {
          price: 695,
          stripeLink: 'https//tqa.stripe.com/course/aud',
        },
        usd: {
          price: 500,
          stripeLink: 'https//tqa.stripe.com/course/usd',
        },
        cad: {
          price: 550,
          stripeLink: 'https//tqa.stripe.com/course/cad',
        },
        sgd: {
          price: 690,
          stripeLink: 'https//tqa.stripe.com/course/sgd',
        },
        gbp: {
          price: 295,
          stripeLink: 'https//tqa.stripe.com/course/gbp',
        },
        eur: {
          price: 495,
          stripeLink: 'https//tqa.stripe.com/course/eur',
        },
      },
      localisedPrice(currency) {
        return this.variants[currency].price;
      },
      localisedStripeLink(currency) {
        return this.variants[currency].stripeLink;
      },
    },
    {
      title: '',
      frequency: 'Scholarships and discounts',
      description: 'Everyone deserves a fair chance.',
      features: [
        'For every 10 product purchases, 1 free scholarship to a minority, disadvantaged person.',
        'If you can pay but your currency is at extreme disadvantage (e.g. Brazil, India, Malaysia etc), discounts available for you. ',
      ],
      cta: 'Signup for Scholarship or Discount',
      mostPopular: false,
      variants: {
        aud: {
          price: '',
          stripeLink: 'https//tqa.stripe.com/course/aud',
        },
        usd: {
          price: '',
          stripeLink: 'https//tqa.stripe.com/course/usd',
        },
        cad: {
          price: '',
          stripeLink: 'https//tqa.stripe.com/course/cad',
        },
        sgd: {
          price: '',
          stripeLink: 'https//tqa.stripe.com/course/sgd',
        },
        gbp: {
          price: '',
          stripeLink: 'https//tqa.stripe.com/course/gbp',
        },
        eur: {
          price: '',
          stripeLink: 'https//tqa.stripe.com/course/eur',
        },
      },
      localisedPrice(currency) {
        return this.variants[''].price;
      },
      localisedStripeLink(currency) {
        return this.variants[currency].stripeLink;
      },
    }
  ]
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

export function usePaymentOptions() {
  const context = useContext(PricingContext)

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }

  const { currency, subscriptionPeriod, tiers } = context.state

  const {
    stripeLink,
    price,
    currencyName,
    periodName,
    saving,
  } = tiers[0].variants[currency][subscriptionPeriod]

  useEffect(() => {
    const lowestPriceAvailable = tiers[0].variants[currency].yearly.price

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
    price,
    currencyName,
    periodName,
    tiers,
    saving,
    subscriptionPeriod,
  }
}
