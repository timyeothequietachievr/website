/* This example requires Tailwind CSS v2.0+ */
import {
    PlayIcon,
    UserGroupIcon,
    ShareIcon,
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/outline'
  
  const features = [
    { name: 'Watch', icon: PlayIcon, para: 'Videos are on-demand. Learn at your own pace, binge watch if you like. Watch them on repeat. You decide how best you learn.' },
    { name: 'Practice', icon: UserGroupIcon, para: 'Practice at work or on your own. Practice for real, a real life situation just a little outside of your comfort zone.' },
    { name: 'Share', icon: ShareIcon, para: 'Share what you made or how things went, with people just like you. We will celebrate your wins, offer feedback and support when you try again.' },
  ]
  
  export default function HowItWorks() {
    return (
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          {/*<h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Deploy faster</h2>*/}
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            How it works
          </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Watch a video lesson , practice in real life and share how it went with the community.  
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.para}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  