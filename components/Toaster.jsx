/* This example requires Tailwind CSS v2.0+ */
import { XIcon } from '@heroicons/react/outline'

export default function Toaster() {
  return (
    <div className="relative bg-indigo-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            {/* Black Friday 30 Habits 30 Days*/}
            <span className="md:hidden">🔥Black Friday: </span>
            <span className="hidden md:inline">🔥Black Friday: </span>
            <span className="block sm:ml-2 sm:inline-block">
              { /* <a href="#gifthttps://docs.google.com/forms/d/e/1FAIpQLSdVoSAkvl1ArLPunWGLbNBZoetnApIa2G9UzG2DLYBDqdNQWA/alreadyresponded" className="text-white font-bold underline"> */}
              <a href="30habits30days" className="text-white font-bold underline">
                {' '}
                Buy 30 habits in 30 days - Get The Quiet Achiever eBook for free<span aria-hidden="true">&rarr;</span>
              </a>
            </span>
            {/* gift it
            <span className="md:hidden">🎁 Give a gift. 1, 3 or 12 months.</span>
            <span className="hidden md:inline">🎁 Gift a gift. 1, 3 or 12 months.</span>
            */}
            {/* free 1:1 coaching
            <span className="md:hidden">🗣1:1 coaching. </span>
            <span className="hidden md:inline">🗣 1:1 coaching </span>
            <span className="block sm:ml-2 sm:inline-block">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVoSAkvl1ArLPunWGLbNBZoetnApIa2G9UzG2DLYBDqdNQWA/alreadyresponded" className="text-white font-bold underline">
                {' '}
                free signup<span aria-hidden="true">&rarr;</span>
              </a>
            </span>
            */}
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button
            type="button"
            className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="sr-only">Dismiss</span>
            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
