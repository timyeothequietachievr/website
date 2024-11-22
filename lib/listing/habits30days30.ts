export function listingOffersFromHabits30days30Offers(
  Habits30days30: Array<Habits30days30Offer>,
  currency: Currency,
  userLocale: string,
): Array<ListingOffer> {
  return Habits30days30.map((Habits30days30Offer) => {
    const { paymentLinks, price } = Habits30days30Offer.paymentOptions[currency];
    // Get just the symbol mapping
    const symbols = {
      'USD': '$',
      'AUD': '$',
      'CAD': '$',
      'GBP': '£',
      'EUR': '€',
      'SGD': '$',
      'PLN': 'zł'
    };
    
    // Format the number without currency
    const numberFormat = new Intl.NumberFormat(userLocale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
    
    // Combine symbol and number
    const formattedPrice = `${symbols[currency]}${numberFormat}`;

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

