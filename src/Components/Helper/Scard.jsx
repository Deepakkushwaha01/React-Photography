import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update } from "../../Redux/Slice";

const Scard = ({ value, view }) => {
  const [css, newcss] = useState("");

const navigate=useNavigate();

  useEffect(() => {
    if (value.id == 1 && view==false) {
      newcss("opacity-0 translate-x-[-110%] lg:opacity-0 lg:translate-x-[-110%]");
    }

    if (value.id == 2 && view==false) {
      newcss("opacity-0 translate-x-[110%] lg:opacity-0 lg:translate-y-[-110%]");
    }

    if (value.id == 3 && view==false) {
      newcss("opacity-0 translate-x-[-110%] lg:opacity-0 lg:translate-y-[110%]");
    }

    if (value.id == 4 && view==false) {
      newcss("opacity-0 translate-x-[110%] lg:opacity-0 lg:translate-y-[-110%]");
    }

    if (value.id == 5 && view==false) {
      newcss("opacity-0 translate-x-[-110%] lg:opacity-0 lg:translate-x-[110%]");
    }
  }, [view]);


 useEffect(() => {
    if (value.id == 1 && view==true) {
      newcss("opacity-1 translate-x-[0%] lg:opacity-1 lg:translate-x-[0%]");
    }

    if (value.id == 2 && view==true) {
      newcss("opacity-1 translate-x-[0%] lg:opacity-1 lg:translate-y-[0%]");
    }

    if (value.id == 3 && view==true) {
      newcss("opacity-1 translate-x-[0%] lg:opacity-1 lg:translate-y-[0%]");
    }

    if (value.id == 4 && view==true) {
      newcss("opacity-1 translate-x-[0%] lg:opacity-1 lg:translate-y-[0%]");
    }

    if (value.id == 5 && view==true) {
      newcss("opacity-1 translate-x-[0%] lg:opacity-1 lg:translate-x-[0%]");
    }
  }, [view]); 

const dispatch=useDispatch();
  const navi=(val)=>{
    dispatch(update(val));
navigate('/gallery')

  }

  return (
    <div  className={`flex flex-col gap-y-5 ease duration-[1.5s] ${css}`}>
      <h1 className="text-center w-full text-xl font-family">{value.name}</h1>
      <div onClick={()=>navi(value.name)} className="w-[100%] h-[20rem] cursor-pointer max-w-[16rem] max-h-[25rem] overflow-hidden  rounded-xl shadow-2xl relative   ">
        <figure className="w-full h-full peer">
          <img
            src={value.url}
            alt=""
            className="w-full  h-full object-fill rounded-xl hover:scale-105 ease duration-200 "
          />
        </figure>

        <div className="absolute top-[100%] left-0 grid place-items-center rounded-xl bg-black opacity-50 w-full h-full pointer-events-none peer-hover:top-0">
          <h1 className="text-white text-2xl">{value.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Scard;
