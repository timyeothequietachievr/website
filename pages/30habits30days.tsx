import ReactPlayer from "react-player/lazy";
import Pricing from '../components/Pricing'
import { PricingContextProvider } from '../components/pricing-utils/Context'
import BeingIntrovertHard from '../components/BeingIntrovertHard'
import WhatYouWillLearnCourse from '../components/WhatYouWillLearnCourse'
import WhatIsIncluded from '../components/WhatIsIncluded'
import CoursesInclude from '../components/CoursesInclude'
import HowCoursesWork from '../components/HowCoursesWork'
import CourseInterviews from '../components/CourseInterviews'
import Feature1 from '../components/Feature1'
import Feature2 from '../components/Feature2'
import Feature3 from '../components/Feature3'
import MonthlyGuestSpeakers from '../components/MonthlyGuestSpeakers'
import Testimonials from '../components/Testimonials'
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
import AboutBook from '../components/AboutBook'
import ConvertkitSide from '../components/ConvertkitSide'
import ConvertkitCenter from '../components/ConvertkitCenter'
import MastheadConvertkit from '../components/MastheadConvertkit'
import HeroFreeChapter from '../components/HeroFreeChapter'
import NewsletterConvertkit from '../components/NewsletterConvertkit'
import SignupBookTellYourFriends from '../components/SignupBookTellYourFriends'
import HeroBookDownloads from '../components/HeroBookDownloads'
import TopicsGoodBookStores from '../components/TopicsGoodBookStores'
import Masthead30 from '../components/Masthead30'
import Hero30 from '../components/Hero30'
import HowItWorks30 from '../components/HowItWorks30'
import Benefits30 from '../components/Benefits30'
import Topics30 from '../components/Topics30'
import Testimonials30 from '../components/Testimonials30'
import Reviews30 from '../components/Reviews30'
import FAQ30 from '../components/FAQ30'

export default function BookPage() {
  return (
    <PricingContextProvider>
      <Masthead30 />
      <Hero30 />
      <HowItWorks30 />
      {/* <Testimonials30 /> */}
      <Topics30 />
      {/* <Reviews30 /> */}
      <Benefits30 />
      <FAQ30 />
      <Pricing kind="Habits30days30">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          For less than a dollar a day
        </h2>
        <p className="mt-6 max-w-2xl text-xl text-gray-900">
        🔥 <strong>Black Friday</strong>: Buy before 2Dec & get The Quiet Achiever eBook for free
        </p>
      </Pricing>
      <SignupBookTellYourFriends />
    </PricingContextProvider>
  )
}
