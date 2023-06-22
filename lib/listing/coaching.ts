export function listingOffersFromCoachingOffers(
  coaching: Array<CoachingOffer>,
  currency: Currency,
  frequency: Frequency,
  userLocale: string,
): Array<ListingOffer> {
  return coaching.map((coachingOffer) => {
    const { paymentLinks, price } = coachingOffer.paymentOptions[frequency][currency];
    const formattedPrice = new Intl.NumberFormat(
      userLocale,
      { style: 'currency', currency }
    ).format(price)
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
          label: 'Book Now',
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