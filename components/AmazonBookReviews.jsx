/* This example requires Tailwind CSS v2.0+ */
import { VideoCameraIcon, CalendarIcon, UserCircleIcon, ClockIcon } from '@heroicons/react/outline'

export default function CourseLeadership() {
  return (
    <div className="relative bg-white pt-2 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div id="leadership">
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {/* Videos on-demand */}
                  Leave a review on Amazon
                </h2>
                <p className="mt-mt-5 prose prose-indigo text-gray-500 text-lg text-gray-500">
                <strong>Choose your country where Amazon operates:</strong>
                <ul>                 
                  <li><a href="https://amazon.com/review/create-review?&asin=9819402220">Amazon USA</a></li>
                  <li><a href="https://amazon.com.au/review/create-review?&asin=9819402220">Amazon Australia</a></li>
                  <li><a href="https://amazon.ca/review/create-review?&asin=9819402220">Amazon Canada</a></li>
                  <li><a href="https://amazon.fr/review/create-review?&asin=9819402220">Amazon France</a></li>
                  <li><a href="https://amazon.de/review/create-review?&asin=9819402220">Amazon Germany</a></li>
                  <li><a href="https://amazon.in/review/create-review?&asin=9819402220">Amazon India</a></li>
                  <li><a href="https://amazon.it/review/create-review?&asin=9819402220">Amazon Italy</a></li>
                  <li><a href="https://amazon.com.mx/review/create-review?&asin=9819402220">Amazon Mexico</a></li>
                  <li><a href="https://amazon.nl/review/create-review?&asin=9819402220">Amazon Netherlands</a></li>
                  <li><a href="https://amazon.pl/review/create-review?&asin=9819402220">Amazon Poland</a></li>
                  <li><a href="https://amazon.sg/review/create-review?&asin=9819402220">Amazon Singapore</a></li>
                  <li><a href="https://amazon.es/review/create-review?&asin=9819402220">Amazon Spain</a></li>                
                  <li><a href="https://amazon.co.uk/review/create-review?&asin=9819402220">Amazon UK</a></li>
                </ul>
                </p>
                {/*
                <div className="mt-6">
                  <a
                    href="#pricing"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Start Now 
                  </a>
                </div>
                */}
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                /* src="https://www.youtube.com/embed/QRn5SFM97pA" */
                src="src/profile-amazon.jpg"
                alt="Leadership for introverts"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div id="interviews">
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Weekly office hours
                  Interviews for introverts
                </h2>
                <p className="mt-5 prose prose-indigo text-gray-500">
                <strong>Next cohort: 13-20 Jul 2023</strong><br />1 week course, 3-4hrs time commitment.<br /><br /><strong>Topics: </strong>Types of interviews, their purpose and how to prepare; Hard truths about interviews, Shapes of successful interviews, Work and portfolio showcases, Building rapport and connection with your interviewer, Public speaking and conversation techniques.<br /><br /><strong>First call: </strong>Wed (US, Canada) & Thu (rest of world) - live presentation. After, you practice the lessons and share your work. <br /><br /><strong>Second call: </strong>Mon (US, Canada) & Tue (rese of world) - Ask Me Anything to discuss how your practice went.<br /><br /><strong>Session times:</strong><br />SYD 10am/5pm<br />SG 8am/3pm<br />UK 1am/8am<br />EST 8pm/3am<br />PST 5am/12am<br />  
                  Once a week, we will meet via video conference. Ask a question or dial in to listen. No preparation required; participate as much or as little as you want.
                </p>
                <div className="mt-6">
                  <a
                    href="#pricing"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Next cohort: 13 Jul 2023
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              
                src="src/Course-Hero-Interviews.jpg"
                alt="Interviews for introverts"
              />
            </div>
          </div>
        </div> 
      </div> */}
    </div>
  )
}
