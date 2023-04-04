export const courseTiers = [
  {
    title: 'Apr 2023',
    features: [
      '10 April - 5 May 2023',
      '4 weeks of focused learning and practicing',
      'Small group of 10-15 introverts',
      '1 year full access to The Quiet Achiever Community'
    ],
    cta: 'Buy Now',
    mostPopular: true,
    variants: {
      aud: {
        monthly: {
          stripeLink: 'https://buy.stripe.com/dR68Aaa0XbY31xuaEE',
          price: 19.99,
          currencyName: 'AUD',
          periodName: 'mo',
          totalPerYear: 239.88
        },
        quarterly: {
          stripeLink: 'https://buy.stripe.com/9AQ8Aa5KHe6b5NK8wG',
          price: 17.99,
          currencyName: 'AUD',
          periodName: 'mo',
          totalPerYear: 215.96,
          saving: {
            absolute: 24,
            relative: '10%'
          }
        },
        yearly: {
          stripeLink: 'https://buy.stripe.com/5kAdUub51d27cc8296',
          price: 799,
          currencyName: 'AUD',
          stripeLinkPaymentPlanMonthly: 'https://buy.stripe.com/8wM03E3Czfafgso3dI',
          periodName: '',
          totalPerYear: 799,
          saving: {
            absolute: '50',
            relative: '20%'
          }
        }
        /* groupcourse1: {
          stripeLink: 'https://stripe.com/aud/groupcourse1',
          price: 695,
          currencyName: 'AUD',
          periodName: 'course',
        } */
      },
      usd: {
        monthly: {
          stripeLink: 'https://buy.stripe.com/fZeaIi4GD5zF6ROaEJ',
          price: 14.99,
          currencyName: 'USD',
          periodName: 'mo',
          totalPerYear: 179.88
        },
        quarterly: {
          stripeLink: 'https://buy.stripe.com/6oE17I0qnfafb844gp',
          price: 13.33,
          currencyName: 'USD',
          periodName: 'mo',
          totalPerYear: 159.96,
          saving: {
            absolute: 20,
            relative: '10%'
          }
        },
        yearly: {
          stripeLink: 'https://buy.stripe.com/9AQeYy2yvfaffokbK6',
          price: 539,
          currencyName: 'USD',
          stripeLinkPaymentPlanMonthly: 'https://buy.stripe.com/3cs4jU6OLaTZdgc8xX',
          periodName: '',
          totalPerYear: 539,
          saving: {
            absolute: 40,
            relative: '20%'
          }
        }
      },
      cad: {
        monthly: {
          stripeLink: 'https://buy.stripe.com/3cs8AaehdaTZ1xuaEK',
          price: 18.99,
          currencyName: 'CAD',
          periodName: 'mo',
          totalPerYear: 227.88
        },
        quarterly: {
          stripeLink: 'https://buy.stripe.com/00g03E5KHe6bb84fZ5',
          price: 16.99,
          currencyName: 'CAD',
          periodName: 'mo',
          totalPerYear: 199.96,
          saving: {
            absolute: 28,
            relative: '10%'
          }
        },
        yearly: {
          stripeLink: 'https://buy.stripe.com/8wM6s2flhfaffokaFY',
          price: 739,
          currencyName: 'CAD',
          stripeLinkPaymentPlanMonthly: 'https://buy.stripe.com/3cseYy0qnaTZ0tq8y1',
          periodName: '',
          totalPerYear: 739,
          saving: {
            absolute: 40,
            relative: '20%'
          }
        }
      },
      gbp: {
        monthly: {
          stripeLink: 'https://buy.stripe.com/14k2bM2yv8LR6RO28c',
          price: 9.99,
          currencyName: 'GBP',
          periodName: 'mo',
          totalPerYear: 119.88
        },
        quarterly: {
          stripeLink: 'https://buy.stripe.com/fZeg2C3Czgejekg4gs',
          price: 8.99,
          currencyName: 'GBP',
          periodName: 'mo',
          totalPerYear: 107.88,
          saving: {
            absolute: 12,
            relative: '10%'
          }
        },
        yearly: {
          stripeLink: 'https://buy.stripe.com/5kA9Ee0qnaTZekgaG0',
          price: 449,
          currencyName: 'GBP',
          stripeLinkPaymentPlanMonthly: 'https://buy.stripe.com/8wMaIic953rxekgcOf',
          periodName: '',
          totalPerYear: 449,
          saving: {
            absolute: 24,
            relative: '20%'
          }
        }
      },
      eur: {
        monthly: {
          stripeLink: 'https://buy.stripe.com/9AQ17I4GDaTZdgcaEH',
          price: 12.99,
          currencyName: 'EUR',
          periodName: 'mo',
          totalPerYear: 155.88
        },
        quarterly: {
          stripeLink: 'https://buy.stripe.com/cN24jU0qn9PV5NK00d',
          price: 11.99,
          currencyName: 'EUR',
          periodName: 'mo',
          totalPerYear: 139.96,
          saving: {
            absolute: 16,
            relative: '10%'
          }
        },
        yearly: {
          stripeLink: 'https://buy.stripe.com/9AQ5nY1ur0fl1xu15p',
          price: 519,
          currencyName: 'EUR',
          stripeLinkPaymentPlanMonthly: 'https://buy.stripe.com/28o03E0qnbY38ZWcOg',
          periodName: '',
          totalPerYear: 519,
          saving: {
            absolute: 32,
            relative: '20%'
          }
        }
      },
      sgd: {
        monthly: {
          stripeLink: 'https://buy.stripe.com/00g8Aagplfafb844gi',
          price: 19.88,
          currencyName: 'SGD',
          periodName: 'mo',
          totalPerYear: 238.56
        },
        quarterly: {
          stripeLink: 'https://buy.stripe.com/8wM5nYc950fldgc14c',
          price: 17.88,
          currencyName: 'SGD',
          periodName: 'mo',
          totalPerYear: 211.52,
          saving: {
            absolute: 27,
            relative: '10%'
          }
        },
        yearly: {
          stripeLink: 'https://buy.stripe.com/fZeeYya0X9PV8ZW8xV',
          price: 688,
          currencyName: 'SGD',
          stripeLinkPaymentPlanMonthly: 'https://buy.stripe.com/7sI2bM5KHfaf0tq5lK',
          periodName: '',
          totalPerYear: 688,
          saving: {
            absolute: 50,
            relative: '20%'
          }
        }
      },
      pln: {
        monthly: {
          stripeLink: 'https://buy.stripe.com/aEUbMmc953rxgso3cd',
          price: 57.99,
          currencyName: 'PLN',
          periodName: 'mo',
          totalPerYear: 695.88
        },
        quarterly: {
          stripeLink: 'https://buy.stripe.com/28o9Ee5KHfaf5NK9AL',
          price: 51.99,
          currencyName: 'PLN',
          periodName: 'mo',
          totalPerYear: 623.96,
          saving: {
            absolute: 71,
            relative: '10%'
          }
        },
        yearly: {
          stripeLink: 'https://buy.stripe.com/4gw5nY1uraTZa40g0l',
          price: 2389,
          currencyName: 'PLN',
          stripeLinkPaymentPlanMonthly: 'https://buy.stripe.com/28oaIib51fafcc8aG6',
          periodName: '',
          totalPerYear: 2389,
          saving: {
            absolute: 140,
            relative: '20%'
          }
        }
      }
    }
  },
  {
    title: 'Mid 2023',
    frequency: '',
    description: 'via video conference',
    features: [
      'Dates: TBC',
      'Same course, different dates',
      'Full refund if you cancel before the course starts',
    ],
    cta: 'Buy Now - Confirm Your Spot',
    mostPopular: false,
    variants: {
      aud: {
        price: 899,
        stripeLink: 'https://buy.stripe.com/cN2dUu6OLe6b4JGaFX',
        stripeLinkPaymentPlanMonthly: 'https://buy.stripe.com/dR64jU4GD3rx3FCbKf'
      },
      usd: {
        price: 609,
        stripeLink: 'https://buy.stripe.com/8wMg2C8WTbY3cc801d',
        stripeLinkPaymentPlanMonthly: 'https://buy.stripe.com/6oEg2C2yv2nt2By01C'
      },
      cad: {
        price: 829,
        stripeLink: 'https://buy.stripe.com/8wMdUu3Cz3rxgso4hy',
        stripeLinkPaymentPlanMonthly: 'https://buy.stripe.com/aEUeYyehd7HN3FC4hO'
      },
      sgd: {
        price: 788,
        stripeLink: 'https://buy.stripe.com/4gw9Eeb51bY32By6pC',
        stripeLinkPaymentPlanMonthly: 'https://buy.stripe.com/cN2bMm3Czd27a4001D'
      },
      gbp: {
        price: 509,
        stripeLink: 'https://buy.stripe.com/00gcQq6OLe6bcc8g0e',
        stripeLinkPaymentPlanMonthly: 'https://buy.stripe.com/00geYydd9bY35NKaGe'
      },
      eur: {
        price: 579,
        stripeLink: 'https://buy.stripe.com/eVag2C2yv6DJ4JG6pF',
        stripeLinkPaymentPlanMonthly: 'https://buy.stripe.com/cN217Ia0X7HN6RO5lT'
      },
      pln: {
        price: 2699,
        stripeLink: 'https://buy.stripe.com/14k3fQ2yv1jp5NKdS5',
        stripeLinkPaymentPlanMonthly: 'https://buy.stripe.com/9AQcQqgplaTZfok01B'
        /* stripeLink: 'https//tqa.stripe.com/course/pln' */
        /* stripeLink: 'https://forms.gle/ax4GaGghTLRQj4846' */
      }
    },
    localisedPrice(currency) {
      return this.variants[currency].price
    },
    localisedStripeLink(currency) {
      return this.variants[currency].stripeLink
    },
    localisedstripeLinkPaymentPlanMonthly(currency) {
      return this.variants[currency].stripeLinkPaymentPlanMonthly
    }
  }
];
