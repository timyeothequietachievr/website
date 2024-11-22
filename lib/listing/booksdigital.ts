export function listingOffersFromBookDigitalOffers(
  booksdigital: Array<BookdigitalOffer>,
  currency: Currency,
  userLocale: string,
): Array<ListingOffer> {
  return booksdigital.map((bookdigitalOffer) => {
    const { paymentLinks, price } = bookdigitalOffer.paymentOptions[currency];
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
      subheading: bookdigitalOffer.name,
      features: bookdigitalOffer.features,
      badge: bookdigitalOffer.badge,
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

