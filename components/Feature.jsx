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

export default function Feature() {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          How it works
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          We offer video on-demand, weekly office hours, monthly guest speakers and an online community of introverts. 
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
            Topics include:
            </h3>
            <p className="mt-3 text-lg text-gray-500">
            How to speak up and perform in meetings, being more visible in your organisation, how to network online and in real-life, make small talk, getting better at public speaking, how to say no politely etc
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
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
