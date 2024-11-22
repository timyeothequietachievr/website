export function listingOffersFromCourseOffers(
  courses: Array<CourseOffer>,
  currency: Currency,
  userLocale: string,
): Array<ListingOffer> {
  return courses.map((courseOffer) => {
    const { paymentLinks, price } = courseOffer.paymentOptions[currency];
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
    /* START
    const formattedPrice = new Intl.NumberFormat(
      userLocale,
      { style: 'currency', currency }
    ).format(price)
    END */
    return {
      heading: {
        title: formattedPrice,
      },
      subheading: courseOffer.name,
      features: courseOffer.features,
      badge: courseOffer.badge,
      cta: {
        primary: {
          label: 'Buy now',
          link: paymentLinks.full,
        },
      }
    };
  });
}

