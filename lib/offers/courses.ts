const courses: Array<CourseOffer> = [
  {
    name: 'Jun 2023 Design Leadership Cohort',
    badge: 'CLOSED',
    features: ['Dates: 15Jun - 11Jul', '4 weeks of focused learning and practice, 3-4hrs/week','small group of 10-15 introverts','1 year full access to The Quiet Achiever Community'],
    paymentOptions: {
      AUD: {
        currency: 'AUD',
        price: 899,
        paymentLinks: {
          split: '#CLOSED',
          full: '#CLOSED'
        }
      },

      CAD: {
        currency: 'CAD',
        price: 829,
        paymentLinks: {
          split: '#CLOSED',
          full: '#CLOSED'
        }
      },

      EUR: {
        currency: 'EUR',
        price: 579,
        paymentLinks: {
          split: '#CLOSED',
          full: '#CLOSED'
        }
      },

      GBP: {
        currency: 'GBP',
        price: 509,
        paymentLinks: {
          split: '#CLOSED',
          full: '#CLOSED'
        }
      },

      PLN: {
        currency: 'PLN',
        price: 2599,
        paymentLinks: {
          split: '#CLOSED',
          full: '#CLOSED'
        }
      },

      SGD: {
        currency: 'SGD',
        price: 788,
        paymentLinks: {
          split: '#CLOSED',
          full: '#CLOSED'
        }
      },

      USD: {
        currency: 'USD',
        price: 609,
        paymentLinks: {
          split: '#CLOSED',
          full: '#CLOSED'
        }
      }
    }
  },
  {
    name: 'Aug 2023 Design Leadership Cohort',
    badge: 'Open',
    features: ['Dates: 10Aug - 05Sep', '4 weeks of focused learning and practice, 3-4hrs/week','small group of 10-15 introverts','1 year full access to The Quiet Achiever Community'],
    paymentOptions: {
      AUD: {
        currency: 'AUD',
        price: 899,
        paymentLinks: {
          split: '#OPEN',
          full: '#OPEN'
        }
      },

      CAD: {
        currency: 'CAD',
        price: 829,
        paymentLinks: {
          split: '#OPEN',
          full: '#OPEN'
        }
      },

      EUR: {
        currency: 'EUR',
        price: 579,
        paymentLinks: {
          split: '#OPEN',
          full: '##OPEN'
        }
      },

      GBP: {
        currency: 'GBP',
        price: 509,
        paymentLinks: {
          split: '#OPEN',
          full: '#OPEN'
        }
      },

      PLN: {
        currency: 'PLN',
        price: 2599,
        paymentLinks: {
          split: '##OPEN',
          full: '#OPEN'
        }
      },

      SGD: {
        currency: 'SGD',
        price: 788,
        paymentLinks: {
          split: '#OPEN',
          full: '#OPEN'
        }
      },

      USD: {
        currency: 'USD',
        price: 609,
        paymentLinks: {
          split: '#OPEN',
          full: '#OPEN'
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
