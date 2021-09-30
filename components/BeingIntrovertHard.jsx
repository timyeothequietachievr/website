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
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
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
                Most introverts struggle in silence, pretending to be extroverted. That may work for a while, but it's tiring and always feels unnatural. 
                </p>
                <p>
                We'll show you how to turn your quiet traits into <strong>superpowers</strong>, while remaining true to your authentic self. 
                </p>
                <p>
                You don't have to do it alone.  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  