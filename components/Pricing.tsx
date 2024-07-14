/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'

import Listing from './Listing'

import { FrequencyToggle, PaymentOptions } from './pricing-utils/PaymentOptions'

import { OfferKind, usePaymentOptions } from './pricing-utils/Context'

interface PricingProps
  extends React.PropsWithChildren<{
    kind: OfferKind
  }> {}

export default function Pricing({ kind, children }: PricingProps) {
  const { onCurrencyChanged, onFrequencyChanged, currency, frequency, offers } =
    usePaymentOptions({ kind })

  return (
    <div
      className="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8"
      id="pricing"
    >
      <div className="mb-6">{children}</div>
      
      <fieldset className="flex gap-5 items-center">
      <label className="max-w-2xl text-xl text-gray-500">
      <strong>Choose currency:</strong>
        </label>

        <PaymentOptions
          onCurrencyChanged={onCurrencyChanged}
          currency={currency}
        />
      </fieldset>
        
      <Listing>
        {offers.map((offer, idx) => (
          <Listing.Offer
            key={idx}
            {...offer}
            widget={
              offer.widget === 'frequencyToggle' ? (
                <FrequencyToggle
                  onFrequencyChanged={onFrequencyChanged}
                  frequency={frequency}
                />
              ) : null
            }
          />
        ))}
      </Listing>
    </div>
  )
}
