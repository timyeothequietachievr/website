/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'

import {
  PaymentOptions,
  PeriodToggleExtended
} from './pricing-utils/PaymentOptions'
import {
  localisedPrice,
  localisedStripeLink,
} from './pricing-utils/selectors'

import { usePaymentOptions } from './pricing-utils/Context'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  const {
    price,
    stripeLink,
    saving,
    currencyName,
    periodName,
    onCurrencyChanged,
    onSubscriptionPeriodChanged,
    subscriptionPeriod,
    tiers
  } = usePaymentOptions()

  return (
    <>
      <div
        className="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8"
        id="pricing"
      >
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          Give a gift
        </h2>
        <p className="mt-6 max-w-2xl text-xl text-gray-500">
          to an introvert friend or colleague you know.
        </p>

        <PaymentOptions onCurrencyChanged={onCurrencyChanged} />

        {/* Tiers */}
        <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier, idx) => (
            <div
              key={tier.title}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {tier.title}
                  {idx === 0 ? (
                    <PeriodToggleExtended
                      onPeriodChanged={onSubscriptionPeriodChanged}
                      subscriptionPeriod={subscriptionPeriod}
                    />
                  ) : null}
                </h3>
                {tier.mostPopular ? (
                  <p className="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                    Basic
                  </p>
                ) : null}
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {idx === 0
                      ? `${currencyName} ${price}`
                      : `${currencyName} ${localisedPrice(
                          tier,
                          currencyName.toLowerCase()
                        )}`}
                  </span>
                  <span className="ml-1 text-xl font-semibold">
                    {idx === 0 ? `${periodName}` : tier.frequency}
                  </span>
                </p>
                <p className="mt-6 text-gray-500">
                  {idx === 0 && saving
                    ? `${saving.relative} off (save $${saving.absolute}/year)`
                    : tier.description}
                </p>

                {/* Feature list */}
                <ul role="list" className="mt-6 space-y-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <CheckIcon
                        className="flex-shrink-0 w-6 h-6 text-indigo-500"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={
                  idx === 0
                    ? stripeLink
                    : localisedStripeLink(
                      tier,
                      currencyName.toLowerCase()
                    )
                }
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
                  'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                )}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
