import Pricing from '../components/Pricing'
import { PricingContextProvider } from '../components/pricing-utils/Context'
import Masthead from '../components/Masthead'
import MastheadBook from '../components/MastheadBook'
import BeingIntrovertHard from '../components/BeingIntrovertHard'
import WhatYouWillLearnCourse from '../components/WhatYouWillLearnCourse'
import WhatIsIncluded from '../components/WhatIsIncluded'
import CoursesInclude from '../components/CoursesInclude'
import HowCoursesWork from '../components/HowCoursesWork'
import BookHero from '../components/BookHero'
import CourseInterviews from '../components/CourseInterviews'
import Feature1 from '../components/Feature1'
import Feature2 from '../components/Feature2'
import Feature3 from '../components/Feature3'
import MonthlyGuestSpeakers from '../components/MonthlyGuestSpeakers'
import Testimonials from '../components/Testimonials'
import TestimonialBook2 from '../components/TestimonialBook2'
import TestimonialInterview2 from '../components/TestimonialInterview2'
import TestimonialInterview3 from '../components/TestimonialInterview3'
import TestimonialBook1 from '../components/TestimonialBook1'
import TestimonialLeadership2 from '../components/TestimonialLeadership2'
import TestimonialLeadership3 from '../components/TestimonialLeadership3'
import TestimonialLeadership4 from '../components/TestimonialLeadership4'
import TestimonialLargeAvatar1 from '../components/TestimonialLargeAvatar1'
import TestimonialLargeAvatar2 from '../components/TestimonialLargeAvatar2'
import TestimonialLargeAvatar3 from '../components/TestimonialLargeAvatar3'
import TestimonialLargeAvatar4 from '../components/TestimonialLargeAvatar4'
import IntroTQA from '../components/IntroTQA'

export default function CoursesPage() {
  return (
    <PricingContextProvider>
      <MastheadBook />
      <BookHero />
      <TestimonialBook1 />
      <TestimonialLeadership2 />
      <TestimonialLeadership3 />
      <TestimonialLeadership4 />
      <TestimonialBook2 />
      <TestimonialInterview2 />
      <TestimonialInterview3 />
      <TestimonialLargeAvatar2 />
      <TestimonialLargeAvatar3 />
      <TestimonialLargeAvatar4 />
      <Testimonials />
      <MastheadBook />
      {/* <Gift /> */}
      {/*<Gift2 /> */}
    </PricingContextProvider>
  )
}
