import MastheadTOS from '../components/MastheadTOS'
import AboutTOS from '../components/AboutTOS'
import { PricingContextProvider } from '../components/pricing-utils/Context'
import HeroCoaching from '../components/HeroCoaching'
export default function TOSPage() {
  return (    
    <PricingContextProvider>
      <MastheadTOS />
      <AboutTOS />
    </PricingContextProvider>
  )
}
