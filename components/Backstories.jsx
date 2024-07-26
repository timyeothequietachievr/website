import ReactPlayer from "react-player/lazy";
import { useModal, Modal, IntroVideoModalContents } from "./modal";

export default function Backstories() {
  const { open, close, isOpened } = useModal();
  return (
    <section className="py-16 bg-white overflow-hidden lg:py-24">
      {/* Backstory 1 */}
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span id="backstory" className="block xl:inline">Backstory</span>{' '}
          {/* <span className="block text-indigo-600 xl:inline">backstory</span>{' '} */}
        </h1>        
        <p className="mt-3 max-w-md mx-auto text-base text-gray-800 font-bold sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        The story behind the story from The Quiet Achiever book
        </p>
      <ReactPlayer url="https://youtu.be/EssO-JQZU9Q" className="w-full h-auto my-8 mx-auto" controls={true} />
      </div>
      {/* Backstory 2 */}
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
      {/* Backstory 3 */}
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span id="introducingyourself" className="block xl:inline">Chapter 2: Introducing yourself</span>{' '}
          {/* <span className="block text-indigo-600 xl:inline">backstory</span>{' '} */}
        </h1>        
        <p className="mt-3 max-w-md mx-auto text-base text-gray-800 font-bold sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Where did I learn the framework for making small intros?
        </p>
      <ReactPlayer url="https://youtu.be/374iv2LxNb0" className="w-full h-auto my-8 mx-auto" controls={true} />
      </div>
      {/* Backstory 4 */}
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span id="bookbinding" className="block xl:inline">Chapter 3: Small talk</span>{' '}
          {/* <span className="block text-indigo-600 xl:inline">backstory</span>{' '} */}
        </h1>        
        <p className="mt-3 max-w-md mx-auto text-base text-gray-800 font-bold sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Why is food and the weather my go-to topics for small talk?
        </p>
      <ReactPlayer url="https://youtu.be/_ae6iQMrOYk" className="w-full h-auto my-8 mx-auto" controls={true} />
      </div>
      {/* Backstory 5 */}
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span id="publicspeaking" className="block xl:inline">Chapter 5: Public speaking</span>{' '}
          {/* <span className="block text-indigo-600 xl:inline">backstory</span>{' '} */}
        </h1>        
        <p className="mt-3 max-w-md mx-auto text-base text-gray-800 font-bold sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Who is a public speaker I look up to?
        </p>
      <ReactPlayer url="https://youtu.be/E8NBl6ZxWmc" className="w-full h-auto my-8 mx-auto" controls={true} />
      </div>
      {/* Backstory 6 */}
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span id="difficultconversations" className="block xl:inline">Chapter 6: Handling difficult conversations</span>{' '}
          {/* <span className="block text-indigo-600 xl:inline">backstory</span>{' '} */}
        </h1>        
        <p className="mt-3 max-w-md mx-auto text-base text-gray-800 font-bold sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Who did I learn the feedback framework from and why is it better? 
        </p>
      <ReactPlayer url="https://youtu.be/-wPEKFYDIWc" className="w-full h-auto my-8 mx-auto" controls={true} />
      </div>
      {/* Backstory 7 */}
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span id="sayingnopolitely" className="block xl:inline">Chapter 7: How to say no (politely)</span>{' '}
          {/* <span className="block text-indigo-600 xl:inline">backstory</span>{' '} */}
        </h1>        
        <p className="mt-3 max-w-md mx-auto text-base text-gray-800 font-bold sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Dark hairy ball, anyone?
        </p>
      <ReactPlayer url="https://youtu.be/6R_sFqSDf4g" className="w-full h-auto my-8 mx-auto" controls={true} />
      </div>
      {/* Backstory 8 */}
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span id="networking" className="block xl:inline">Chapter 8: Networking</span>{' '}
          {/* <span className="block text-indigo-600 xl:inline">backstory</span>{' '} */}
        </h1>        
        <p className="mt-3 max-w-md mx-auto text-base text-gray-800 font-bold sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        What is it with networking and bathrooms?
        </p>
      <ReactPlayer url="https://youtu.be/hvWE7kK7rkk" className="w-full h-auto my-8 mx-auto" controls={true} />
      </div>
      {/* Backstory 9 */}
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span id="ambivertextrovert" className="block xl:inline">Chapter 9: For the ambiverts and extroverts</span>{' '}
          {/* <span className="block text-indigo-600 xl:inline">backstory</span>{' '} */}
        </h1>        
        <p className="mt-3 max-w-md mx-auto text-base text-gray-800 font-bold sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Just because we are different doesn't mean we can't be friends
        </p>
      <ReactPlayer url="https://youtu.be/qDeKz9K-Zh0" className="w-full h-auto my-8 mx-auto" controls={true} />
      </div>
    </section>
  )
}
