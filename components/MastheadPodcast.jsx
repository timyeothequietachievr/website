import { useModal, Modal, IntroVideoModalContents } from "./modal";

export default function MastheadBook() {
  const { open, close, isOpened } = useModal();
  return (
    <section className="py-16 bg-white overflow-hidden lg:py-24">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">podcasts. videos. articles.</span>{' '}
          {/* <span className="block xl:inline">4-week course for</span>{' '} */}
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-800 font-bold sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        watch, listen, online, all free. 
        </p>
      </div>
      <Modal open={open} close={close} isOpened={isOpened}>
        <IntroVideoModalContents ytLink="https://www.youtube.com/embed/_ZUbIJcvTlM?controls=0" />
      </Modal>
    </section>
  )
}
