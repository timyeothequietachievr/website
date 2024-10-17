import MastheadCoaching from '../components/MastheadCoaching'
import BeingIntrovertHard from '../components/BeingIntrovertHard'
import WhatYouWillLearn from '../components/WhatYouWillLearn'
import WhatYouWillLearnCourse from '../components/WhatYouWillLearnCourse'
import WhatIsIncluded from '../components/WhatIsIncluded'
import Feature1 from '../components/Feature1'
import Feature2 from '../components/Feature2'
import Feature3 from '../components/Feature3'
import MonthlyGuestSpeakers from '../components/MonthlyGuestSpeakers'
import PricingCoaching from '../components/PricingCoaching'
import WhatDoYouGet from '../components/WhatDoYouGet'
import Testimonials from '../components/Testimonials'
import TestimonialCoaching1 from '../components/TestimonialCoaching1'
import TestimonialCoaching2 from '../components/TestimonialCoaching2'
import TestimonialCoaching3 from '../components/TestimonialCoaching3'
import TestimonialLeadership2 from '../components/TestimonialLeadership2'
import TestimonialLeadership3 from '../components/TestimonialLeadership3'
import TestimonialLeadership4 from '../components/TestimonialLeadership4'
import TestimonialLeadership5 from '../components/TestimonialLeadership5'
import TestimonialCentered from '../components/TestimonialCentered'
import TestimonialLargeAvatar1 from '../components/TestimonialLargeAvatar1'
import TestimonialLargeAvatar2 from '../components/TestimonialLargeAvatar2'
import TestimonialLargeAvatar3 from '../components/TestimonialLargeAvatar3'
import TestimonialLargeAvatar4 from '../components/TestimonialLargeAvatar4'
import IntroTQA from '../components/IntroTQA'
import Gift from '../components/Gift'
import Gift2 from '../components/Gift2'
import HowItWorks from '../components/HowItWorks'
import { PricingContextProvider } from '../components/pricing-utils/Context'
import AboutCoaching from '../components/AboutCoaching'

export default function CoachingPage() {
  return (    
    <PricingContextProvider>
      <MastheadCoaching />
      <AboutCoaching />
      {/* <BeingIntrovertHard /> */}
      {/* <IntroTQA /> */}
      {/* <HowItWorks /> */}
      {/* <WhatYouWillLearn /> */}
      <TestimonialCoaching3 />
      <TestimonialLeadership2 />
      <TestimonialLeadership3 />
      <TestimonialLeadership4 />
      <TestimonialLeadership5 /> 
      <TestimonialCoaching1 />
      <TestimonialCoaching2 />
      <PricingCoaching kind="coaching">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          Coaching
        </h2>
        <p className="mt-6 max-w-2xl text-xl text-gray-500">
        </p>
      </PricingCoaching>
      <Testimonials />
    </PricingContextProvider>
  )
}
