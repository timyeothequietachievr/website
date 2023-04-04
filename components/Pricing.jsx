/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'

import {
  PaymentOptions,
  PeriodToggleExtended
} from './pricing-utils/PaymentOptions'
import { PricingDisplay } from './pricing-utils/Display'
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
    stripeLinkPaymentPlanMonthly,
    periodName,
    onCurrencyChanged,
    onSubscriptionPeriodChanged,
    subscriptionPeriod,
    selectedTiers
  } = usePaymentOptions()

  return (
    <>
      <div
        className="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8"
        id="pricing"
      >
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          {/*   Pricing starts at <PricingDisplay /> */}
          Next cohort in 3 weeks
        </h2>
        <p className="mt-6 max-w-2xl text-xl text-gray-500">
          {/* Learn on your own or in a group. You choose. */}
          Choose currency: 
        </p>

        <PaymentOptions onCurrencyChanged={onCurrencyChanged} />

        {/* Tiers */}
        <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {selectedTiers.map((tier, idx) => (
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
                    {/* BASIC */}
                    9 seats left
                  </p>
                ) : null}
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {idx === 0
                      ? `${currencyName} ${price}`
                      : `${currencyName} ${tier.localisedPrice(currencyName.toLowerCase())}`}
                  </span>
                  <span className="ml-1 text-xl font-semibold">
                    {idx === 0 ? `${periodName}` : tier.frequency}
                  </span>
                </p>
                {/* <p className="mt-6 text-gray-500">{idx === 0 && saving ? `${saving.relative} off (save $${saving.absolute}/year)` : tier.description}</p> */}
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
                href={idx === 0 ? stripeLink : tier.localisedStripeLink(currencyName.toLowerCase())}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
                  'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                )}
                data-event-category="purchase"
                data-event-action="full_payment_click"
                data-event-label="payment cta"
                data-event-value={`${tier.title}|${currencyName}`}
              >
                {tier.cta}
              </a>
              <a href={idx === 0 ? stripeLinkPaymentPlanMonthly : tier.localisedstripeLinkPaymentPlanMonthly(currencyName.toLowerCase())}
                className="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
                data-event-category="purchase"
                data-event-label="payment cta"
                data-event-action="split_payment_click"
                data-event-value={`${tier.title}|${currencyName}`}
              >
                Split payment over 4 months
              </a> 
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
