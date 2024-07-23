export function listingOffersFromBookDigitalOffers(
  booksdigital: Array<BookdigitalOffer>,
  currency: Currency,
  userLocale: string,
): Array<ListingOffer> {
  return booksdigital.map((bookdigitalOffer) => {
    const { paymentLinks, price } = bookdigitalOffer.paymentOptions[currency];
    const formattedPrice = new Intl.NumberFormat(
      userLocale,
      { style: 'currency', currency }
    ).format(price)

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

