import React from "react";
import { useDispatch } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styled from "styled-components";
import { viewSet } from "../../Redux/Slice";

const Arch = () => {
  const image = [
    {
      url: "/images/arth/3 (1).webp",
    },
    {
      url: "/images/arth/3 (2).webp",
    },
    {
      url: "/images/arth/3 (3).webp",
    },
    {
      url: "/images/arth/3 (4).webp",
    },
    {
      url: "/images/arth/3 (5).webp",
    },
    {
      url: "/images/arth/3 (6).webp",
    },
    {
      url: "/images/arth/3 (7).webp",
    },
    {
      url: "/images/arth/3 (8).webp",
    },
    {
      url: "/images/arth/3 (9).webp",
    },
    {
      url: "/images/arth/3 (10).webp",
    },
    {
      url: "/images/arth/3 (11).webp",
    },
    {
      url: "/images/arth/3 (12).webp",
    },
    {
      url: "/images/arth/3 (13).webp",
    },
   {
      url: "/images/arth/3 (14).webp",
    }, 
    {
      url: "/images/arth/3 (15).webp",
    }, 
    {
      url: "/images/arth/3 (16).webp",
    }, 
    {
      url: "/images/arth/3 (17).webp",
    },
    {
      url: "/images/arth/3 (18).webp",
    },
    {
      url: "/images/arth/3 (19).webp",
    },
    {
      url: "/images/arth/3 (20).webp",
    }, 
  ];

  const dispatch=useDispatch();


  const allset=async({image,index})=>{
    await dispatch(viewSet({image,index}));
    
  
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

export default Arch;
