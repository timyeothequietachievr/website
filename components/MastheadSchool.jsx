import { useModal, Modal, IntroVideoModalContents } from "./modal";

export default function MastheadSchool() {
  const { open, close, isOpened } = useModal();
  return (
    <section className="py-16 bg-white overflow-hidden lg:py-24">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">the</span>{' '}
          {/* <span className="block xl:inline">4-week course for</span>{' '} */}
          <span className="block text-indigo-600 xl:inline">quiet leadership</span>{' '}
          <span className="block xl:inline">school</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-800 font-bold sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        get impact at work without pretending to be extroverts.
        </p>
        <div className="mt-5 px-4 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="#pricing"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              data-event-category="purchase"
              data-event-action="buy_now_click"
              data-event-label="masthead cta"
            >
              Buy Now
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <button
              type="button"
              onClick={open}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              data-event-category="education"
              data-event-action="watch_now_click"
              data-event-label="masthead cta"
            >
              ▶️ Watch Intro
            </button>
          </div>
        </div>
      </div>
      <Modal open={open} close={close} isOpened={isOpened}>
        <IntroVideoModalContents ytLink="https://www.youtube.com/embed/_ZUbIJcvTlM?controls=0" />
      </Modal>
    </section>
  )
}
