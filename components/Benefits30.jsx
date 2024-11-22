import {PricingDisplay} from './pricing-utils/Display'

export default function IntrovertHardBook() {
    return (
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              /* className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" */
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src={"src/TQA-meme-moneypay.svg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"}
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-2 pb-16 px-4 sm:pt-2 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why join? 
              </h3>
              <p className="mt-8 text-lg text-gray-500">
              </p>
              <div className="mt-6 prose prose-indigo text-xl">
                <ul role="list">
                  <li><strong>Daily practice:</strong> Receive 1 habit per day, directly in your inbox</li>
                  <li><strong>Bite-sized and actionable:</strong> Each habit takes less than 5 minutes to practice, making it easy to fit into your day</li>
                  <li><strong>Support and accountability:</strong> Practice alongside others who understand your challenges.</li>
                  <li><strong>Proven results:</strong> Watch how others have practiced and improved over time.</li>
                  <li><strong>Practice at a time that suits you:</strong> Morning, afternoon or night; the programme is online 24/7</li>
                </ul>
              </div>
              <div className="mt-6">
                  <a
                    href="#pricing"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                    Buy now
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
