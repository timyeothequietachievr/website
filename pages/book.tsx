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
import TestimonialInterview4 from '../components/TestimonialInterview4'
import TestimonialInterview5 from '../components/TestimonialInterview5'
import TestimonialBook1 from '../components/TestimonialBook1'
import TestimonialLeadership2 from '../components/TestimonialLeadership2'
import TestimonialLeadership3 from '../components/TestimonialLeadership3'
import TestimonialLeadership4 from '../components/TestimonialLeadership4'
import TestimonialLeadership5 from '../components/TestimonialLeadership5'
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
      <TestimonialLeadership5 />
      <TestimonialBook2 />
      <TestimonialInterview2 />
      <TestimonialInterview3 />
      <TestimonialInterview4 />
      <TestimonialInterview5 />
      <TestimonialLargeAvatar2 />
      <TestimonialLargeAvatar3 />
      <TestimonialLargeAvatar4 />
      <Testimonials />
      {/* <Pricing kind="course">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          Start learning  
        </h2>

        <p className="mt-6 max-w-2xl text-xl text-gray-500">
        </p>
  </Pricing> */}
      <MastheadBook />
      {/* <Gift /> */}
      {/*<Gift2 /> */}
    </PricingContextProvider>
  )
}
