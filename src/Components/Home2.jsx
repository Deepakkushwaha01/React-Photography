import React from 'react'
import HomeCard from './Helper/HomeCard'
import { useRef } from 'react'
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Home2 = () => {
    const divref=useRef();

const img=[
    {
        url:"/images/slide/2.jpg"
    },
    {
        url:"/images/slide/1.jpg"
    },
    {
        url:"/images/slide/3 (4).webp"
    },
    {
        url:"/images/slide/jel1.jpg"
    },
]


const left=()=>{
console.log(divref);
divref.current.scrollLeft=divref.current.scrollLeft-divref.current.offsetWidth ;
}
const right=()=>{
    console.log(divref);
    divref.current.scrollLeft=divref.current.scrollLeft+divref.current.clientWidth+1;
    }
  return (
    <>
    <div ref={divref}  className='flex w-full overflow-hidden h-[100vh] relative'>
       
         {
            img.map((val,index)=>{
                return <HomeCard value={val} key={index}/>
            })
        } 
        


    </div>


    <button onClick={left} className='absolute top-[50%] left-0 translate-y-[-50%] w-10 h-10 rounded-full '>
            <IconButton>
<ArrowBackIcon/>
            </IconButton>
        </button>

        <button onClick={right} className='absolute top-[50%] right-0 translate-y-[-50%] w-10 h-10 rounded-full '>
            <IconButton>
<ArrowForwardIcon/>
            </IconButton>
        </button>
    </>
  )
}

export default Home2
