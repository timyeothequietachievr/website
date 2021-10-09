import Masthead from '../components/Masthead'
import BeingIntrovertHard from '../components/BeingIntrovertHard'
import WhatYouWillLearn from '../components/WhatYouWillLearn'
import WhatIsIncluded from '../components/WhatIsIncluded'
import Feature1 from '../components/Feature1'
import Feature2 from '../components/Feature2'
import Pricing from '../components/Pricing'
import WhatDoYouGet from '../components/WhatDoYouGet'
import Testimonials from '../components/Testimonials'
import TestimonialCentered from '../components/TestimonialCentered'
/* import TestimonialLargeAvatar from '../components/TestimonialLargeAvatar' */

export default function IndexPage() {
  return (
    <>
      <Masthead />
      <BeingIntrovertHard />
      <WhatYouWillLearn />
      <TestimonialCentered />
      <WhatIsIncluded />
      <Feature1 />
      <Feature2 />
      <Pricing />
      <Testimonials />
    </>
  )
}
