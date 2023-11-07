import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const Freq = ({view}) => {
    let [count,newcount]=useState(0);
    let [count2,newcount2]=useState(0);
    let [count3,newcount3]=useState(0);
    let [count4,newcount4]=useState(0);



useEffect(()=>{

if(view==true){
    const interval=setInterval(()=>{

if(count!=90){
newcount((per)=>per+1);
}

if(count2!=95){
    newcount2((per)=>per+1);
    }    

    if(count3!=100){
        newcount3((per)=>per+1);
        }    

        if(count4!=85){
            newcount4((per)=>per+1);
            }    


    },50);



   

return () => {
    clearInterval(interval); // Clear the interval when the component unmounts
  };} 

},[view,count,count2,count3,count4])








  return (
    <Div className='p-8 grid gap-6'>
      
<div className='grid gap-3'>
    <div className='w-full flex justify-between'>
        <h1>Photography</h1>
        <h1>{count}%</h1>
    </div>

<div className='w-full h-[5px] bg-slate-100 rounded-md
'>
    <div style={{width:`${count}%`}} className={` ease duration-100 bg-sky-500 h-full rounded-md`}></div>
</div>

</div>


<div className='grid gap-3'>
    <div className='w-full flex justify-between'>
        <h1>Creativity</h1>
        <h1>{count2}%</h1>
    </div>

<div className='w-full h-[5px] bg-slate-100 rounded-md
'>
    <div style={{width:`${count2}%`}} className='ease duration-100 bg-red-400 h-full rounded-md'></div>
</div>

</div>



<div className='grid gap-3'>
    <div className='w-full flex justify-between'>
        <h1>Retouching</h1>
        <h1>{count3}%</h1>
    </div>

<div className='w-full h-[5px] bg-slate-100 rounded-md
'>
    <div style={{width:`${count3}%`}} className='ease duration-100 w-[100%] bg-yellow-200 h-full rounded-md'></div>
</div>

</div>


<div className='grid gap-3'>
    <div className='w-full flex justify-between'>
        <h1>Communication</h1>
        <h1>{count4}%</h1>
    </div>

<div className='w-full h-[5px] bg-slate-100 rounded-md
'>
    <div style={{width:`${count4}%`}} className='ease duration-100 w-[85%] bg-green-300 h-full rounded-md'></div>
</div>

</div>





    </Div>
  )
}




const Div=styled.section`
    



`



export default Freq
