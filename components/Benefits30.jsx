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
                Remarkable change even after the first 7 days
              </h3>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
               Benefits:
              </h3>
              <p className="mt-8 text-lg text-gray-500">
              
              </p>
              <div className="mt-5 prose prose-indigo text-gray-500">
                <ul role="list">
                  <li>Do people say "you are too quiet" or "you should speak up more", but you don't know how?</li>
                  <li>Is small talk and networking awkward for you?</li>
                  <li>In meetings, do you keep quiet even though you have something to say?</li>
                  <li>Do you avoid public speaking and give away opportunities to present your work? </li>
                  <li>Do you say "yes" to unreasonable requests even though, in your head, you think "no"?</li>
                  <li>Do you shy away from difficult conversations but later wish you spoke up?</li>
                  <li>Do you act like an extrovert at work but you are tired of pretending?</li>
                  <li>Have read self help books to improve yourself, but all they did was make you feel good but you don't know what to do next?</li>
                </ul>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                👉🏻 If your answer is <strong>YES, this book is for you</strong>.
              </h3>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Benefits:</h2>
        <p className="mt-6 prose prose-indigo text-xl">
        <ul role="list">
          <li><strong>Daily practice:</strong> INSERT</li>
          <li><strong>Get promoted:</strong> INSERT</li>
          <li><strong>INSERT:</strong> INSERT</li>
          <li><strong>INSERT:</strong> INSERT</li>
          <li><strong>INSERT:</strong> INSERT</li>
          <li><strong>INSERT:</strong> INSERT</li>
        </ul>
        </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
