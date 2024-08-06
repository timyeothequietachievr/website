import ReactPlayer from "react-player/lazy";
import { VideoCameraIcon, CalendarIcon, UserCircleIcon, ClockIcon, AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
]

export default function CoursesInclude() {
  return (
    <div className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase"></h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
           Sample videos:
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          <ReactPlayer url="https://youtu.be/s2b4jc0ay4A" className="w-full h-auto my-8 mx-auto" controls={true} />
          <ReactPlayer url="https://youtu.be/Fwrc7yanflc" className="w-full h-auto my-8 mx-auto" controls={true} />
          {/* 3-4hrs of learning, video lessons, weekly video calls, 1 year access to community. */}
          {/* Videos on-demand, weekly office hours, monthly guest speakers, 24/7 community. */} 
          </p>
        </div>
    </div>
    </div>
  )
}
