import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const About = () => {

  const divRef = useRef(null);
  const [inViewport, setInViewport] = useState(false);
  let [award,newaward]=useState(0);
  let [shoot,newshoot]=useState(0);
let [year,newyear]=useState(0);
let [annual,newannual]=useState(0);


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

useEffect(()=>{

  if(inViewport==true){
  const timer =setInterval(()=>{

    if(award!=22){
      newaward((per)=>per+1);
    }

if(shoot!=156){
  newshoot((per)=>per+1);
}

if(year!=10){
  newyear((per)=>per+1);
}

if(annual!=396){
  newannual((per)=>per+1);
}


  },5);
  return () => {
    clearInterval(timer); // Clear the interval when the component unmounts
  };}
},[award,shoot,year,annual,inViewport])






  return (
    <Div id="about" ref={divRef} className="w-full h-auto flex flex-col gap-y-12 items-center p-5 py-16 ">
      <div className="coustom-text  w-fit h-20  grid place-items-center ">
        <h1 className="text-5xl relative">About Us</h1>
      </div>

      <div>
        <p className="text-center  text-md  md:text-lg">
          Since 2008, I’ve been providing my clients with quality photography
          and retouching services.<br/> Some of my works were awarded on a national
          level. Below are some facts about me.
        </p>
      </div>


<div className=" grid grid-cols-2 mt-5 gap-2 gap-y-20  md:grid-cols-4 ">

<div className="grid place-items-center gap-y-5 " >
    <figure className="w-[30%] max-w-[2.5rem] md:max-w-[16%] ">
        <img src="/images/icons/glass1.png" alt="" />
    </figure>
    <h1 className="text-5xl">{award}</h1>
    <p className="text-lg" >Photography Awards</p>
</div>


<div className="grid place-items-center  gap-y-5 " >
    <figure className="w-[25%] max-w-[2.5rem] md:max-w-[12%]">
        <img src="/images/icons/camera21.png" alt="" />
    </figure>
    <h1 className="text-5xl">{shoot}</h1>
    <p className="text-lg">Photo Shoots</p>
</div>

<div className="grid place-items-center gap-y-5 " >
    <figure className="w-[25%] max-w-[2.5rem] md:max-w-[12%]">
        <img src="/images/icons/camera1.png" alt="" />
    </figure>
    <h1 className="text-5xl">{year}</h1>
    <p className="text-lg">Years of Experience</p>
</div>

<div className="grid place-items-center gap-y-5 " >
    <figure className="w-[25%] max-w-[2.5rem] md:max-w-[12%]">
        <img src="/images/icons/photo2.png" alt="" />
    </figure>
    <h1 className="text-5xl">{annual}</h1>
    <p className="text-lg">Annual Clients</p>
</div>


</div>

    </Div>
  );
};

const Div=styled.section`
    
    .coustom-text{
  font-family: 'Croissant One', cursive;
position: relative;
  &::before{
  content: '';
  position: absolute;
background-image: url('./images/backpatch.png');
background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
 width: 100%;
 height: 100%;
 margin: 1px;
  left: 0;
  border: none;
}
}



`



export default About;
