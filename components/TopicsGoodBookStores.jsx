/* This example requires Tailwind CSS v2.0+ */
import { VideoCameraIcon, CalendarIcon, UserCircleIcon, ClockIcon } from '@heroicons/react/outline'

const people = [
  {
    name: 'Amazon →',
    role: '',
    imageUrl:
      'src/topic-introducingyourself.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: 'https://amzn.to/3SFqtEn',
    linkedinUrl: '#',
  },
  {
    name: 'Audible (audiobook) →',
    role: '',
    imageUrl:
      'src/topic-smalltalk.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Book store 3 →',
    role: '',
    imageUrl:
      'src/topic-meetings.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

export default function TopicsBook() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Also available at the following book stores</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Shipping charges can be costly if you buy a physical book from my website and you are outside of Australia. That's OK; if you can't buy direct from my website, try any of the following book stores:   
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900"><a href={person.xUrl}>{person.name}</a></h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
