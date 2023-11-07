import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Scard from './Helper/Scard'

const Services = () => {

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
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    observer.observe(divRef.current);

    return () => {
  /*     observer.unobserve(divRef.current); */
  if (divRef.current) {
    observer.unobserve(divRef.current);
  }
    };
  }, []);



const Sarr=[
{
  id:1,
  name:"FASHION",
  url:"/images/fashion.jpg",
},
{
  id:2,
  name:"PRODUCTS",
  url:"/images/product.jpg",
},
{
  id:3,
  name:"JEWELLERY",
  url:"/images/jel1.jpg",
},
{
  id:4,
  name:"ARCHITECTURAL",
  url:"/images/art.jpg",
},
{
  id:5,
  name:"Event",
  url:"/images/event.jpg",
}
]

  return (
    <Div ref={divRef} id='services' className='grid place-items-center w-full h-auto py-[10vh] gap-y-14 
    
    lg:before:top-[-20%] before:h-[20%] 
    '>
<div className='coustom-text  w-fit h-20  grid place-items-center'>
<h1 className='text-5xl relative'>Services</h1>
</div>


      <div className='grid grid-cols-1 justify-center items-center  px-5 gap-16 lg:py-8   overflow-hidden
      md:grid-cols-2 md:gap-20
      lg:grid-cols-5  lg:gap-x-6'>

  {
    Sarr.map((val,index)=>{
return <Scard value={val} key={index} view={inViewport}  />
    })
  }

      </div>
    </Div>
  )
}

const Div=styled.section`
  position: relative;
&::before{
  content: '';
  position: absolute;
/*   background:linear-gradient(to top,#fff,transparent) ; */
  background-position: top;
  background-size: contain;
 width: 100%;
  left: 0;
  border: none;

  @media (max-width: 1024px) {
   background: none;
  }

} 

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

.font-family{
  font-family: 'Roboto', sans-serif;
  letter-spacing: 3px;
  font-weight: 600;
}


`



export default Services
