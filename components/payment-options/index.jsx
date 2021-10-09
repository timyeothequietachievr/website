import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'

export function usePaymentOptions() {
  const paymentOptionsMatrix = {
    aud: {
      monthly: {
        stripeLink: 'https://stripe.com/aud/monthly',
        price: 19.99,
        currencyName: 'AUD',
        periodName: 'mo',
      },
      yearly: {
        stripeLink: 'https://stripe.com/aud/yearly',
        price: 15.99,
        currencyName: 'AUD',
        periodName: 'mo',
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
      },
      yearly: {
        stripeLink: 'https://stripe.com/usd/yearly',
        price: 11.99,
        currencyName: 'USD',
        periodName: 'mo',
      }
      /* groupcourse1: {
        stripeLink: 'https://stripe.com/usd/groupcourse1',
        price: 499,
        currencyName: 'USD',
        periodName: 'course',
      } */
    },
    cad: {
      monthly: {
        stripeLink: 'https://stripe.com/cad/monthly',
        price: 18.99,
        currencyName: 'CAD',
        periodName: 'mo',
      },
      yearly: {
        stripeLink: 'https://stripe.com/cad/yearly',
        price: 14.99,
        currencyName: 'CAD',
        periodName: 'mo',
      }
      /*groupcourse1: {
        stripeLink: 'https://stripe.com/cad/groupcourse1',
        price: 645,
        currencyName: 'CAD',
        periodName: 'course',
      } */
    },
    gbp: {
      monthly: {
        stripeLink: 'https://stripe.com/gbp/monthly',
        price: 9.99,
        currencyName: 'GBP',
        periodName: 'mo',
      },
      yearly: {
        stripeLink: 'https://stripe.com/gbp/yearly',
        price: 7.99,
        currencyName: 'GBP',
        periodName: 'mo',
      }
      /* groupcourse1: {
        stripeLink: 'https://stripe.com/gbp/groupcourse1',
        price: 265,
        currencyName: 'GBP',
        periodName: 'course',
      } */
    },
    eur: {
      monthly: {
        stripeLink: 'https://stripe.com/eur/monthly',
        price: 12.99,
        currencyName: 'EUR',
        periodName: 'mo',
      },
      yearly: {
        stripeLink: 'https://stripe.com/eur/yearly',
        price: 10.99,
        currencyName: 'EUR',
        periodName: 'mo',
      }
      /* groupcourse1: {
        stripeLink: 'https://stripe.com/aud/groupcourse1',
        price: 429,
        currencyName: 'EUR',
        periodName: 'course',
      } */
    },
    sgd: {
      monthly: {
        stripeLink: 'https://stripe.com/sgd/monthly',
        price: 19.88,
        currencyName: 'SGD',
        periodName: 'mo',
      },
      yearly: {
        stripeLink: 'https://stripe.com/sgd/yearly',
        price: 15.88,
        currencyName: 'SGD',
        periodName: 'mo',
      }
      /* groupcourse1: {
        stripeLink: 'https://stripe.com/aud/groupcourse1',
        price: 688,
        currencyName: 'SGD',
        periodName: 'course',
      } */
    }
  }

  const [selectedCurrency, setSelectedCurrency] = useState('aud')
  const [selectedPeriod, setSelectedPeriod] = useState('monthly')
  /* const [selectedGroupCourse1, setSelectedGroupCourse1] = useState('groupcourse1') */

  const {
    stripeLink,
    price,
    currencyName,
    periodName
  } = paymentOptionsMatrix[selectedCurrency][selectedPeriod];

  function onCurrencyChanged(currency) {
    setSelectedCurrency(currency)
  }

  function onPeriodChanged(period) {
    setSelectedPeriod(period)
  }
  /* function onGroupCourse1Changed(groupcourse1) {
    setSelectedGroupCourse1(groupcourse1)
  } */

  return {
    onCurrencyChanged,
    onPeriodChanged,
    /* onGroupCourse1Changed, */
    stripeLink,
    currencyName,
    price,
    periodName
  }
}

export function PaymentOptions({ onCurrencyChanged }) {
  return (
    <>
      <select
        className="appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={(event) => onCurrencyChanged(event.target.value)}
      >
        <option value="aud">Australian Dollar (AUD)</option>
        <option value="usd">US Dollar (USD)</option>
        <option value="cad">Canadian Dollar (CAD)</option>
        <option value="gbp">British Pound (GBP)</option>
        <option value="eur">Euro (EUR)</option>
        <option value="sgd">Singapore Dollar (SGD)</option>

      </select>
    </>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function PeriodToggle({ onPeriodChanged }) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    onPeriodChanged(enabled ? 'yearly' : 'monthly')
  }, [enabled])

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3">
        <span className="text-sm font-medium text-gray-900">
          pay yearly {' '}
        </span>
        <span className="text-sm text-gray-500">(Save 20%)</span>
      </Switch.Label>
    </Switch.Group>
  )
}
