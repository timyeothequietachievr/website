import {PricingDisplay} from './pricing-utils/Display'

export default function IntrovertHardBook() {
    return (
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              /* className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" */
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src={"src/30habits-howitworks.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"}
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-2 pb-16 px-4 sm:pt-2 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mt-6">
              <h1 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
               In our 30 days together:
              </h1>            
              <p className="mt-8 text-xl text-gray-900">
              </p>
              <div className="mt-5 prose prose-indigo text-xl text-gray-900">
                <ul role="list">
                  <li>Each day, you will receive 1 email</li>
                  <li>In that email is a tiny habit you practise for the day</li>
                  <li>By the end of the day, submit your practise exercise</li>
                  <li>At the end of the 30 days, you’d have practised 30 tiny habits from the book</li>
                </ul>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                You don't have to do this own your own. 
                </h3>
                <p></p>
              </div>
              <div className="mt-6">
                  <a
                    href="#pricing"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                    Less than $1/day
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
