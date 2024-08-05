/* This example requires Tailwind CSS v2.0+ */
import { VideoCameraIcon, CalendarIcon, UserCircleIcon, ClockIcon } from '@heroicons/react/outline'

export default function CourseInterviews() {
  return (
    <div className="relative bg-white pt-2 pb-32 overflow-hidden">
      {/* <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div id="leadership">
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Videos on-demand
                  Leadership for introverts
                </h2>
                <p className="mt-mt-5 prose prose-indigo text-gray-500 text-lg text-gray-500">
                <strong>Next cohort: 10Aug - 05 Sep 2023</strong><br />4 weeks course, 3-4hrs time commitment per week.<br /><br /><strong>Topics: </strong>Meetings, Pubilc Speaking, Introducing yourself with confidence, Being more visible in your org, Networking, Small talk, Handling difficult conversations<br /><br /><strong>First call: </strong>Wed (US, Canada) & Thu (rest of world) - live presentation of week's lessons. During the week, you practice the lessons and share your work. <br /><br /><strong>Second call: </strong>Mon (US, Canada) & Tue (rese of world) - Ask Me Anything to discuss how your practice went.<br /><br /><strong>Session times:</strong><br />SYD 10am/5pm<br />SG 8am/3pm<br />UK 1am/8am<br />EST 8pm/3am<br />PST 5am/12am<br />
                Binge watch or practice as you go. Videos are bite-sized, easy to apply and leverage your introverted strengths. Learn the way that suits you.
                </p>
                <div className="mt-6">
                  <a
                    href="#pricing"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Starts 10 Aug 2023
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="src/Course-Hero-Leadership.jpg"
                alt="Leadership for introverts"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div id="interviews">
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {/* Weekly office hours */}
                  Interviews for introverts
                </h2>
                <p className="mt-5 prose prose-indigo text-gray-500">
                <strong>Show up at interviews as the BEST version of yourself and get the job you deserve</strong><br />Videos on-demand, Live coaching calls, 3-4hrs time commitment.<br /><br /><strong>Topics: </strong>Types of interviews, their purpose and how to prepare; Hard truths about interviews, Shapes of successful interviews, Work and portfolio showcases, Building rapport and connection with your interviewer, Public speaking and conversation techniques.<br /><br /><br /><strong>This is for: </strong>Leaders, Managers and Individual Contributors who want to get interview-ready. The best time to look for a job is when you don't need one. The next best time is now.<br /><br /><strong>Videos on-demand: </strong>40+ bite-sized videos so you can jump straight to lessons you want; or binge-watch as a full 1hr presentation. <br /><br /><strong>Exercises: </strong>Practice and get feedback on things like how to introduce yourself confidently, portfolio walkthroughs, tough questions that put you on the spot.<br /><br /><strong>Live coaching:</strong> Rehearse and get feedback before showtime 🤲🏻<br />  
                  {/* Once a week, we will meet via video conference. Ask a question or dial in to listen. No preparation required; participate as much or as little as you want. */}
                </p>
                <div className="mt-6">
                  <a
                    href="#pricing"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Start right now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                /* src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg" */
                /* src="https://www.sli.do/build/video/slido-polling-b82ad40.mp4" */
                src="src/Course-Hero-Interviews.jpg"
                alt="Interviews for introverts"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
