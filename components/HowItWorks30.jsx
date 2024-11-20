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
              Practice 1 habit a day for 30 days 
              </h3>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
               In our 30 days together:
              </h3>
              
              <p className="mt-8 text-lg text-gray-500">
              </p>
              <div className="mt-5 prose prose-indigo text-gray-500">
                <ul role="list">
                  <li>Each day, you will receive 1 email</li>
                  <li>In that email is a tiny habit you practice for the day</li>
                  <li>By the end of the day, submit your practice exercise</li>
                  <li>DAt the end of the 30 days, you’d have practiced 30 tiny habits from the book</li>
                </ul>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Practice along with other quiet achievers in the programme; you don't have to do this own your own. 
              </h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
