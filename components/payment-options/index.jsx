import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'

export function usePaymentOptions() {
  const paymentOptionsMatrix = {
    aud: {
      monthly: {
        stripeLink: 'https://stripe.com/aud/monthly',
        price: 19.99,
        currencyName: 'AUD',
        periodName: 'mth',
      },
      yearly: {
        stripeLink: 'https://stripe.com/aud/yearly',
        price: 199.99,
        currencyName: 'AUD',
        periodName: 'yr',
      }
    },
    cad: {
      monthly: {
        stripeLink: 'https://stripe.com/cad/monthly',
        price: 14.99,
        currencyName: 'CAD',
        periodName: 'mth',
      },
      yearly: {
        stripeLink: 'https://stripe.com/cad/yearly',
        price: 149.99,
        currencyName: 'CAD',
        periodName: 'yr',
      }
    }
  }

  const [selectedCurrency, setSelectedCurrency] = useState('aud')
  const [selectedPeriod, setSelectedPeriod] = useState('monthly')

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

  return {
    onCurrencyChanged,
    onPeriodChanged,
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
        <option value="cad">Canadian Dollar (CAD)</option>
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
