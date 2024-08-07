export function listingOffersFromCourseOffers(
  courses: Array<CourseOffer>,
  currency: Currency,
  userLocale: string,
): Array<ListingOffer> {
  return courses.map((courseOffer) => {
    const { paymentLinks, price } = courseOffer.paymentOptions[currency];
    const formattedPrice = new Intl.NumberFormat(
      userLocale,
      { style: 'currency', currency }
    ).format(price)

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

