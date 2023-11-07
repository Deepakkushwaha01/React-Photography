import { Divider, IconButton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';
import Freq from "./Helper/Freq";

const Frequntly = () => {

    let [open,newopen]=useState(false)
    let [open2,newopen2]=useState(false)
    let [open3,newopen3]=useState(false)
    let [open4,newopen4]=useState(false)

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
        { threshold: 0.6 } // Adjust the threshold as needed
      );
  
      observer.observe(divRef.current);
  
      return () => {
        if (divRef.current) {
          observer.unobserve(divRef.current);
        }
      };
    }, []); 




  return (
    <Div ref={divRef} className="h-auto py-20 gap-14  w-full flex flex-col  justify-center items-center lg:gap-20 ">
      <div className="coustom-text  w-fit h-20 grid place-items-center">
        <h1 className="text-xl relative
        
        lg:text-5xl 
        ">Frequently Asked Questions</h1>
      </div>

      <div className="grid grid-cols-1 gap-10  w-full lg:grid-cols-2 lg:px-[5rem]">
        {/* ------------------------------------------------Question---------------------------------------------------------- */}
        <div className=" flex flex-col items-center justify-center w-[100%] ">
           <Divider />
         
          <div className="p-3 w-[80%]  ">

            <div className="flex  justify-between items-center relative  ">
              <h1 className="text-lg lg:text-2xl">Do you provide any scripts with your templates?</h1>
              <div onClick={()=>newopen(!open)} className="ease-in duration-[2s]" >
              <IconButton>
              {open==false?<AddIcon/>:<RemoveIcon sx={{color:"#EBB85E"}}/>}
              </IconButton></div>
            </div>
          
            <div className={` py-5 px-1
            
            ${open!=true?" hidden":"block"} text-justify overflow-hidden w-[90%]   `}>
                <p>
              Our templates do not include any additional scripts. Newsletter
              subscriptions, search fields, forums, image galleries (in HTML
              versions of Flash products) are inactive. Basic scripts can be
              easily added at www.zemez.io If you are not sure that the element
              you’re interested in is active please contact our Support Chat for
              clarification.
              </p>
            </div>
                   </div>

               <Divider sx={{width:"80%",height:"2px"}} /> 

                   <div className="p-3 w-[80%]  ">

<div className="flex  justify-between items-center ">
  <h1 className="text-lg lg:text-2xl">Do you provide any scripts with your templates?</h1>
  <div onClick={()=>newopen2(!open2)} className="ease-in duration-[2s]" >
  <IconButton>
  {open2==false?<AddIcon/>:<RemoveIcon sx={{color:"#EBB85E"}}/>}
  </IconButton></div>
</div>

<div className={` py-5 px-2 ${open2!=true?"hidden":"block"} text-justify w-[90%]`}>
    <p>
  Our templates do not include any additional scripts. Newsletter
  subscriptions, search fields, forums, image galleries (in HTML
  versions of Flash products) are inactive. Basic scripts can be
  easily added at www.zemez.io If you are not sure that the element
  you’re interested in is active please contact our Support Chat for
  clarification.
  </p>
</div>
       </div>

       <Divider sx={{width:"80%",height:"2px"}} /> 

       <div className="p-3 w-[80%] ">

<div className="flex  justify-between items-center ">
  <h1 className="text-lg lg:text-2xl">Do you provide any scripts with your templates?</h1>
  <div onClick={()=>newopen3(!open3)} className="ease-in duration-[2s]" >
  <IconButton>
  {open3==false?<AddIcon/>:<RemoveIcon sx={{color:"#EBB85E"}}   />}
  </IconButton></div>
</div>

<div className={` py-5 px-2  ${open3!=true?"hidden":"block"} text-justify w-[90%] `}>
    <p>
  Our templates do not include any additional scripts. Newsletter
  subscriptions, search fields, forums, image galleries (in HTML
  versions of Flash products) are inactive. Basic scripts can be
  easily added at www.zemez.io If you are not sure that the element
  you’re interested in is active please contact our Support Chat for
  clarification.
  </p>
</div>
       </div>

       <Divider sx={{width:"80%",height:"2px"}} /> 


        </div>
        {/* ------------------------------------------------- End ----------------------------------------------------------- */}

        <div>
            <Freq view={inViewport}/>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.section`
  .coustom-text {
    font-family: "Croissant One", cursive;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      background-image: url("./images/backpatch.png");
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
`;

export default Frequntly;
