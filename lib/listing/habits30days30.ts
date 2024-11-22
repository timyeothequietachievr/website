export function listingOffersFromHabits30days30Offers(
  Habits30days30: Array<Habits30days30Offer>,
  currency: Currency,
  userLocale: string,
): Array<ListingOffer> {
  return Habits30days30.map((Habits30days30Offer) => {
    const { paymentLinks, price } = Habits30days30Offer.paymentOptions[currency];
    const formattedPrice = new Intl.NumberFormat(
      userLocale,
      { 
        style: 'currency', 
        currency,
        currencyDisplay: 'symbol' // Add this line to show only the symbol
      }
    ).format(price)

    return {
      heading: {
        title: formattedPrice,
      },
      subheading: Habits30days30Offer.name,
      features: Habits30days30Offer.features,
      badge: Habits30days30Offer.badge,
      cta: {
        primary: {
          label: 'Buy now',
          link: paymentLinks.full,
        },
        secondary: {
          label: 'Gift it',
          link: paymentLinks.split,
        },
      }
    };
  });
}

