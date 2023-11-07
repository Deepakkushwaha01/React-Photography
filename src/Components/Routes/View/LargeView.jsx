import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { viewDel } from '../../../Redux/Slice';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const LargeView = ({value}) => {

    const {image,index}=value;
    const [indexs,newindexs]=useState(0);
 console.log(value)

   useEffect(()=>{
    if(index){
        newindexs(index);
    }
    
   },[])

  console.log(indexs)
/* ----------------------------------------close Popup---------------------------------------------------- */
const dispatch=useDispatch();
const del=()=>{
dispatch(viewDel());
}
/* ----------------------------------------End close Popup---------------------------------------------------- */

/* ---------------------------------------- Set change images ------------------------------------------------- */
const per=()=>{
if(indexs>0){
    newindexs(indexs-1);

}
}

const next=()=>{
if(indexs<image.length-1){
    newindexs(indexs+1);
}

}

/* ---------------------------------------- End change images ------------------------------------------------- */



return (
    <Div className='relative w-full h-screen grid place-items-center'>
      <img src={image ? image[indexs].url : ""} alt="" className='w-[70vw] h-[80vh] object-contain md:w-[80vw]'/>

<div onClick={()=>del()} className='absolute top-[1vh] right-[1vw]  lg:right-[5vw]'>
    <IconButton >
<CloseIcon sx={{color:"white",fontSize:"2rem"}}/>
    </IconButton>
</div>


<div onClick={()=>per()} className='absolute top-[50%] left-[0vw]   translate-y-[-50%]'>
<IconButton >
<ArrowBackIosIcon sx={{color:"white",fontSize:"2rem"}}/>
    </IconButton>  
</div>

<div onClick={()=>next()} className='absolute top-[50%] right-[0vw] translate-y-[-50%]'>
<IconButton >
<ArrowForwardIosIcon sx={{color:"white",fontSize:"2rem"}}/>
    </IconButton>  
</div>

    </Div>
  )
}

const Div=styled.section`
background-color: rgba(0,0,0,0.92);
backdrop-filter: blur(20px);
`

export default LargeView
