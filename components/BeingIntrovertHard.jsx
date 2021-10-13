import {PricingDisplay} from './pricing-utils/Display'

export default function BeingIntrovertHard() {
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
                Being an introvert in a noisy world is hard
              </h3>


              <p className="mt-8 text-lg text-gray-500">
              
              </p>
              <div className="mt-5 prose prose-indigo text-gray-500">
                <ul role="list">
                  <li>Do people say "you are too quiet" or "you should speak up more", but you don't know how?</li>
                  <li>Is small talk and networking awkward for you?</li>
                  <li>In meetings, do you keep quiet even though you have something to say?</li>
                </ul>
                <p>
                Like me, most introverts struggle in silence, or pretend to be extroverted.   
                </p>
                <p>
                For years, I read self-help books, modeled others and thought: if I tried hard enough I could be like them. Mostly, it didn't work. If it did work, it always felt unnatural.    
                </p>
                <p>
                I thought: what's wrong with me? Maybe I wasn't good enough. Maybe I should be content in my own shell.  
                </p>
                <h3>But the voice inside me <i>just</i> refused to give up.</h3>
                  <p>There had to be a better way.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
