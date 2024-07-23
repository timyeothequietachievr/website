export function listingOffersFromBookPhysicalOffers(
  booksphysical: Array<BookphysicalOffer>,
  currency: Currency,
  userLocale: string,
): Array<ListingOffer> {
  return booksphysical.map((bookphysicalOffer) => {
    const { paymentLinks, price } = bookphysicalOffer.paymentOptions[currency];
    const formattedPrice = new Intl.NumberFormat(
      userLocale,
      { style: 'currency', currency }
    ).format(price)

    return {
      heading: {
        title: formattedPrice,
      },
      subheading: bookphysicalOffer.name,
      features: bookphysicalOffer.features,
      badge: bookphysicalOffer.badge,
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

