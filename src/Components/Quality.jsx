import React, { useEffect, useRef, useState } from 'react'

const Quality = () => {

  const divRef = useRef(null);
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewport(true);
          } else {
            setInViewport(false);
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    observer.observe(divRef.current);

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);



  return (
    <div ref={divRef} className='bg-[#2C2C2C] w-full h-auto flex flex-col items-center justify-center gap-8 p-10 overflow-hidden
    
    md:flex-row
    '>
      <h1 className={`text-white font-bold text-lg ease duration-[1s] ${inViewport?"opacity-1 translate-y-[0%]":"opacity-0 translate-y-[-200%]"}
      md:text-2xl
      lg:text-3xl
      `}>Looking for <span className='italic'>Quality Photography?</span></h1>

<div className={`uppercase w-[80%] max-w-[20rem] h-14 rounded-md bg-[#EBB85E] text-white 
md:max-w-[12rem] overflow-hidden hover:bg-[#f0c677]   ease duration-[1s]

${inViewport?"opacity-1 translate-y-[0%]":"opacity-0 translate-y-[200%]"}

`}>
    <div className='translate-y-[0%] hover:translate-y-[-50%] ease-in-out duration-200'>
        <div className='h-14 grid place-items-center font-bold tracking-widest'>Get in touch</div>
        <div className=' h-14 grid place-items-center text-black font-bold tracking-widest'>Get in touch</div> 
    </div>
    
    </div>

    </div>
  )
}

export default Quality
