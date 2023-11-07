import React, { useEffect, useRef, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import Form from "./Helper/Form";

const Contact = () => {
  const divRef = useRef(null);
  const [inViewport, setInViewport] = useState(false);
const[formvisible,newformvisible]=useState("top-[100%]");
const [hiden,newhiden]=useState('');
const[manpos,newmanpos]=useState('translate-x-[0%]')
const[sun,newsun]=useState('top-[100%]')

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


  useEffect(()=>{
    if(inViewport){
        if(formvisible=='top-[100%]'){
        newsun("top-0")
    }
    if(formvisible=='top-[0%]'){
        newsun('top-[100%] ')
    }
    }
    else{
       
        newsun("top-[100%]")
        newformvisible("top-[100%]");
        newmanpos("translate-x-[0%]");
        newhiden("")
    }
  },[inViewport,formvisible])


const hide=()=>{
    newhiden("hidden")
    newsun('top-[100%]')
    newmanpos('translate-x-[100%]')
    newformvisible("top-[0%]")
}


console.log(divRef)

  return (
    <div
    id="contact"
      ref={divRef}
      className="w-full h-auto min-h-[100vh] max-h-fit grid place-items-center  "
    >
      <div
        className="w-[90vw] shadow-lg h-auto rounded-md grid grid-rows-2 overflow-hidden
      
      lg:grid-cols-2 lg:grid-rows-1 lg:w-[80vw]
      "
      >
        <div className="w-full h-auto bg-[#FFAE00] flex flex-col gap-y-10 text-white py-5 px-3">
          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "2px",
            }}
            className="font-semibold uppercase text-2xl 
            md:text-4xl
            
            "
          >
            Let's Get In touch
          </h1>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "1px",
            }}
            className="text-justify text-sm
            md:text-base
            
            "
          >
            Ready to start your digital journey with us?
            <br /> Reach out today and let's start the conversation.
          </p>

          <div className="grid grid-rows-3 gap-y-4">
            <div className="flex gap-3 h-fit">
              <LocationOnIcon sx={{ color: "white" }} />
              <p
                className="
              md:text-base
              "
              >
                B8 Sector 61 Noida 201301
              </p>
            </div>

            <div className="flex gap-3">
              <CallIcon sx={{ color: "white" }} />
              <p className="md:text-lg">1-800-1234-678</p>
            </div>

            <div className="flex gap-3">
              <MailIcon sx={{ color: "white" }} />
              <p className="md:text-base">media.antsocial@gmail.com</p>
            </div>
          </div>

<div>
<div></div>
<div></div>
<div></div>
</div>


        </div>
        {/* -------------------------------- Second ------------------------------------------------------ */}
        <div className="grid w-full place-items-center min-h-[60vh] lg:min-h-[80vh]  relative">
          <div className={`w-fit  flex-col flex items-center justify-start relative h-fit overflow-hidden `}>
            <img
             
              className={` z-10 w-[38%] h-auto ease-in-out duration-[2s] absolute ${sun}`}
              src="/images/sun1.png"
              alt=""
            />
            <img
              className={` z-20 w-[90%] h-auto translate-y-[0%] ease duration-[1s] ${manpos} `}
              src="/images/man1.png"
              alt=""
            />
          </div>
          <div className="w-full grid place-items-center">
            <button 
            onClick={()=>hide()}
            className={`bg-white border border-black w-[30%] h-10 rounded-md hover:bg-[#FFAE00] hover:border-none
             hover:text-white
             ${hiden}
             `}>
              Enquiry
            </button>
          </div>
          <div className={`w-full h-full grid place-items-center px-2 py-10 absolute ease-in-out duration-[1s] ${formvisible}`}>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
