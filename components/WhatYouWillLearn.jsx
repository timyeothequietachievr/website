/* This example requires Tailwind CSS v2.0+ */
import { VideoCameraIcon, CalendarIcon, UserCircleIcon, ClockIcon } from '@heroicons/react/outline'

export default function Example() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-2 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  What you will learn: 
                </h2>
                <p className="mt-5 prose prose-indigo text-gray-500">
                <ul role="list">
                  <li>How to speak up and perform in meetings</li>
                  <li>Be more visible in your organisation</li>
                  <li>Networking - online and in real life</li>
                  <li>Small talk - with people you just met</li>
                  <li>Public speaking - prepare and perform with confidence</li>
                  <li>How to say no politely</li>
                  <li>Facilitate workshops</li>
                  <li>Be an introverted leader with impact</li>
                  <li>Create an inclusive team for all, introverts included</li>
                </ul>
                Techniques are organised around <strong>The Introvert Skill Tree</strong>. Go deep into Networking or go broad across all skills. You choose what you learn, when you need to learn it.<br /><br /><strong>Level up</strong> your way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
