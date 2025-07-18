import { useModal, Modal, IntroVideoModalContents } from "./modal";

export default function MastheadEmailOptOut() {
  const { open, close, isOpened } = useModal();
  return (
    <section className="py-16 bg-white overflow-hidden lg:py-24">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          {/* <span className="block xl:inline">the quiet achiever</span>{' '} */}
          {/* <span className="block xl:inline">4-week course for</span>{' '} */}
          <span className="block text-indigo-600 xl:inline">You have opted in</span>{' '}
          {/* <span className="block xl:inline">to have</span>{' '} */}
          {/* <span className="block text-indigo-600 xl:inline">impact at work</span> */}
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-800 font-bold sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        All good! Your preference has been noted. 
        </p>
        <div className="mt-5 px-4 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="/book"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              data-event-category="content"
              data-event-action="click_emailoptout"
              data-event-label="cta_emailoptout_masthead"
            >
              Back to homepage
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
          </div> */}
        </div>
      </div>
      <Modal open={open} close={close} isOpened={isOpened}>
        <IntroVideoModalContents ytLink="https://www.youtube.com/embed/_ZUbIJcvTlM?controls=0" />
      </Modal>
    </section>
  )
}
