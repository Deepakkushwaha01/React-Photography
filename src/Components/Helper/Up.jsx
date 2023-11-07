
import React from 'react'
import styled from 'styled-components'

window.addEventListener('scroll',()=>{
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

})



const Up = () => {
  return (
    <Div className='w-[4rem] h-[4rem] fixed bottom-[4vh] right-[2vw] grid place-items-center rounded-full border-2  z-50'>
      <div>98%</div>
    </Div>
  )
}

const Div=styled.section`
    


`


export default Up
