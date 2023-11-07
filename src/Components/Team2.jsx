import React from "react";
import styled from "styled-components";
import Crad from "./Helper/Crad";

const Team2 = () => {
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

  return (
    <Div className="h-screen w-full grid place-items-center border">
      <div className="coustom-text  w-fit h-20  grid place-items-center">
        <h1 className="text-5xl relative">Team</h1>
      </div>


<div className="border w-[100vw] h-full flex   ">
    {
        arr.map((val,index)=>{
            return <Crad value={val} key={index}/>
        })
    }

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

export default Team2;
