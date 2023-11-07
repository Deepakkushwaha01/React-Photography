import React from 'react'

const HomeCard = ({value}) => {
  return (
    <div className='w-full h-[100%] '>
      <figure className='w-[100vw] lg:w-[100vw] h-full'>
      <img src={value.url} alt="" className='w-full h-full object-fill ' />
      </figure>
      
    </div>
  )
}

export default HomeCard
