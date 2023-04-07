const courses: Array<CourseOffer> = [
  {
    name: 'Learn React',
    badge: 'For Starters',
    features: ['Learn React from scratch', 'Get a job as a React developer'],
    paymentOptions: {
      AUD: {
        currency: 'AUD',
        price: 199.99,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/aud/19.99',
          full: 'https://buy.stripe.com/full-pay/aud/19.99'
        }
      },

      CAD: {
        currency: 'CAD',
        price: 199.99,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/cad/19.99',
          full: 'https://buy.stripe.com/full-pay/ca/19.99'
        }
      },

      EUR: {
        currency: 'EUR',
        price: 199.99,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/eur/19.99',
          full: 'https://buy.stripe.com/full-pay/eur/19.99'
        }
      },

      GBP: {
        currency: 'GBP',
        price: 199.99,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/gbp/19.99',
          full: 'https://buy.stripe.com/full-pay/gbp/19.99'
        }
      },

      PLN: {
        currency: 'PLN',
        price: 199.99,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/pln/19.99',
          full: 'https://buy.stripe.com/full-pay/pln/19.99'
        }
      },

      SGD: {
        currency: 'SGD',
        price: 199.99,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/sgd/19.99',
          full: 'https://buy.stripe.com/full-pay/sgd/19.99'
        }
      },

      USD: {
        currency: 'USD',
        price: 199.99,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/usd/19.99',
          full: 'https://buy.stripe.com/full-pay/usd/19.99'
        }
      }
    }
  },
  {
    name: 'Learn TypeScript',
    features: [
      'Learn TypeScript from scratch',
      'Build a real-world project',
      'Get a job as a TypeScript developer'
    ],
    paymentOptions: {
      AUD: {
        currency: 'AUD',
        price: 248.99,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/aud/19.99',
          full: 'https://buy.stripe.com/full-pay/aud/19.99'
        }
      },
      CAD: {
        currency: 'CAD',
        price: 248.99,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/cad/19.99',
          full: 'https://buy.stripe.com/full-pay/cad/19.99'
        }
      },

      EUR: {
        currency: 'EUR',
        price: 248.99,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/eur/19.99',
          full: 'https://buy.stripe.com/full-pay/eur/19.99'
        }
      },

      GBP: {
        currency: 'GBP',
        price: 248.99,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/gbp/19.99',
          full: 'https://buy.stripe.com/full-pay/gbp/19.99'
        }
      },

      PLN: {
        currency: 'PLN',
        price: 248.99,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/pln/19.99',
          full: 'https://buy.stripe.com/full-pay/pln/19.99'
        }
      },

      SGD: {
        currency: 'SGD',
        price: 248.99,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/sgd/19.99',
          full: 'https://buy.stripe.com/full-pay/sgd/19.99'
        }
      },

      USD: {
        currency: 'USD',
        price: 248.99,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/usd/19.99',
          full: 'https://buy.stripe.com/full-pay/usd/19.99'
        }
      }
    }
  },

  {
    name: 'Learn Node',
    features: [
      'Learn Node from scratch',
      'Build a real-world project',
      'Get a job as a Node developer',
      'Learn Express'
    ],
    paymentOptions: {
      AUD: {
        currency: 'AUD',
        price: 377.12,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/aud/19.99',
          full: 'https://buy.stripe.com/full-pay/aud/19.99'
        }
      },
      CAD: {
        currency: 'CAD',
        price: 377.12,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/cad/19.99',
          full: 'https://buy.stripe.com/full-pay/cad/19.99'
        }
      },

      EUR: {
        currency: 'EUR',
        price: 377.12,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/eur/19.99',
          full: 'https://buy.stripe.com/full-pay/eur/19.99'
        }
      },

      GBP: {
        currency: 'GBP',
        price: 377.12,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/gbp/19.99',
          full: 'https://buy.stripe.com/full-pay/gbp/19.99'
        }
      },

      PLN: {
        currency: 'PLN',
        price: 377.12,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/pln/19.99',
          full: 'https://buy.stripe.com/full-pay/pln/19.99'
        }
      },

      SGD: {
        currency: 'SGD',
        price: 377.12,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/sgd/19.99',
          full: 'https://buy.stripe.com/full-pay/sgd/19.99'
        }
      },

      USD: {
        currency: 'USD',
        price: 377.12,
        paymentLinks: {
          split: 'https://buy.stripe.com/split-pay/usd/19.99',
          full: 'https://buy.stripe.com/full-pay/usd/19.99'
        }
      }
    }
  }
]

export default courses
