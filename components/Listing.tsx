import { CheckIcon } from '@heroicons/react/outline'

interface ListingProps extends React.PropsWithChildren<{}> {}

export default function Listing({ children }: ListingProps) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
      {children}
    </div>
  )
}

Listing.Offer = ListingOffer

interface ListingOfferProps extends Omit<ListingOffer, 'widget'> {
  widget?: React.ReactNode | null
}

function ListingOffer({
  heading,
  subheading,
  badge,
  features,
  cta,
  widget
}: ListingOfferProps) {
  const eventValue = [subheading, heading.title, heading.suffix]
    .filter(Boolean)
    .join('|')

  return (
    <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col gap-8">
      {badge ? (
        <small className="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
          {badge}
        </small>
      ) : null}

      <header className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-gray-900">{subheading}</h3>
        <h4 className="flex gap-2 items-baseline text-gray-900">
          <span className="text-5xl font-extrabold tracking-tight">
            {heading.title}
          </span>
          {heading.suffix ? (
            <span className="text-xl font-semibold">{heading.suffix}</span>
          ) : null}
        </h4>
        {widget ? <div className="">{widget}</div> : null}
      </header>

      <section className="flex-1">
        {/* Feature list */}
        <ul role="list" className="space-y-6">
          {features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <CheckIcon
                className="flex-shrink-0 w-6 h-6 text-indigo-500"
                aria-hidden="true"
              />
              <span className="text-gray-500">{feature}</span>
            </li>
          ))}
        </ul>
      </section>
      <footer className="flex flex-col gap-4">
        <a
          href={cta.primary.link}
          className="bg-indigo-500 text-white hover:bg-indigo-600 py-3 px-6 border border-transparent rounded-md text-center font-medium"
          data-event-category="purchase"
          data-event-action="full_payment_click"
          data-event-label="payment cta"
          data-event-value={eventValue}
        >
          {cta.primary.label}
        </a>
        {cta.secondary ? (
          <a
            href={cta.secondary.link}
            className="text-indigo-500 hover:text-indigo-600 border-indigo-500 hover:bg-gray-100 py-3 px-6 border border-transparent rounded-md text-center font-medium"
            data-event-category="purchase"
            data-event-label="payment cta"
            data-event-action="split_payment_click"
            data-event-value={eventValue}
          >
            {cta.secondary.label}
          </a>
        ) : null}
      </footer>
    </div>
  )
}
