import { useEffect, useRef } from 'react';

export default function SignupBookTellYourFriends() {
  const ckFormRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://thequietachievr.ck.page/0a5505f733/index.js';
    script.async = true;
    script.setAttribute('data-uid', '0a5505f733');
    ckFormRef.current.appendChild(script);

    return () => {
      ckFormRef.current.removeChild(script);
    };
  }, []);
  return (
    <div className="bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
          <h2 id="tellyourfriends"vclassName="inline sm:block lg:inline xl:block">No Amazon account? Leave a review I can use on my website</h2>{' '}
          <p className="mx-auto mt-2 max-w-xl text-left text-lg leading-8 text-gray-300"></p> 
          {/* <p className="inline sm:block lg:inline xl:block">It's free.</p> */}
        </div>        
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
        <aside ref={ckFormRef} />
          <p className="mt-4 text-sm leading-6 text-gray-300">
            {/* I respect your privacy. No spam.
            {' '}
            <a href="#" className="font-semibold text-white">
              privacy&nbsp;policy
            </a>
            .
            */}
          </p>
        </form>
      </div>
    </div>
  )
}
