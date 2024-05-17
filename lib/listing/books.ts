export function listingOffersFromBookOffers(
  books: Array<BookOffer>,
  currency: Currency,
  userLocale: string,
): Array<ListingOffer> {
  return books.map((bookOffer) => {
    const { paymentLinks, price } = bookOffer.paymentOptions[currency];
    const formattedPrice = new Intl.NumberFormat(
      userLocale,
      { style: 'currency', currency }
    ).format(price)

    return {
      heading: {
        title: formattedPrice,
      },
      subheading: bookOffer.name,
      features: bookOffer.features,
      badge: bookOffer.badge,
      cta: {
        primary: {
          label: 'Buy now',
          link: paymentLinks.full,
        },
        secondary: {
          label: 'Split payment over 4 months',
          link: paymentLinks.split,
        },
      }
    };
  });
}

