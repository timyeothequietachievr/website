import Pricing from '../components/Pricing'
import { PricingContextProvider } from '../components/pricing-utils/Context'
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
import Cloudlogos from '../components/Cloudlogos'
import IntrovertHardBook from '../components/IntrovertHardBook'
import AboutBook from '../components/AboutBook'
import TopicsBook from '../components/TopicsBook'
import ConvertkitSide from '../components/ConvertkitSide'
import ConvertkitCenter from '../components/ConvertkitCenter'
import MastheadConvertkit from '../components/MastheadConvertkit'
import HeroFreeChapter from '../components/HeroFreeChapter'
import NewsletterConvertkit from '../components/NewsletterConvertkit'
import MastheadBook from '../components/MastheadBook'
import SignupBookTellYourFriends from '../components/SignupBookTellYourFriends'

export default function BookPage() {
  return (
    <PricingContextProvider>
      <MastheadBook />
      <BookHero />
      <Cloudlogos />
      <IntrovertHardBook />
      <AboutBook />
      <TopicsBook />
      <TestimonialBook1 />
      <TestimonialBook2 />
      <TestimonialLeadership2 />
      <TestimonialLeadership3 />
      <TestimonialLeadership4 />
      <TestimonialLeadership5 />      
      <TestimonialInterview2 />
      <TestimonialInterview3 />
      <TestimonialInterview4 />
      <TestimonialInterview5 />
      <TestimonialLargeAvatar2 />
      <TestimonialLargeAvatar3 />
      <TestimonialLargeAvatar4 />
      <Testimonials />
      <Pricing kind="bookdigital">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          Choose your currency 
        </h2>

        <p className="mt-6 max-w-2xl text-xl text-gray-500">
        </p>
      </Pricing>
      <Pricing kind="bookphysical">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          bookphysical
        </h2>

        <p className="mt-6 max-w-2xl text-xl text-gray-500">
        </p>
      </Pricing>
      {/*<ConvertkitSide />*/}
      {/* <ConvertkitCenter /> */}
      {/* <MastheadConvertkit /> */}
      {/* <HeroFreeChapter /> */}
      {/* <Gift /> */}
      {/*<Gift2 /> */}
      {/* <NewsletterConvertkit /> */}
      <SignupBookTellYourFriends />
    </PricingContextProvider>
  )
}
