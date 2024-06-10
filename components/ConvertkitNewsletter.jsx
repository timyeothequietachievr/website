import { useEffect, useRef } from 'react';

export default function ConvertkitNewsletter() {
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
         <aside ref={ckFormRef} /> 
        {/*
        <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
          <h2 className="inline sm:block lg:inline xl:block">Want product news and updates?</h2>{' '}
          <p className="inline sm:block lg:inline xl:block">Sign up for our newsletter.</p>
        </div>        
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <aside ref={ckFormRef} />
          </div>
        </form>*/}
      </div>
    </div>
  )
}
