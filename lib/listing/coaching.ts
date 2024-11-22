export function listingOffersFromCoachingOffers(
  coaching: Array<CoachingOffer>,
  currency: Currency,
  frequency: Frequency,
  userLocale: string,
): Array<ListingOffer> {
  return coaching.map((coachingOffer) => {
    const { paymentLinks, price } = coachingOffer.paymentOptions[frequency][currency];
    // Add currency symbols mapping
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
    const formattedFrequency = formatFrequency(frequency);

    return {
      heading: {
        title: formattedPrice,
        suffix: formattedFrequency,
      },
      subheading: coachingOffer.name,
      features: coachingOffer.features,
      badge: coachingOffer.badge,
      widget: 'frequencyToggle',
      cta: {
        primary: {
          label: 'Book Discovery Call',
          link: paymentLinks.full,
        },
      }
    };
  });
}

function formatFrequency(frequency: Frequency): string {
  switch (frequency) {
    case 'monthly':
      return 'mo';
    case 'yearly':
      return 'yr';
    default:
      return '';
  }
}