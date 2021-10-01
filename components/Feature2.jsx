/* This example requires Tailwind CSS v2.0+ */
import { VideoCameraIcon, CalendarIcon, UserCircleIcon, ClockIcon } from '@heroicons/react/outline'

export default function Example() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
                <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Monthly guest speakers
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                    Every month features a guest speaker who will share their introvert story. Sessions are live and recorded. Members-only.<br /><br />2022 guest speakers include:
                    </p>
                    <p className="mt-5 prose prose-indigo text-gray-500">
                      <ul role="list">
                        <li>Sophie Matrai - former stutter, now mentor and coach-in-training</li>
                        <li>Jonathon Colman - Design leader, keynote speaker, introvert</li>
                        <li>Jim Lim - Singer, Songwriter, Performer</li>
                        <li>Diane Tarshis - Entrepreneur, startup advisor, coach, introvert</li>
                        <li>Emily Chardac - Chief People Officer, Board Advisor x-Square, Mozilla, introvert</li>
                        <li>Mark Ledsham - Chief Operating Officer, Executive</li>
                        <li>Larry Cornett - Leadership coach, Business Advisor, x-Yahoo x-eBay Design leader</li>
                        <li>Rebecca James - CEO, Marketer, Mom, introvert</li>
                        <li>Margaret Lee - Leadership Coach, x-Google x-Yahoo Design leader, introvert</li>
                        <li>Mags Hanley - Author-Career architecture, Speaker, Coach, Extrovert, Leader of introverts</li>
                        <li>Jason Mesut - Coach, Design leader, introvert</li>
                        <li>John Cutler - Product leader, designer</li>
                        <li>Ryan Rumsey - Author-Business thinking for designers, Founder, x-Apple x-Electronic Arts, x-Nestle</li>
                      </ul>
                    </p>
                </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
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
                    24/7 online community of introverts
                </h2>
                <p className="mt-4 text-lg text-gray-500"> 
                    Share with fellow introverts for learning and support. Online and in-app. Cos' some things are more fun together. 
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
