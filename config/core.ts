export const navigationItems = [
  { name: 'School', href: '/school' },
  { name: 'Coaching', href: '/coaching' },
  { name: 'Book', href: '/book' },
  { name: 'Podcast', href: '/podcast' },
  { name: 'About', href: '/about' }
]

export const siteMetaData = {
  title: 'The Quiet Achiever',
  description:
    'tiny habits for quiet achievers to have impact at work without pretending to be extroverts',
  image: 'src/logo-tqa/svg'
}

export const listingMetaData = {
  currency: 'USD',
  frequency: 'yearly',
  get userLocale() {
    return typeof navigator !== 'undefined' ? navigator.language : 'en'
  }
}
