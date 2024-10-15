/* This example requires Tailwind CSS v2.0+ */
import { VideoCameraIcon, CalendarIcon, UserCircleIcon, ClockIcon } from '@heroicons/react/outline'

export default function AboutBook() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Be coached by someone who is quiet (just like you)
            </h1>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How does it work?
              </h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            <strong>How does it work?</strong><br></br><br></br>
            I'm your coach. Over live video calls, we talk through the challenges you are facing and what you want help with right now.<br></br><br></br>
            Coaching requires chemistry. I can help may people, but I can't help everyone. so we start with a free discovery call to see if we are a good fit.<br></br><br></br>
            Coaching helps you level up faster. The quiet achievers I can help achieve their goals in days and weeks with my assistance—goals which would normally take them months or years to accomplish on their own.<br></br><br></br>
            </p>
            <strong>What can I help you with?</strong><br></br><br></br>
            <ul role="list">
                  <li><strong>Quiet leadership:</strong> You are quiet by nature and identify as an introvert; you are not quite sure how to lead when every other leader around you behaves like an extrovert</li>
                  <li><strong> Get promoted: </strong> You want to be promoted to a leadership role but you feel stuck and don't know what to do to get there</li>
                  <li><strong>Be more visible:</strong> You do great work but wish you were more seen and visible in your organisation and industry</li>
                  <li><strong>Public speaking:</strong> You've just said yes to a major public talk/event/podcast, it's coming soon and you don't know what to do next</li>
                  <li><strong>Interview rehearsal:</strong> You are interviewing for a job you really like and want to show up as the best version of yourself</li>
                  <li><strong>Interview preparation:</strong> You are interviewing for roles, you've done good work but somehow you never get picked</li>
                </ul>
                <strong>Leadership and Team management?</strong><br></br><br></br>
            <ul role="list">
                  <li>You are leading/managing a team for the first time and not sure what to do</li>
                  <li><You've been promoted to a player-coach role but never managed people before</li>
                  <li>You started as the first designer in your startup/org and suddenly need to hire a team (quickly)</li>
                  <li>You are a leader/manager and want an advisor who's walked a similar path before</li>
                  <li>You are quiet but work with a team with loud voices and you want to learn how to be heard and push back</li>
                  <li>The team you manage are so quiet and you don't know how to get the best out of them</li>
                </ul>

            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#pricing"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                See Coaching Options
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
