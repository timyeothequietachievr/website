import { Switch } from '@headlessui/react'

interface PaymentOptionsProps {
  onCurrencyChanged: (currency: Currency) => void
  currency: Currency
}

export function PaymentOptions({
  onCurrencyChanged,
  currency
}: PaymentOptionsProps) {
  return (
    <div className="relative inline-block my-4">
      <select
        className="appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={(event) => onCurrencyChanged(event.target.value as Currency)}
        value={currency}
      >
        <option value="USD">US Dollar (USD)</option>
        <option value="AUD">Australian Dollar (AUD)</option>
        <option value="CAD">Canadian Dollar (CAD)</option>
        <option value="GBP">British Pound (GBP)</option>
        <option value="EUR">Euro (EUR)</option>
        <option value="SGD">Singapore Dollar (SGD)</option>
        <option value="PLN">Polish złoty (PLN)</option>
      </select>
    </div>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

interface FrequencyToggleProps {
  onFrequencyChanged: (frequency: Frequency) => void
  frequency: Frequency
}

export function FrequencyToggle({ onFrequencyChanged, frequency }: FrequencyToggleProps) {
  const isYearly = frequency === 'yearly';

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={isYearly}
        onChange={(isYearly) => { onFrequencyChanged(isYearly ? 'yearly' : 'monthly') }}
        className={classNames(
          isYearly ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            isYearly ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3">
        <span className="text-sm font-medium text-gray-900">pay yearly </span>
        <span className="text-sm text-gray-500">(Save%)</span>
      </Switch.Label>
    </Switch.Group>
  )
}

export function PeriodToggleExtended({
  onPeriodChanged,
  subscriptionPeriod,
  selectedOptions = ['yearly']
}) {
  function getBorderClassName(periodName) {
    if (periodName === subscriptionPeriod) {
      return 'border-indigo-800'
    }

    return 'border-gray-300'
  }

  if (selectedOptions.length < 2) {
    // if there is less than 2 options, we don't need to show the toggle
    return null
  }

  return (
    <span className="relative z-0 inline-flex shadow-sm rounded-md">
      {selectedOptions.includes('monthly') ? (
        <button
          onClick={() => onPeriodChanged('monthly')}
          type="button"
          className={`relative inline-flex items-center px-4 py-1 rounded-l-md border ${getBorderClassName(
            'monthly'
          )} bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
        >
          Monthly
        </button>
      ) : null}

      {selectedOptions.includes('quarterly') ? (
        <button
          onClick={() => onPeriodChanged('quarterly')}
          type="button"
          className={`-ml-px relative inline-flex items-center px-4 py-1 border ${getBorderClassName(
            'quarterly'
          )} bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
        >
          Quarterly
        </button>
      ) : null}

      {selectedOptions.includes('yearly') ? (
        <button
          onClick={() => onPeriodChanged('yearly')}
          type="button"
          className={`-ml-px relative inline-flex items-center px-4 py-1 rounded-r-md border ${getBorderClassName(
            'yearly'
          )} bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
        >
          Yearly
        </button>
      ) : null}
    </span>
  )
}
