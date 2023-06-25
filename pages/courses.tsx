import Pricing from '../components/Pricing'
import { PricingContextProvider } from '../components/pricing-utils/Context'
import Masthead from '../components/Masthead'
import MastheadCourses from '../components/MastheadCourses'
import BeingIntrovertHard from '../components/BeingIntrovertHard'
import WhatYouWillLearnCourse from '../components/WhatYouWillLearnCourse'
import WhatIsIncluded from '../components/WhatIsIncluded'
import CoursesInclude from '../components/CoursesInclude'
import HowCoursesWork from '../components/HowCoursesWork'
import Course1 from '../components/Course1'
import Feature1 from '../components/Feature1'
import Feature2 from '../components/Feature2'
import Feature3 from '../components/Feature3'
import MonthlyGuestSpeakers from '../components/MonthlyGuestSpeakers'
import Testimonials from '../components/Testimonials'
import TestimonialInterview1 from '../components/TestimonialInterview1'
import TestimonialLargeAvatar1 from '../components/TestimonialLargeAvatar1'
import TestimonialLargeAvatar2 from '../components/TestimonialLargeAvatar2'
import TestimonialLargeAvatar3 from '../components/TestimonialLargeAvatar3'
import TestimonialLargeAvatar4 from '../components/TestimonialLargeAvatar4'
import IntroTQA from '../components/IntroTQA'

export default function CoursesPage() {
  return (
    <PricingContextProvider>
      <MastheadCourses />
      <CoursesInclude />
      <Course1 />
      {/* <BeingIntrovertHard /> */}
      {/* <IntroTQA /> */}
      {/* <HowItWorks /> */}
      {/* <WhatYouWillLearn /> */}
      {/* <WhatYouWillLearnCourse /> */}
      <TestimonialInterview1 />
      <HowCoursesWork />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      {/* <MonthlyGuestSpeakers /> */}
      <TestimonialLargeAvatar2 />
      <TestimonialLargeAvatar3 />
      <TestimonialLargeAvatar4 />
      <Pricing kind="course">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          Courses coming soon
        </h2>

        <p className="mt-6 max-w-2xl text-xl text-gray-500">
        </p>
      </Pricing>
      <Testimonials />
      {/* <Gift /> */}
      {/*<Gift2 /> */}
    </PricingContextProvider>
  )
}
