/* This example requires Tailwind CSS v2.0+ */
import { VideoCameraIcon, CalendarIcon, UserCircleIcon, ClockIcon } from '@heroicons/react/outline'

export default function Podcast1() {
  return (
    <div className="relative bg-white pt-2 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div id="leadership">
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Succeeding as an introvert (Jul 2023) - Invincible Career
                </h2>
                <p className="mt-mt-5 prose prose-indigo text-gray-500 text-lg text-gray-500">
                <strong></strong><br /><br /><strong>We talk about: </strong><br />- Introversion and job searching, job interviews, and getting noticed<br />-  How to be an introvert and still get ahead in your career<br />-  The kind of coaching Tim does with introverts and the workshops Tim teaches<br /><br />
                {/* Binge watch or practice as you go. Videos are bite-sized, easy to apply and leverage your introverted strengths. Learn the way that suits you. */}
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.youtube.com/watch?v=q7bMuU8aqUY"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Listen now 
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                /* src="https://www.youtube.com/embed/QRn5SFM97pA" */
                src="src/podcast-invinciblecareer.jpeg"
                alt="Podcast Invincible Career"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div id="interviews">
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {/* Weekly office hours */}
                  Stratergies for introverts (May 2023) - UX Cake Podcast
                </h2>
                <p className="mt-5 prose prose-indigo text-gray-500">
                This episode is about quiet leadership - how you can be an authentic leader even if you don’t have the loudest voice in the room. We’re joined by Tim Yeo, a design leader and speaker who helps introverts have an impact and influence without having to pretend to be extroverts. Tim is the brain behind The Quiet Achiever, where he coaches introverts to use their strengths to their advantage.
Tim shares his experience working in environments where strong opinions and loud voices are the norm, and how he was pressured to speak up more. Tim identifies as an introvert and shares his journey in discovering more about being one.
We also discuss the challenges that introverts face in the design industry, where we have to make our work visible, as well as in leadership, where there can be a perception that the ideal leader is an extrovert, and how to overcome those challenges.<br />  
                  {/* Once a week, we will meet via video conference. Ask a question or dial in to listen. No preparation required; participate as much or as little as you want. */}
                </p>
                <div className="mt-6">
                  <a
                    href="https://podcasts.apple.com/au/podcast/the-quiet-leader-strategies-for-introverts-with-tim-yeo/id1350595015?i=1000611676060"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Listen now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                /* src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg" */
                /* src="https://www.sli.do/build/video/slido-polling-b82ad40.mp4" */
                src="src/podcast-uxcake.jpeg"
                alt="Podcast UX Cake"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
