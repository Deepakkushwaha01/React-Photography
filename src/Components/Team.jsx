import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Crad from "./Helper/Crad";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";

const Team = () => {
  const arr = [
    {
      url: "/images/e1.jpg",
      name: "Amit",
      post: "Photographer",
      discription: "",
    },
    {
      url: "/images/e1.jpg",
      name: "saurabh",
      post: "Photographer",
      discription: "",
    },
    {
      url: "/images/e1.jpg",
      name: "unknown",
      post: "Photographer",
      discription: "",
    },
  ];

  let myRef=useRef(null);
let slide=useRef(null);



const leftflow=()=>{
  if(myRef){
 
     myRef.current.scrollLeft=myRef.current.scrollLeft-slide.current.clientWidth; 
  }
}


const rightflow=()=>{
  if(myRef){

       myRef.current.scrollLeft=myRef.current.scrollLeft+slide.current.clientWidth; 
    }
  
}


  return (
    <Div id="team"  className="h-auto w-full bg-[#F5F6FA] flex flex-col items-center gap-y-10 py-14 ">
      <div className="coustom-text  w-fit h-20  grid place-items-center">
        <h1 className="text-5xl relative">Team</h1>
      </div>

      <div className="flex  justify-center items-center w-full p-2 gap-x-3 duration-500 ease   h-fit lg:w-[70vw]  ">
      
        <div onClick={()=>leftflow()} className="border w-fit h-fit bg-white rounded-full md:hidden">
          <IconButton sx={{}}>
            <ArrowBackIosIcon />
          </IconButton>
        </div>
        
        <div ref={myRef}  className=" w-auto h-fit flex overflow-hidden  md:gap-8 lg:gap-12 duration-100 ease ">

        {
arr.map((val,index)=>{

  return <div key={index} ref={slide} className="w-full   py-3 flex justify-center md:w-fit"><Crad value={val} key={index}/></div>
})
}

        </div>

        <div onClick={()=>rightflow()} className="border w-fit h-fit bg-white rounded-full md:hidden">
          <IconButton>
            <ArrowForwardIosIcon />
          </IconButton>
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
export default Team;
