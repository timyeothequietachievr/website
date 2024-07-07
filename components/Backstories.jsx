import ReactPlayer from "react-player/lazy";
import { useModal, Modal, IntroVideoModalContents } from "./modal";

export default function Backstories() {
  const { open, close, isOpened } = useModal();
  return (
    <section className="py-16 bg-white overflow-hidden lg:py-24">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span id="bookcover" className="block xl:inline">Book cover</span>{' '}
          {/* <span className="block text-indigo-600 xl:inline">backstory</span>{' '} */}
        </h1>        
        <p className="mt-3 max-w-md mx-auto text-base text-gray-800 font-bold sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        How did we design the book cover? Why the headphones? And what went into designing the eyes 👀  
        </p>
      <ReactPlayer url="https://www.youtube.com/watch?v=_ZUbIJcvTlM" className="w-full h-auto my-8 mx-auto" controls={true} />
      </div>
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span id="bookbinding" className="block xl:inline">Bookbinding</span>{' '}
          {/* <span className="block text-indigo-600 xl:inline">backstory</span>{' '} */}
        </h1>        
        <p className="mt-3 max-w-md mx-auto text-base text-gray-800 font-bold sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        bookbinding
        </p>
      <ReactPlayer url="https://www.youtube.com/watch?v=_ZUbIJcvTlM" className="w-full h-auto my-8 mx-auto" controls={true} />
      </div>
    </section>
  )
}
