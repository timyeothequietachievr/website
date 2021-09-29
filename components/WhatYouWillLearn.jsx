/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  ClockIcon,
  VideoCameraIcon,
  UserCircleIcon,
  MailIcon,
  CalendarIcon
} from '@heroicons/react/outline'

const transferFeatures = [
  {
    id: 1,
    name: 'Over 60+ techniques',
    description:
      'Videos are bite-sized, practical and easy to apply. Watch on-demand with new techniques dropped over time.',
    icon: VideoCameraIcon
  },
  {
    id: 2,
    name: 'Weekly office hours',
    description:
      'Walk in with a question or dial in to listen. Participate as much or as little as you want (embers-only via video conference).',
    icon: CalendarIcon
  },
  {
    id: 3,
    name: 'Monthly guest speakers',
    description:
      'Every month will feature a guest speaker (members-only via video conference).',
    icon: UserCircleIcon
  },
  {
    id: 4,
    name: '24/7 online community of introverts',
    description:
      'You are not alone. Share with fellow introverts for learning and support.',
    icon: ClockIcon
  }
]
const communicationFeatures = [
  {
    id: 1,
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon
  },
  {
    id: 2,
    name: 'Reminder emails',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MailIcon
  }
]

export default function WhatYouWillLearn() {
  return (
    <div className="py-2 bg-gray-50 overflow-hidden lg:py-2">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
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
          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <img
              className="relative mx-auto"
              width={490}
              src="..images/always-be-networking.png"
              alt=""
            />
          </div>
        </div>

      </div>
    </div>
  )
}
