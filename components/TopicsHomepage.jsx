/* This example requires Tailwind CSS v2.0+ */
import { VideoCameraIcon, CalendarIcon, UserCircleIcon, ClockIcon } from '@heroicons/react/outline'

const people = [
  {
    name: 'Introducing yourself',
    role: 'What makes a good introduction, different types of intros you need and how to structure them for meetings, workshops, interviews and networking.',
    imageUrl:
      'src/topic-introducingyourself.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Small talk',
    role: 'A framework for developing small talk topics that feel natural to you, how to build a connection with others and how to avoid awkward silences.',
    imageUrl:
      'src/topic-smalltalk.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Meetings',
    role: 'How to speak up before you are ready, be more visible in your organisation and make space in your day for focus-work.',
    imageUrl:
      'src/topic-meetings.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Public speaking',
    role: 'Types of public speaking scripts and how to prepare and practice so you communicate with purpose and clarity.',
    imageUrl:
      'src/topic-publicspeaking.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Handling difficult conversations',
    role: 'Understand why these conversations are especially hard for quiet achievers, how to give feedback and what to do when you receive feedback you do not like.',
    imageUrl:
      'src/topic-difficultconversations.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'How to say no (politely)',
    role: 'Saying Yes when you think No is not sustainable. Try practical tips on how to push back.',
    imageUrl:
      'src/topic-sayingnopolitely.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Networking',
    role: 'Understand the true purpose of networking and try practical techniques to network online and in real life.',
    imageUrl:
      'src/topic-networking.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Interviews',
    role: 'Show up as the BEST version of yourself and get the job you deserve',
    imageUrl:
      'src/topic-interviews.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Facilitation',
    role: 'Lead effective workshops that run on-time, on-topic and in-control',
    imageUrl:
      'src/topic-facilitation.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Being more visible in your org',
    role: 'Be seen and be heard for the great work that you do',
    imageUrl:
      'src/topic-beingmorevisible.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Management and Leadership',
    role: 'How to lead as a quiet achiever and how to manage a quiet team',
    imageUrl:
      'src/topic-mgt.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

export default function TopicsHomepage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Topics we cover</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tiny habits that you put into practice and start having impact at work the very next day. We cover topics like: 
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
