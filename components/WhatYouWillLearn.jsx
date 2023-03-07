/* This example requires Tailwind CSS v2.0+ */
import {
  VideoCameraIcon,
  CalendarIcon,
  UserCircleIcon,
  ClockIcon
} from '@heroicons/react/outline'
export default function WhatYouWillLearn() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-2 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  In 4 weeks, you will learn:
                </h2>
                <div className="mt-5 prose prose-indigo text-gray-500">
                  <ul role="list">
                    <li>How to speak up and perform in meetings</li>
                    <li>Introduce yourself confidently</li>
                    <li>Networking - online and in real life</li>
                    <li>Small talk - with people you just met</li>
                    <li>
                      Public speaking - prepare and perform with confidence
                    </li>
                    <li>How to say no politely</li>
                    <li>Handle difficult conversations</li>
                  </ul> 
                  <p>
                  The course is entirely online with a mix of live and async learning.
                    </p>
                <div className="mt-6">
                  <a
                    href="#pricing"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Next cohort in 5 weeks
                  </a>
                </div>
                  {/* <p>
                    Techniques are organised around{' '}
                    <strong>The Introvert Skill Tree</strong>. Go deep into
                    Networking or go broad across all skills. You choose what
                    you learn, when you need to learn it.
                  </p>
                  <p>
                    <strong>Level up</strong> your way.
  </p>*/}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="src/tqaoncircle.png"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}