interface ListingOffers {
  offerItems: Array<ListingOffer>
  currency: Currency
  frequency?: Frequency
}

interface ListingOffer {
  heading: {
    title: string
    suffix?: string
  }
  subheading: string
  badge: string
  features: Array<string>
  cta: {
    primary: {
      label: string
      link: string
    }
    secondary?: {
      label: string
      link: string
    }
  },
  widget?: 'frequencyToggle' | null
}
