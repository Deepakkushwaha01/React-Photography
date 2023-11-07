import React, { useEffect, useState } from "react";
import Fashion from "./Fashion";
import Product from "./Product";
import Jewell from "./Jewell";
import Arch from "./Arch";
import Event from "./Event";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LargeView from "./View/LargeView";

const MainGallery = () => {
  const slide = useSelector((state) => state.slide);
  const navigate = useNavigate();

  const [change, newchange] = useState();

  useEffect(() => {
    newchange(slide);
  }, [slide]);


/* ---------------------------------------------------------------------------------------------------- */
const [pop,newpop]=useState({});
const view=useSelector(state=>state.view);

useEffect(()=>{
newpop(view)
},[view])



/* ---------------------------------------------------------------------------------------------------- */


/* ---------------------------------- Body Scroll handle----------------------------------------------- */
useEffect(() => {
  const handleBodyScroll = (e) => {
    if (pop) {
      e.preventDefault();
    }
  };

  if (pop) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  window.addEventListener('scroll', handleBodyScroll);

  return () => {
    window.removeEventListener('scroll', handleBodyScroll);
  };
}, [pop]); 

/* ----------------------------------End Body Scroll handle----------------------------------------------- */


  return (
    <Div>
      <div className="w-full h-auto grid place-items-center bg-[#F5F5F5]">
        <figure
          onClick={() => navigate("/")}
          className="mt-4 w-fit h-[7vh] lg:h-[8vh] cursor-pointer ease-in-out duration-[1s] hover:scale-[1.1]"
        >
          <img
            src="/images/antsocial_studio.png"
            alt=""
            className="w-full h-full"
          />
        </figure>
      </div>

      <div className="grid place-items-center bg-[#F5F5F5] pt-5 pb-2 md:pt-10 md:pb-3">
        <ul className="flex text-[0.7rem]  py-3 w-full justify-evenly lg:w-[70%]  font-medium text-[#3D3C42] md:tracking-[1px] md:text-[1.2rem] ">
          <li
            className={`cursor-pointer  hover:before:w-[100%]   under ${
              change == "FASHION" ? "before:w-[100%]" : "before:w-0"
            } `}
            onClick={() => newchange("FASHION")}
          >
            FASHION
          </li>
          <li
            className={`cursor-pointer  hover:before:w-[100%] ${
              change == "PRODUCTS" ? "before:w-[100%]" : "before:w-0"
            } under `}
            onClick={() => newchange("PRODUCTS")}
          >
            PRODUCTS
          </li>
          <li
            className={`cursor-pointer  hover:before:w-[100%] ${
              change == "JEWELLERY" ? "before:w-[100%]" : "before:w-0"
            } under `}
            onClick={() => newchange("JEWELLERY")}
          >
            JEWELLERY
          </li>
          <li
            className={`cursor-pointer  hover:before:w-[100%] ${
              change == "ARCHITECTURAL" ? "before:w-[100%]" : "before:w-0"
            } under `}
            onClick={() => newchange("ARCHITECTURAL")}
          >
            ARCHITECTURAL
          </li>
          <li
            className={`cursor-pointer  hover:before:w-[100%] ${
              change == "Event" ? "before:w-[100%]" : "before:w-0"
            } under `}
            onClick={() => newchange("Event")}
          >
            EVENT
          </li>
        </ul>
      </div>

{pop==""?"":<div className="fixed  top-0 left-0 w-full h-full pointer-event-none">
<LargeView value={pop}/>
</div>}

      <div className="p-[10px]">
        {change == "FASHION" ? (
          <Fashion />
        ) : change == "PRODUCTS" ? (
          <Product />
        ) : change == "JEWELLERY" ? (
          <Jewell />
        ) : change == "ARCHITECTURAL" ? (
          <Arch />
        ) : change == "Event" ? (
          <Event />
        ) : (
          ""
        )}
      </div>
    </Div>
  );
};

const Div = styled.section`
  .under {
    position: relative;
    /*   &:hover::before{
width: 100%;
    } */
    &::before {
      content: "";
      height: 10%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #ebb85e;
      transition: all 0.5s ease-in;
    }
  }
`;
export default MainGallery;
