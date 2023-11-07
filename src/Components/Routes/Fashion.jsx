import React from "react";
import { useDispatch } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styled from "styled-components";
import { viewSet } from "../../Redux/Slice";
import { useNavigate } from "react-router-dom";

const Fashion = () => {
  const image = [
    {
      url: "/images/photo/1.webp",
    },
    {
      url: "/images/photo/2.webp",
    },
    {
      url: "/images/photo/3.webp",
    },
    {
      url: "/images/photo/4.webp",
    },
    {
      url: "/images/photo/5.webp",
    },
    {
      url: "/images/photo/6.webp",
    },
    {
      url: "/images/photo/7.webp",
    },
    {
      url: "/images/photo/8.webp",
    },
    {
      url: "/images/photo/9.webp",
    },
    {
      url: "/images/photo/10.webp",
    },
    {
      url: "/images/photo/11.webp",
    },
    {
      url: "/images/photo/12.webp",
    },
    {
      url: "/images/photo/13.webp",
    },
   {
      url: "/images/photo/14.webp",
    }, 
    {
      url: "/images/photo/15.webp",
    }, 
    {
      url: "/images/photo/16.webp",
    }, 
    {
      url: "/images/photo/17.webp",
    },
    {
      url: "/images/photo/18.webp",
    },
    {
      url: "/images/photo/19.webp",
    },
    {
      url: "/images/photo/20.webp",
    }, 
  ];

const dispatch=useDispatch();
const navigate=useNavigate();

  const allset=async({image,index})=>{
await dispatch(viewSet({image,index}));

/* console.log(index) */
  }

  return (
    <Div className="">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
        <Masonry gutter="10px">
          {image.map((val, index) => {
            return (
              <div key={index} onClick={()=>allset({image,index})} className=" image-wrapper">
                <img
                  src={val.url}
                  alt=""
                  className="object-fill w-full h-full "
                />
              </div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </Div>
  );
};

const Div = styled.section`
  
`;

export default Fashion;
