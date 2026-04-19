/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useRef } from 'react';
import { VideoCameraIcon, CalendarIcon, UserCircleIcon, ClockIcon } from '@heroicons/react/outline'

export default function BookHero() {

  return (
    <div className="relative bg-white pt-2 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div id="bookupdates">
              <div className="mt-6">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  Being a quiet achiever in a noisy world is hard
                </h1>
                <p className="mt-mt-5 prose prose-indigo text-gray-500 text-lg text-gray-500">
                <br /><br />Do people say "you are too quiet" or "you should speak up more"?<br /><br />Is small talk and networking awkward for you?<br /><br />In meetings, do you keep quiet even though you have something to say?<br /><br />Most quiet achievers struggle in silence, or pretend to be extroverted.<br /><br /><br /><strong>Life is too short to be living someone else's version of success.</strong><br /><br />Stop pretending. Start practicing. Remain your true authentic self.<br /><br />
                {/* Binge watch or practice as you go. Videos are bite-sized, easy to apply and leverage your introverted strengths. Learn the way that suits you. */}
                </p>
              </div>
              <div className="mt-6">
                  <a
                    href="#pricing"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                    data-event-category="book"
                    data-event-action="click_buy_book"
                    data-event-label="Buy the book - Hero"
                  >
                    Buy the book
                  </a>
                </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                /* src="https://www.youtube.com/embed/QRn5SFM97pA" */
                src="src/bookhero.jpg"
                alt="Signup for book updaates"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
