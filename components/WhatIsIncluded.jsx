/* This example requires Tailwind CSS v2.0+ */
import { VideoCameraIcon, CalendarIcon, UserCircleIcon, ClockIcon, AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: '60+ videos on-demand',
    description:
      'Need to introduce yourself? Preparing for a workshop? Watch a video right before you do it.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Weekly office hours',
    description:
      'Live via video conference. Ask a question or dial in to listen. No preparation required; participate as much or as little as you want.',
    icon: CalendarIcon,
  },
  {
    name: 'Monthly guest speakers',
    description:
      'Live and recorded. Every month features a guest speaker who will share their introvert story.',
    icon: UserCircleIcon,
  },
  {
    name: '24/7 online community of introverts',
    description:
      'You are not alone. Share with fellow introverts for learning and support. Online and in-app.',
    icon: ClockIcon,
  },
]

export default function Example() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase"></h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What is included
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Videos on-demand, weekly office hours, monthly guest speakers, 24/7 community. 
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
