import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <Div className=" w-[100%] z-50 h-auto md:w-[70%] bg-white">
      <div className="w-full grid place-items-center">
        <h1 className="text-xl">
          <span className="text-[#FFAE00]">Enquiry?</span> Send us a Message
        </h1>
      </div>

      <form className="flex flex-col gap-y-5  mt-7 h-full">
        <div className="relative border rounded-md ">
          <input
            type="text"
            placeholder=" "
            className=" w-full h-9  rounded-md 
    lg:h-12 px-3 py-2
    "
          />
          <label
            htmlFor=""
            className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s] bg-white px-1 lg:top-3"
          >
            Name
          </label>
        </div>

        <div className="relative border rounded-md ">
          <input
            type="text"
            placeholder=" "
            className=" w-full h-9  rounded-md 
    lg:h-12 px-3 py-2
    "
          />
          <label
            htmlFor=""
            className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s] bg-white px-1 lg:top-3"
          >
            Phone No.
          </label>
        </div>

        <div className="relative border rounded-md ">
          <input
            type="text"
            placeholder=" "
            className=" w-full h-9  rounded-md 
    lg:h-12 px-3 py-2
    "
          />
          <label
            htmlFor=""
            className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s] bg-white px-1 lg:top-3"
          >
            Email
          </label>
        </div>

        <div className="relative border rounded-md ">
          <textarea
          rows={4}
            type="text"
            placeholder=" "
            className=" w-full   rounded-md 
     px-3 py-2
    "
          />
          <label
            htmlFor=""
            className="absolute top-1.5 left-3 pointer-events-none opacity-50 ease duration-[1s] bg-white px-1 lg:top-3"
          >
            Message
          </label>
        </div>

        <div className="w-full  grid place-items-center">
          <input
            type="button"
            value="Sumbit"
            className="w-[40%] bg-[#FFAE00] h-10 rounded-md text-white "
          />
        </div>
      </form>
    </Div>
  );
};

const Div = styled.section`
 textarea, input {
    &:focus{
    
        outline: #FFAE00;
    }
    &:focus ~ label {
       
       
      top: -0.75rem;
      opacity: 1;
      color: #FFAE00;
    }

    &:not(:placeholder-shown) ~ label {
      top: -0.75rem;
      opacity: 1;
    }
  }
`;

export default Form;
