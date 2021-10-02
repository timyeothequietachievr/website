/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { CameraIcon } from '@heroicons/react/solid'

export default function AboutPage() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">chief introvert</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet tim yeo
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    /* src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80" */
                    src="src/about-timyeo.jpg"
                    alt="tim yeo speaking on stage at IxDA Milan 2020 about Design leadership for introverty"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-2">Photograph by Marcus O’Leary</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
              Tim Yeo is a designer, leader and chief introvert at The Quiet Achiever (TQA). Best known for saying complex things simply.<br />16 years a designer, design leader. 40 years an introvert.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                Being an introvert in a world that desires the extrovert ideal is hard. 
              </p>
              <p>
                Like you, I struggled to manage my introversion. <br />For years, I read self-help books on public speaking. I modeled social butterflies at networking events. I watched in awe as company leaders delivered speeches effortlessly.
              </p>
              <h3>I thought: if I tried hard enough I could be like them.</h3>
              <p>
              Mostly, it didn't work. When it did work, I was exhausted pretending to be someone else. It always felt unnatural.<br />Maybe there was something wrong with me. Maybe I wasn't good enough. 
              </p>
              <h3>Yet, the lion inside me _just_ would not shut up.</h3>
              <p>
                There had to be a better way.<br />I did not realise it at the time. But I took the best of what I learned. I stopped pretending and started practicing, making those techniques my own.<br />Which brings us to The Quiet Achiever. 
              </p>
              <h3>The Quiet Achiever's mission is to help introverts have impact and influence without pretending to be extroverts.</h3>
              <p>
              Maybe you are tired of keeping quiet in meetings even though you have something to say.<br />Perhaps you wish you were better at networking and didn't find it awkward and embarrassing.<br />Or maybe you just wish you were more visible in your organisation because you know how have something value to say; if only people heard you.<br />There is a better way; and you don't have to do it alone; cos' we're here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
