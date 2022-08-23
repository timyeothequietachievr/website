import { createContext, useContext, useEffect, useReducer } from 'react'

const initialState = {
  currency: 'aud',
  subscriptionPeriod: 'yearly',
  unit: 'yr',
  price: 199,
  tiers: [
    {
      title: 'Learn on your own',
      features: [
        'Full access 30+ videos on demand (more added over time)',
        'Weekly office hours',
        'Monthly guest speakers',
        '24/7 online community of introverts'
      ],
      cta: 'Buy Now',
      mostPopular: true,
      variants: {
        aud: {
          monthly: {
            stripeLink: 'https://buy.stripe.com/dR68Aaa0XbY31xuaEE',
            price: 19.99,
            currencyName: 'AUD',
            periodName: 'mo',
            totalPerYear: 239.88
          },
          quarterly: {
            stripeLink: 'https://buy.stripe.com/9AQ8Aa5KHe6b5NK8wG',
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
            stripeLink: 'https://buy.stripe.com/3cs9Ee7SP3rx6RObIZ',
            price: 199,
            currencyName: 'AUD',
            periodName: 'yr',
            totalPerYear: 199,
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
            stripeLink: 'https://buy.stripe.com/fZeaIi4GD5zF6ROaEJ',
            price: 14.99,
            currencyName: 'USD',
            periodName: 'mo',
            totalPerYear: 179.88
          },
          quarterly: {
            stripeLink: 'https://buy.stripe.com/6oE17I0qnfafb844gp',
            price: 13.33,
            currencyName: 'USD',
            periodName: 'mo',
            totalPerYear: 159.96,
            saving: {
              absolute: 20,
              relative: '10%'
            }
          },
          yearly: {
            stripeLink: 'https://buy.stripe.com/cN2bMmflh4vB3FC3cu',
            price: 139,
            currencyName: 'USD',
            periodName: 'yr',
            totalPerYear: 139,
            saving: {
              absolute: 40,
              relative: '20%'
            }
          }
        },
        cad: {
          monthly: {
            stripeLink: 'https://buy.stripe.com/3cs8AaehdaTZ1xuaEK',
            price: 18.99,
            currencyName: 'CAD',
            periodName: 'mo',
            totalPerYear: 227.88
          },
          quarterly: {
            stripeLink: 'https://buy.stripe.com/00g03E5KHe6bb84fZ5',
            price: 16.99,
            currencyName: 'CAD',
            periodName: 'mo',
            totalPerYear: 199.96,
            saving: {
              absolute: 28,
              relative: '10%'
            }
          },
          yearly: {
            stripeLink: 'https://buy.stripe.com/cN29Ee6OL1jpgsofZd',
            price: 179,
            currencyName: 'CAD',
            periodName: 'yr',
            totalPerYear: 179,
            saving: {
              absolute: 40,
              relative: '20%'
            }
          }
        },
        gbp: {
          monthly: {
            stripeLink: 'https://buy.stripe.com/14k2bM2yv8LR6RO28c',
            price: 9.99,
            currencyName: 'GBP',
            periodName: 'mo',
            totalPerYear: 119.88
          },
          quarterly: {
            stripeLink: 'https://buy.stripe.com/fZeg2C3Czgejekg4gs',
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
            stripeLink: 'https://buy.stripe.com/14k2bMdd9bY37VS00g',
            price: 99,
            currencyName: 'GBP',
            periodName: 'yr',
            totalPerYear: 99,
            saving: {
              absolute: 24,
              relative: '20%'
            }
          }
        },
        eur: {
          monthly: {
            stripeLink: 'https://buy.stripe.com/9AQ17I4GDaTZdgcaEH',
            price: 12.99,
            currencyName: 'EUR',
            periodName: 'mo',
            totalPerYear: 155.88
          },
          quarterly: {
            stripeLink: 'https://buy.stripe.com/cN24jU0qn9PV5NK00d',
            price: 11.99,
            currencyName: 'EUR',
            periodName: 'mo',
            totalPerYear: 139.96,
            saving: {
              absolute: 16,
              relative: '10%'
            }
          },
          yearly: {
            stripeLink: 'https://buy.stripe.com/5kA2bMgple6ba408wP',
            price: 129,
            currencyName: 'EUR',
            periodName: 'yr',
            totalPerYear: 129,
            saving: {
              absolute: 32,
              relative: '20%'
            }
          }
        },
        sgd: {
          monthly: {
            stripeLink: 'https://buy.stripe.com/00g8Aagplfafb844gi',
            price: 19.88,
            currencyName: 'SGD',
            periodName: 'mo',
            totalPerYear: 238.56
          },
          quarterly: {
            stripeLink: 'https://buy.stripe.com/8wM5nYc950fldgc14c',
            price: 17.88,
            currencyName: 'SGD',
            periodName: 'mo',
            totalPerYear: 211.52,
            saving: {
              absolute: 27,
              relative: '10%'
            }
          },
          yearly: {
            stripeLink: 'https://buy.stripe.com/7sI4jU4GD5zF7VS14i',
            price: 188,
            currencyName: 'SGD',
            periodName: 'yr',
            totalPerYear: 188,
            saving: {
              absolute: 50,
              relative: '20%'
            }
          }
        },
        pln: {
          monthly: {
            stripeLink: 'https://buy.stripe.com/aEUbMmc953rxgso3cd',
            price: 57.99,
            currencyName: 'PLN',
            periodName: 'mo',
            totalPerYear: 695.88
          },
          quarterly: {
            stripeLink: 'https://buy.stripe.com/28o9Ee5KHfaf5NK9AL',
            price: 51.99,
            currencyName: 'PLN',
            periodName: 'mo',
            totalPerYear: 623.96,
            saving: {
              absolute: 71,
              relative: '10%'
            }
          },
          yearly: {
            stripeLink: 'https://buy.stripe.com/eVadUu7SPe6b4JGdRa',
            price: 599,
            currencyName: 'PLN',
            periodName: 'yr',
            totalPerYear: 599,
            saving: {
              absolute: 140,
              relative: '20%'
            }
          }
        }
      }
    },
    {
      title: '3-week group course',
      frequency: '/course',
      description: 'via video conference',
      features: [
        '4 weeks of intensive learning and practicing',
        'Small group of 12-15 members',
        'Weekly coaching with the group',
        '1 year full access to Video On-Demand'
      ],
      cta: 'Coming Soon - Join Waitlist',
      mostPopular: false,
      variants: {
        aud: {
          price: 695,
          stripeLink: 'https://forms.gle/ax4GaGghTLRQj4846'
        },
        usd: {
          price: 499,
          stripeLink: 'https://forms.gle/ax4GaGghTLRQj4846'
        },
        cad: {
          price: 645,
          stripeLink: 'https://forms.gle/ax4GaGghTLRQj4846'
        },
        sgd: {
          price: 688,
          stripeLink: 'https://forms.gle/ax4GaGghTLRQj4846'
        },
        gbp: {
          price: 265,
          stripeLink: 'https://forms.gle/ax4GaGghTLRQj4846'
        },
        eur: {
          price: 429,
          stripeLink: 'https://forms.gle/ax4GaGghTLRQj4846'
        },
        pln: {
          price: 2049,
          stripeLink: 'https://forms.gle/ax4GaGghTLRQj4846'
          /* stripeLink: 'https//tqa.stripe.com/course/pln' */
        } 
      },
      localisedPrice(currency) {
        return this.variants[currency].price
      },
      localisedStripeLink(currency) {
        return this.variants[currency].stripeLink
      }
    }
  ],
  giftTiers: [
    {
      title: '1 month',
      features: [
        
      ],
      cta: 'Gift Now',
      mostPopular: true,
      variants: {
        aud: {
          stripeLink: 'https://buy.stripe.com/14k5nYehd2nta403cy',
          price: 19.99,
          currencyName: 'AUD',
          periodName: 'mo',
          totalPerYear: 239.88
        },
        usd: {
          stripeLink: 'https://buy.stripe.com/28oeYy2yv2nt1xu4gD',
          price: 14.99,
          currencyName: 'USD',
          periodName: 'mo',
          totalPerYear: 179.88
        },
        cad: {
          stripeLink: 'https://buy.stripe.com/14kaIiehde6bgso14s',
          price: 18.99,
          currencyName: 'CAD',
          periodName: 'mo',
          totalPerYear: 227.88
        },
        gbp: {
          stripeLink: 'https://buy.stripe.com/9AQ03Edd91jp3FCdRf',
          price: 9.99,
          currencyName: 'GBP',
          periodName: 'mo',
          totalPerYear: 119.88
        },
        eur: {
          stripeLink: 'https://buy.stripe.com/28o3fQ3Cz4vBgsofZo',
          price: 12.99,
          currencyName: 'EUR',
          periodName: 'mo',
          totalPerYear: 155.88
        },
        sgd: {
          stripeLink: 'https://buy.stripe.com/6oE8Aaehde6b3FC9AV',
          price: 19.88,
          currencyName: 'SGD',
          periodName: 'mo',
          totalPerYear: 238.56
        },
        pln: {
          stripeLink: 'https://buy.stripe.com/fZe7w6ehdfaf2By14v',
          price: 57.99,
          currencyName: 'PLN',
          periodName: 'mo',
          totalPerYear: 695.88
        }
      }
    },
    {
      title: '3 months',
      features: [
        'Full access 30+ videos on demand (more added over time)',
        'Weekly office hours',
        'Monthly guest speakers',
        'Monthly guest speakers',
        'Monthly guest speakers',
        '24/7 online community of introverts'
      ],
      cta: 'Gift Now',
      mostPopular: true,
      variants: {
        aud: {
          stripeLink: 'https://buy.stripe.com/bIYaIi6OL3rx3FC8x1',
          price: 53.99,
          currencyName: 'AUD',
          periodName: 'mo',
          totalPerYear: 239.88
        },
        usd: {
          stripeLink: 'https://buy.stripe.com/8wM2bM7SP0fl6RO5kQ',
          price: 39.99,
          currencyName: 'USD',
          periodName: 'mo',
          totalPerYear: 179.88
        },
        cad: {
          stripeLink: 'https://buy.stripe.com/5kA5nYflhe6bcc89B8',
          price: 49.99,
          currencyName: 'CAD',
          periodName: 'mo',
          totalPerYear: 227.88
        },
        gbp: {
          stripeLink: 'https://buy.stripe.com/9AQ9Eedd96DJgsobJb',
          price: 26.99,
          currencyName: 'GBP',
          periodName: 'mo',
          totalPerYear: 119.88
        },
        eur: {
          stripeLink: 'https://buy.stripe.com/9AQ9Ee3Czd277VS28A',
          price: 34.99,
          currencyName: 'EUR',
          periodName: 'mo',
          totalPerYear: 155.88
        },
        sgd: {
          stripeLink: 'https://buy.stripe.com/aEUdUu4GDd276RO00x',
          price: 52.88,
          currencyName: 'SGD',
          periodName: 'mo',
          totalPerYear: 238.56
        },
        pln: {
          stripeLink: 'https://buy.stripe.com/4gw5nY4GDd27dgceVo',
          price: 155.99,
          currencyName: 'PLN',
          periodName: 'mo',
          totalPerYear: 695.88
        }
      }
    },
    {
      title: '12 months',
      features: [
        'Full access 30+ videos on demand (more added over time)',
        'Weekly office hours',
        'Monthly guest speakers',
        '24/7 online community of introverts'
      ],
      cta: 'Gift Now',
      mostPopular: true,
      variants: {
        aud: {
          stripeLink: 'https://buy.stripe.com/9AQ8Aab51gej2By00F',
          price: 189.99,
          currencyName: 'AUD',
          periodName: 'mo',
          totalPerYear: 239.88
        },
        usd: {
          stripeLink: 'https://buy.stripe.com/00g9Ee1urgejfokbJl',
          price: 139.99,
          currencyName: 'USD',
          periodName: 'mo',
          totalPerYear: 179.88
        },
        cad: {
          stripeLink: 'https://buy.stripe.com/00g7w65KHaTZb84eVB',
          price: 179.99,
          currencyName: 'CAD',
          periodName: 'mo',
          totalPerYear: 227.88
        },
        gbp: {
          stripeLink: 'https://buy.stripe.com/3cseYy1ure6bcc83cS',
          price: 95.99,
          currencyName: 'GBP',
          periodName: 'mo',
          totalPerYear: 119.88
        },
        eur: {
          stripeLink: 'https://buy.stripe.com/8wMg2C5KHbY3b843cO',
          price: 123.99,
          currencyName: 'EUR',
          periodName: 'mo',
          totalPerYear: 155.88
        },
        sgd: {
          stripeLink: 'https://buy.stripe.com/5kAaIi8WTd271xu00A',
          price: 188.88,
          currencyName: 'SGD',
          periodName: 'mo',
          totalPerYear: 238.56
        },
        pln: {
          stripeLink: 'https://buy.stripe.com/aEU5nYc95aTZ6RO6oZ',
          price: 555.99,
          currencyName: 'PLN',
          periodName: 'mo',
          totalPerYear: 695.88
        }
      }
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

export function usePaymentOptions({ kind } = {}) {
  const context = useContext(PricingContext)

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }

  const { currency, subscriptionPeriod, tiers, giftTiers } = context.state

  const selectedTiers = kind === 'gift' ? giftTiers : tiers

  const { stripeLink, price, currencyName, periodName, saving } =
    kind === 'gift'
      ? selectedTiers[0].variants[currency]
      : selectedTiers[0].variants[currency][subscriptionPeriod]

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