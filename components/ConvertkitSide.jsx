import { useEffect, useRef } from 'react';

export default function ConvertkitSide() {
  const ckFormRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://thequietachievr.ck.page/a9395221a5/index.js';
    script.async = true;
    script.setAttribute('data-uid', 'a9395221a5');
    ckFormRef.current.appendChild(script);

    return () => {
      ckFormRef.current.removeChild(script);
    };
  }, []);
  return (
    <div className="bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
          <h2 className="inline sm:block lg:inline xl:block">Want product news and updates?</h2>{' '}
          <p className="inline sm:block lg:inline xl:block">Sign up for our newsletter.</p>
        </div>        
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
        <aside ref={ckFormRef} />
          <p className="mt-4 text-sm leading-6 text-gray-300">
            We care about your data. Read our{' '}
            <a href="#" className="font-semibold text-white">
              privacy&nbsp;policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  )
}
