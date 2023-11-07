import React from 'react'
import styled from 'styled-components'

const Crad = ({value}) => {
  
  return (
    <Div className='w-[80vw] max-w-[20rem] md:max-w-[15rem] h-[60vh] max-h-[20rem]  duration-500  bg-white rounded-md overflow-hidden
    peer
  
    '>
   <figure className='w-[100%] h-[70%] scale-105 peer-hover:scale-100 '>
    <img src="/images/e1.jpg" alt=""  className='w-full h-full object-cover object-top   ' />
   </figure>

   <div className="flex flex-col w-full h-[30%] justify-center items-center gap-y-3 ">
        <h1 className='costom-font text-2xl '>{value.name}</h1>
        <h1 className='font-bold text-lg text-[#CBCBCB] '>{value.post}</h1>
       
      </div>


    </Div>
  )
}

const Div=styled.section`

transform: translate3d(0,0, 10rem);
&:hover{
    transform: translate3d(0,0.5rem,1rem);
}

   
.costom-font{
    font-family: 'Roboto', sans-serif;
}   

`



export default Crad
