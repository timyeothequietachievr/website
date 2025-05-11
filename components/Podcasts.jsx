/* This example requires Tailwind CSS v2.0+ */
import { VideoCameraIcon, CalendarIcon, UserCircleIcon, ClockIcon } from '@heroicons/react/outline'

export default function Podcasts() {
  return (
    <div className="relative bg-white pt-2 pb-32 overflow-hidden">
      {/* text left, image right */}
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div id="leadership">
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  The Human Centered Design Podcast | Gerry Scullion (May 2025) 
                </h2>
                <p className="mt-mt-5 prose prose-indigo text-gray-500 text-lg text-gray-500">
                <br /><br />
                
                {/* Binge watch or practice as you go. Videos are bite-sized, easy to apply and leverage your introverted strengths. Learn the way that suits you. */}
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    data-event-category="explore"
                    data-event-action="click_learn_more"
                    data-event-label="cta_podcast_HCDpodcast"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Listen now 
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                /* src="https://www.youtube.com/embed/QRn5SFM97pA" */
                src="src/podcast-HCDgerryscullion.jpeg"
                alt="Podcast UX Podcast"
              />
            </div>
          </div>
        </div>
      </div>
      {/* text right, image left */}
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div id="interviews">
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {/* Weekly office hours */}
                  Ran Talks Design (Jan 2025)
                </h2>
                <p className="mt-5 prose prose-indigo text-gray-500">
                Have you ever felt like being an introvert is holding you back at work? Like no matter how great your ideas are, they get overlooked because you are not the loudest voice in the room?<br />You are not alone. Today, I am talking to Tim Yeo, a seasoned design leader, coach, and author of The Quiet Achiever.<br />Tim is here to show you how to succeed as your authentic self. No pretending, no exhausting extrovert impressions—just practical, actionable habits that help you build confidence, make your voice heard, and create massive impact. <br />Whether you are struggling to stand out in meetings, looking to step into leadership, or just want to thrive without changing who you are, this episode will give you the tools to get there. <br />
                  {/* Once a week, we will meet via video conference. Ask a question or dial in to listen. No preparation required; participate as much or as little as you want. */}
                </p>
                <div className="mt-6">
                  <a
                    href="https://youtu.be/saNYHLWGoA8?si=_5ijUJWkhgN0l-a8"
                    data-event-category="explore"
                    data-event-action="click_learn_more"
                    data-event-label="cta_podcast_ranliu"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Listen now
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
                src="src/podcast-rantalksdesign.jpeg"
                alt="Podcast Design Feeling"
              />
            </div>
          </div>
        </div>
      </div>
      {/*END */}
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div id="leadership">
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Succeeding as an introvert (Jul 2023) - Invincible Career
                </h2>
                <p className="mt-mt-5 prose prose-indigo text-gray-500 text-lg text-gray-500">
                <strong></strong><br /><br /><strong>We talk about: </strong><br />- Introversion and job searching, job interviews, and getting noticed<br />-  How to be an introvert and still get ahead in your career<br />-  The kind of coaching Tim does with introverts and the workshops Tim teaches<br /><br />
                {/* Binge watch or practice as you go. Videos are bite-sized, easy to apply and leverage your introverted strengths. Learn the way that suits you. */}
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.youtube.com/watch?v=q7bMuU8aqUY"
                    data-event-category="explore"
                    data-event-action="click_learn_more"
                    data-event-label="cta_podcast_larry"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Listen now 
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                /* src="https://www.youtube.com/embed/QRn5SFM97pA" */
                src="src/podcast-invinciblecareer.jpeg"
                alt="Podcast Invincible Career"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div id="interviews">
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {/* Weekly office hours */}
                  Stratergies for introverts (May 2023) - UX Cake Podcast
                </h2>
                <p className="mt-5 prose prose-indigo text-gray-500">
                This episode is about quiet leadership - how you can be an authentic leader even if you don’t have the loudest voice in the room. We’re joined by Tim Yeo, a design leader and speaker who helps introverts have an impact and influence without having to pretend to be extroverts. Tim is the brain behind The Quiet Achiever, where he coaches introverts to use their strengths to their advantage.
Tim shares his experience working in environments where strong opinions and loud voices are the norm, and how he was pressured to speak up more. We also discuss the challenges that introverts face in the design industry, where we have to make our work visible, as well as in leadership, where there can be a perception that the ideal leader is an extrovert, and how to overcome those challenges.<br />  
                  {/* Once a week, we will meet via video conference. Ask a question or dial in to listen. No preparation required; participate as much or as little as you want. */}
                </p>
                <div className="mt-6">
                  <a
                    href="https://podcasts.apple.com/au/podcast/the-quiet-leader-strategies-for-introverts-with-tim-yeo/id1350595015?i=1000611676060"
                    data-event-category="explore"
                    data-event-action="click_learn_more"
                    data-event-label="cta_podcast_uxcake"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Listen now
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
                src="src/podcast-uxcake.jpeg"
                alt="Podcast UX Cake"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div id="leadership">
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  #296 Introvert designers with Tim Yeo (Aug 2022) - UX Podcast
                </h2>
                <p className="mt-mt-5 prose prose-indigo text-gray-500 text-lg text-gray-500">
                How do you make an impact as an introvert without pretending to be an extrovert? Often designers find themselves as quiet people in a noisy world, struggling in silence and being frustrated at not being heard. Tim Yeo joins us to talk about how introverted designers and design leaders can work with their introversion and use it as a super-power.<br /><br />
                {/* Binge watch or practice as you go. Videos are bite-sized, easy to apply and leverage your introverted strengths. Learn the way that suits you. */}
                </p>
                <div className="mt-6">
                  <a
                    href="https://uxpodcast.com/296-introverts-tim-yeo/"
                    data-event-category="explore"
                    data-event-action="click_learn_more"
                    data-event-label="cta_podcast_uxpodcast"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Listen now 
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                /* src="https://www.youtube.com/embed/QRn5SFM97pA" */
                src="src/podcast-uxpodcast.jpeg"
                alt="Podcast UX Podcast"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div id="interviews">
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {/* Weekly office hours */}
                  Design leadership for introverts with Tim Yeo (Jul 2022) - Design Feeling
                </h2>
                <p className="mt-5 prose prose-indigo text-gray-500">
                Founder of the Quiet Achiever and proud introvert, Tim Yeo, shares his personal journey of being an introverted designer and design leader and how he’s now helping other introverts have better impact and influence without pretending to be extroverts.<br />  
                  {/* Once a week, we will meet via video conference. Ask a question or dial in to listen. No preparation required; participate as much or as little as you want. */}
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.designfeeling.co/design-leadership-for-introverts-with-tim-yeo/"
                    data-event-category="explore"
                    data-event-action="click_learn_more"
                    data-event-label="cta_podcast_designfeeling"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Listen now
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
                src="src/podcast-designfeeling.jpeg"
                alt="Podcast Design Feeling"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div id="leadership">
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                   Understanding Users (Jun 2022)
                </h2>
                <p className="mt-mt-5 prose prose-indigo text-gray-500 text-lg text-gray-500">
                I talk with the first keynote speaker, Tim Yeo, who is Design Director @ IBM and who coaches introverts to have impact and influence without pretending to be extroverts at The Quiet Achiever. Tim tell me about his career to date, the way he works, and shares more details about his keynote address at UCD Gathering 2022, entitled: "Design leadership for introverts".<br /><br />
                {/* Binge watch or practice as you go. Videos are bite-sized, easy to apply and leverage your introverted strengths. Learn the way that suits you. */}
                </p>
                <div className="mt-6">
                  <a
                    href="https://podcasts.apple.com/ph/podcast/14-the-remote-conference-keynote-speakers-ucd/id1591604213?i=1000564673772"
                    data-event-category="explore"
                    data-event-action="click_learn_more"
                    data-event-label="cta_podcast_understandingusers"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Listen now 
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                /* src="https://www.youtube.com/embed/QRn5SFM97pA" */
                src="src/podcast-understandingusers.jpeg"
                alt="Podcast Understanding Users"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div id="interviews">
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {/* Weekly office hours */}
                   Design leadership for introverts (Dec 2021) - IxDA Sydney Podcast
                </h2>
                <p className="mt-5 prose prose-indigo text-gray-500">
                We dive into the following themes:<br />- How designers starting out in the industry can stand out when trying to get their first role.<br />- What kind of mindset to have while approaching design exercises.<br />- How introverts in particular can start to really craft their design paths<br />  
                  {/* Once a week, we will meet via video conference. Ask a question or dial in to listen. No preparation required; participate as much or as little as you want. */}
                </p>
                <div className="mt-6">
                  <a
                    href="https://open.spotify.com/episode/2Ds4joYDHHqPyEi53lQFd2"
                    data-event-category="explore"
                    data-event-action="click_learn_more"
                    data-event-label="cta_podcast_ixdasydney"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Listen now
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
                src="src/podcast-ixda.jpeg"
                alt="Interviews for introverts"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div id="leadership">
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                   Succeeding as an Introvert with Tim Yeo (Dec 2021) - UX Maturity
                </h2>
                <p className="mt-mt-5 prose prose-indigo text-gray-500 text-lg text-gray-500">
                Tim Yeo talks to us about being introverts in the design industry, how introversion is a strength and not a weakness, and techniques we can use to succeed as introverted designers.<br /><br />
                {/* Binge watch or practice as you go. Videos are bite-sized, easy to apply and leverage your introverted strengths. Learn the way that suits you. */}
                </p>
                <div className="mt-6">
                  <a
                    href="https://open.spotify.com/episode/5mSLWrX174tx47ICfepU1r"
                    data-event-category="explore"
                    data-event-action="click_learn_more"
                    data-event-label="cta_podcast_uxmaturity"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Listen now 
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                /* src="https://www.youtube.com/embed/QRn5SFM97pA" */
                src="src/podcast-uxmaturity.jpeg"
                alt="Podcast UX Maturity"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
