import Pricing from '../components/Pricing'
import { PricingContextProvider } from '../components/pricing-utils/Context'
import MastheadSchool from '../components/MastheadSchool'
import BeingIntrovertHard from '../components/BeingIntrovertHard'
import WhatYouWillLearnCourse from '../components/WhatYouWillLearnCourse'
import WhatIsIncluded from '../components/WhatIsIncluded'
import CoursesInclude from '../components/CoursesInclude'
import HowCoursesWork from '../components/HowCoursesWork'
import CourseLeadership from '../components/CourseLeadership'
import CourseInterviews from '../components/CourseInterviews'
import Feature1 from '../components/Feature1'
import Feature2 from '../components/Feature2'
import Feature3 from '../components/Feature3'
import MonthlyGuestSpeakers from '../components/MonthlyGuestSpeakers'
import Testimonials from '../components/Testimonials'
import TestimonialInterview1 from '../components/TestimonialInterview1'
import TestimonialInterview2 from '../components/TestimonialInterview2'
import TestimonialInterview3 from '../components/TestimonialInterview3'
import TestimonialInterview4 from '../components/TestimonialInterview4'
import TestimonialInterview5 from '../components/TestimonialInterview5'
import TestimonialLeadership1 from '../components/TestimonialLeadership1'
import TestimonialLeadership2 from '../components/TestimonialLeadership2'
import TestimonialLeadership3 from '../components/TestimonialLeadership3'
import TestimonialLeadership4 from '../components/TestimonialLeadership4'
import TestimonialLeadership5 from '../components/TestimonialLeadership5'
import TestimonialLargeAvatar1 from '../components/TestimonialLargeAvatar1'
import TestimonialLargeAvatar2 from '../components/TestimonialLargeAvatar2'
import TestimonialLargeAvatar3 from '../components/TestimonialLargeAvatar3'
import TestimonialLargeAvatar4 from '../components/TestimonialLargeAvatar4'
import IntroTQA from '../components/IntroTQA'
import HeroSchool from '../components/HeroSchool'
import HeroPractice from '../components/HeroPractice'
import Hero2Coaching from '../components/Hero2Coaching'
import TopicsSchool from '../components/TopicsSchool'
import HeroInterviews from '../components/HeroInterviews'
import HeroFacilitation from '../components/HeroFacilitation'
import TitleBonusCourses from '../components/TitleBonusCourses'
import TitleSampleCourseVideos from '../components/TitleSampleCourseVideos'

export default function CoursesPage() {
  return (
    <PricingContextProvider>
      <MastheadSchool />
      {/* <CoursesInclude /> */}
      <HeroSchool />
      <HeroPractice />
      <Hero2Coaching />
      <TopicsSchool />
      <TitleBonusCourses />
      <HeroInterviews />
      <HeroFacilitation />
      <TitleBonusCourses />
      <TitleSampleCourseVideos />
      <TestimonialLeadership5 />
      <TestimonialLeadership1 />
      <TestimonialLeadership2 />
      <TestimonialLeadership3 />
      <TestimonialLeadership4 />
      {/* <BeingIntrovertHard /> */}
      {/* <IntroTQA /> */}
      {/* <HowItWorks /> */}
      {/* <WhatYouWillLearn /> */}
      {/* <WhatYouWillLearnCourse /> */}
      <TestimonialInterview4 />
      <TestimonialInterview1 />
      <TestimonialInterview5 />
      <TestimonialInterview2 />
      <TestimonialInterview3 />
      {/* <HowCoursesWork /> */}
      {/* <Feature1 /> */}
      {/* <Feature2 /> */}
      {/* <Feature3 /> */}
      {/* <MonthlyGuestSpeakers /> */}
      <TestimonialLargeAvatar2 />
      <TestimonialLargeAvatar3 />
      <TestimonialLargeAvatar4 />
      <Pricing kind="course">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          Start learning  
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
