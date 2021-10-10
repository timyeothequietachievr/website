/*
import moneypay from '../src/moneypay.png';
import moneypay from './src/TQA-meme-moneypay.svg'
import TQA-meme-moneypay from './src/TQA-meme-moneypay.svg'

This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
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
        <div className="relative pt-2 pb-2 px-4 sm:pt-2 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
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
                Like me, most introverts struggle in silence, or pretend to be extroverted. The result was always the same: I was tired pretending to be someone else.  
                </p>
                <h3>I struggled to manage, then I learned how</h3>
                  <p>For years:</p>
                <ul role="list">
                  <li>I read self-help books on public speaking</li>
                  <li>I modeled social butterflies at networking events</li>
                  <li>I thought: if I tried hard enough I could be like them</li>
                </ul>
                <p>
                Mostly, it didn't work. When it did work, it always felt unnatural. 
                
                Maybe: 
                <ul role="list">
                  <li>there was something wrong with me</li>
                  <li>I wasn't good enough</li>
                  <li>In meetings, do you keep quiet even though you have something to say?</li>
                </ul>
                But the lion inside me _just_ would not shut up. 
                There had to be a better way. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
