/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Newsletter() {
    return (
      <div className="bg-gray-800" id="uxaustralia">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" id="newsletter-headline">
              Download 4-week introvert course curriculum (PDF)
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
              {/* shortly. */}
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            {/*
            Slides from UX Australia 2022
            https://forms.gle/7bgpGZBvdjKvEDy37

            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              */}
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <a
                  href="https://forms.gle/iz3yG32BFKrGxS4CA"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                >
                  Download Now
                </a>
            {/* <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                >
                  Download Now
            </button>
            */}
              </div>
            {/* </form> */}
            {/*<p className="mt-3 text-sm text-gray-300">
              We care about the protection of your data. Read our{' '}
              <a href="#" className="text-white font-medium underline">
                Privacy Policy.
              </a>
            </p>
            */}
          </div>
        </div>
      </div>
    )
  }
  