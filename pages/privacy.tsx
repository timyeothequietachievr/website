import MastheadPrivacy from '../components/MastheadPrivacy'
import AboutPrivacy from '../components/AboutPrivacy'
import { PricingContextProvider } from '../components/pricing-utils/Context'
export default function PrivacyPage() {
  return (    
    <PricingContextProvider>
      <MastheadPrivacy />
      <AboutPrivacy />
    </PricingContextProvider>
  )
}
