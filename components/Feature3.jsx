/* This example requires Tailwind CSS v2.0+ */
import { VideoCameraIcon, CalendarIcon, UserCircleIcon, ClockIcon } from '@heroicons/react/outline'

export default function Feature3() {
  return (
    <div className="relative bg-white pt-2 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {/* Videos on-demand */}
                  After the course, join the community
                </h2>
                <p className="mt-mt-5 prose prose-indigo text-gray-500 text-lg text-gray-500">
                Connect with introverts around the world just like you. Share articles, introvert memes, weekly 1:1 coaching. The community is here for you 24/7 when you need us.  
                {/* Binge watch or practice as you go. Videos are bite-sized, easy to apply and leverage your introverted strengths. Learn the way that suits you. */}
                </p>
                {/* <div className="mt-6">
                  <a
                    href="#community"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    See pricing
                  </a>
  </div> */}
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                /* src="https://www.youtube.com/embed/QRn5SFM97pA" */
                src="src/TQA-members.png"
                alt="Community"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
