export const navigationItems = [
  { name: 'Courses', href: '/courses' },
  { name: 'Coaching', href: '/coaching' },
  { name: 'About', href: '/about' }
]

export const siteMetaData = {
  title: 'The Quiet Achiever',
  description:
    'life hacks for introverts to have impact at work without pretending to be extroverts',
  image: 'src/logo-tqa/svg'
}

export const listingMetaData = {
  currency: 'AUD',
  frequency: 'yearly',
  get userLocale() {
    return typeof navigator !== 'undefined' ? navigator.language : 'en'
  }
}
