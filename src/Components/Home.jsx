import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Home = () => {
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
      { threshold: 0.2 } // Adjust the threshold as needed
    );

    observer.observe(divRef.current);

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


const images=[
    {
      url: "/images/Home/1 (1).webp",
    },
    {
      url: "/images/Home/1 (2).webp",
    },
    {
      url: "/images/Home/1 (3).webp",
    },
    {
      url: "/images/Home/1 (4).webp",
    }
]

/* ------------- change photo ----------------------------- */
const [change,newchange]=useState(0);
const [current,newcurrent]=useState(0);

const value=()=>{
  newchange((prevIndex) => (prevIndex + 1));
  newcurrent((prevIndex) => (prevIndex + 1))

}

const reset=()=>{
  newchange(0);
  newcurrent(0);
}


useEffect(()=>{
  const interval = setInterval(() => {
    change<images.length-1 ?
    value():reset();
  }, 3000);

  return () => {
    clearInterval(interval); 
  };

})
/* ---------------------------------------------------------- */

  return (
    <Div
      id="home"
      ref={divRef}
      className="grid grid-rows-2 h-auto lg:h-[100vh] lg:grid-rows-1 lg:grid-cols-2 "
    >
      <div className="w-full h-[50vh] lg:h-[100%] lg:w-[50vw]">
      {  <figure className={`border h-full duration-[1s] transition-all ease-in-out ${change == current ?"opacity-100 visible":"opacity-0 invisible" }`}>
          <img
            /* src="/images/phto3.jpg" */
            src={images[change].url}
            alt=""
            className="w-full h-full   object-fill "
          />
        </figure> }
      </div>

      <div
        className=' flex flex-col items-center text-2xl justify-center h-[50vh] lg:h-[100%] lg:w-[45vw] 
      relative lg:items-end
    
     

       lg:before:content-[""]  lg:before:absolute lg:before:bg-contain  
       lg:before:w-[50%] lg:before:h-[100%] lg:before:left-[-25%]
      '
      >
        <div
          className=" w-[70%] h-full flex flex-col  justify-center items-center gap-y-5  p-5 
md:gap-y-8
lg:gap-y-14
max-[290px]:gap-y-1

"
        >
          <h1 className={`text-[#EBB85E] duration-[1s] ease-in  ${inViewport?"chnage1_2":"change1"} `}>Hello !</h1>

          <div className="overflow-hidden ">
            <h1
              className={`text-4xl 
md:text-7xl
lg:text-[4.5vw] font-bold 
max-[280px]:text-xl

duration-[1s] ease-in  ${inViewport?"chnage2":"change2_1"}

`}
            >
              Photographer
            </h1>
            <h1
              className={`mt-3 text-3xl
md:text-5xl md:mt-4 
lg:text-[3vw]
max-[290px]:text-lg

duration-[1s] ease-in  ${inViewport?"chnage3":"change3_1"}

`}
            >
              & Retoucher
            </h1>
          </div>

 <div className="overflow-hidden w-fit">
          <p
            className={`w-[100%] text-sm   text-center 
md:text-2xl
 lg:text-center lg:text-[1.2vw]
 
 max-[290px]:text-sm
 
 duration-[1s] ease-in-out  ${inViewport?"chnage4":"change4_1"}
 `}
          >
            Based in San Diego, I specialize in
            <br /> various kinds of photography
          </p>
         </div> 

          <button
          onClick={() => scrollToSection("contact")}
            className={`bg-[#EBB85E] w-[80%]  h-12 rounded-md text-white font-semibold tracking-wide text-lg  md:w-[50%] md:h-[13%] lg:h-12

max-[290px]:h-[7vh]
  
duration-[1.5s] ease-in-out  ${inViewport?"chnage5":"change5_1"}
`}
          >
            Contact Us
          </button>
        </div>
      </div>
    </Div>
  );
};

const Div =styled.section`


figure{

  transition: src ease-in-out 0.2s;
}



 /* ----------------------- Hello ---------------------- */
 .change1{
  opacity: 0;
  transform: translateY(-50px);
 }
 
 .chnage1_2{
  opacity: 1;
  transform: translateY(0px);
 }

/* ------------------------------------------------------ */


/* ------------------------ Photography ------------------ */

.change2_1{
  opacity: 0;
  transform: translateY(150px);
 }
 
 .chnage2{
  opacity: 1;
  transform: translateY(0px);
 }

/* ------------------------------------------------------- */


/* ------------------ Retoucher -------------------------- */

.change3_1{
  opacity: 0;
  transform: translateX(-150px);
 }
 
 .chnage3{
  opacity: 1;
  transform: translateX(0px);
 }

/* ------------------------------------------------------ */


/* ------------------ Para -------------------------- */

.change4_1{
  opacity: 0;
  transform: translateY(-50px);
 }
 
 .chnage4{
  opacity: 1;
  transform: translateY(0px);
 }

/* ------------------------------------------------------ */


/* ------------------ Para -------------------------- */

.change5_1{
  opacity: 0;
  transform: translateX(200px);
 }
 
 .chnage5{
  opacity: 1;
  transform: translateX(0px);
 }

/* ------------------------------------------------------ */



`
export default Home;


/* lg:before:bg-[url("./images/patch4.png")] */