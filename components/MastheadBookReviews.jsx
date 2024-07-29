import ReactPlayer from "react-player/lazy";
import { useModal, Modal, IntroVideoModalContents } from "./modal";

export default function MastheadBook() {
  const { open, close, isOpened } = useModal();
  return (
    <section className="py-16 bg-white overflow-hidden lg:py-24">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">book</span>{' '}
          {/* <span className="block xl:inline">4-week course for</span>{' '} */}
          <span className="block text-indigo-600 xl:inline">reviews</span>{' '}
          {/* <span className="block xl:inline">to have</span>{' '} */}
          {/* <span className="block text-indigo-600 xl:inline">impact at work</span> */}
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-800 font-bold sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Your review will help the book reach more quiet achievers around the world. Thank you for taking the time! 
        </p>
        {/*
        <div className="mt-5 px-4 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div>
            <a              
              href="#pricing"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              data-event-category="purchase"
              data-event-action="click_buy_now"
              data-event-label="cta_book_masthead"
            >
              Pre-order Now
            </a>
          </div>
        </div> */}
        {/*}
        <div className="mt-5 px-4 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div>
             <aside ref={ckFormRef} /> 
          <a              
              href="https://forms.gle/VAN6n5r8qFhFEsKm7"
              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              data-event-category="email"
              data-event-action="click_signup_now"
              data-event-label="cta_book_masthead"
            >
              Get notified
            </a>      
          </div> 
          
          { /* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <button
              type="button"
              onClick={open}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              data-event-category="education"
              data-event-action="click_watch_now"
              data-event-label="cta_masthead_book"
            >
              ▶️ Watch intro
            </button>
          </div> 
        </div>
        */}
        {/* <ReactPlayer url="https://www.youtube.com/watch?v=_ZUbIJcvTlM" className="w-full h-auto my-8 mx-auto" controls={true} /> */}

      </div>
      <Modal open={open} close={close} isOpened={isOpened}>
        <IntroVideoModalContents ytLink="https://www.youtube.com/embed/_ZUbIJcvTlM?controls=0" />
      </Modal>
    </section>
  )
}
