/* This example requires Tailwind CSS v2.0+ */
import { VideoCameraIcon, CalendarIcon, UserCircleIcon, ClockIcon } from '@heroicons/react/outline'

export default function Feature1() {
  return (
    <div className="relative bg-white pt-2 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {/* Videos on-demand */}
                  50+ video lessons
                </h2>
                <p className="mt-mt-5 prose prose-indigo text-gray-500 text-lg text-gray-500">
                10-15 videos released every week. Learn async in your own time. Videos are short and easy to apply. Lessons leverage your introverted strengths. 
                {/* Binge watch or practice as you go. Videos are bite-sized, easy to apply and leverage your introverted strengths. Learn the way that suits you. */}
                </p>
                <div className="mt-6">
                  <a
                    href="#pricing"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    See pricing
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
                src="src/videoondemand.gif"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {/* Weekly office hours */}
                  Live video calls
                </h2>
                <p className="mt-5 prose prose-indigo text-gray-500">
                <strong>First call:</strong> Wed (US, Canada) & Thu (rest of world) - presentation of the week's lessons. During the week, you practice the lessons and share your work. <strong>Second call:</strong> Mon (US, Canada) & Tue (rest of world) - discuss how your practice went.<br /><strong>Session times:</strong>SYD 10am/5pm SG 8am/3pm<br />UK 1am/8am<br />EST 8pm/3am<br />PST 5pm/12am<br />  
                  {/* Once a week, we will meet via video conference. Ask a question or dial in to listen. No preparation required; participate as much or as little as you want. */}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                /* src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg" */
                /* src="https://www.sli.do/build/video/slido-polling-b82ad40.mp4" */
                src="src/course-livevideocalls.png"
                alt="2 live video calls every week"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
