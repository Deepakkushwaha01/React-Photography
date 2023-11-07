import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  let curr = useRef(0);
  const [cssClass, setCssClass] = useState("");
  const [navfixed, newnavfixed] = useState("top-0");


  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 150) {
        setCssClass('bg-white');
      } else {
        setCssClass('');
      }

      if (scrollPosition > 250) {
        if (curr.current < scrollPosition) {
          newnavfixed("-top-full ");
        } else {
          newnavfixed("top-0");
        }
      }

      // Update the scrollY state
      curr.current = scrollPosition;
    }

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex flex-col  items-center z-50 ${navfixed} w-[100vw]  fixed duration-[1s] ease-in-out ${cssClass}
    py-3
    md:flex-row md:justify-between md:px-20
    
    lg:justify-between  `}
    >
      <figure
        className={`w-[100%] max-w-[8rem] grid duration-[2s] ease   place-items-center md:min-w-[8rem]`}
      >
        <img src="/images/antsocial_studio.png" alt="" />
        {/*     <h1 className=''>Studio</h1> */}
      </figure>

      <ul
        className="flex text-black justify-evenly text-base px-5  w-full items-center h-[7vh]
    
    md:h-[auto] md:gap-x-10 md:w-[auto] 
    
    lg:h-[4rem]
    "
      >  {/* scroll to fuction is func declare in starting */}
        <li className="cursor-pointer" onClick={() => scrollToSection("home")}>Home</li>
        <li className="cursor-pointer" onClick={() => scrollToSection("services")}>Services</li>
        <li className="cursor-pointer" onClick={() => scrollToSection("about")}>about</li>
        <li  className="cursor-pointer" onClick={() => scrollToSection("team")}>team</li>
{/*         <li>
          <div className="bg-[#EBB85E] w-full py-2 px-4 h-10 rounded-md overflow-hidden">
<div className="translate-y-[1%] hover:translate-y-[-55%] ease-in duration-100">
  <div className="text-white">Contact Us</div>
  <div>Contact Us</div>
</div>

          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
