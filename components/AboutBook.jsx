/* This example requires Tailwind CSS v2.0+ */
import { VideoCameraIcon, CalendarIcon, UserCircleIcon, ClockIcon } from '@heroicons/react/outline'

export default function AboutBook() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Hi, I'm Tim Yeo
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            I've spent my career as a designer and a leader in tech. I worked in rooms full of people with strong opinions and loud voices.<br></br><br></br>
            For years, I struggled to manage my own introversion. I thought that if I wanted to be a leader, I needed to be an extrovert all the time. So I faked it, and it worked! But I was tired of pretending to be someone I was not. So I started doing things my own way.<br></br><br></br>
            The Quiet Achiever is a collection of the tiny habits that helped me have impact and influence at work, while remaining my true authentic self. <br></br><br></br>
            I developed, practiced and helped others learn these tiny habits over years of coaching and workshops. <br></br><br></br>
            Now, I share these tiny habits with you in my new book.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#pricing"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Buy the Book
              </a>
              <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                More about Tim <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="src/about-timyeo.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
