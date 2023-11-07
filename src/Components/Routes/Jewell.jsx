import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styled from "styled-components";
import { viewSet } from "../../Redux/Slice";
import { useDispatch } from "react-redux";

const Jewell = () => {
  const image = [
    {
      url: "/images/jewellry/2 (1).webp",
    },
    {
      url: "/images/jewellry/2 (2).webp",
    },
    {
      url: "/images/jewellry/2 (3).webp",
    },
    {
      url: "/images/jewellry/2 (4).webp",
    },
    {
      url: "/images/jewellry/2 (5).webp",
    },
    {
      url: "/images/jewellry/2 (6).webp",
    },
    {
      url: "/images/jewellry/2 (7).webp",
    },
    {
      url: "/images/jewellry/2 (8).webp",
    },
    {
      url: "/images/jewellry/2 (9).webp",
    },
    {
      url: "/images/jewellry/2 (10).webp",
    },
    {
      url: "/images/jewellry/2 (11).webp",
    },
    {
      url: "/images/jewellry/2 (12).webp",
    },
    {
      url: "/images/jewellry/2 (13).webp",
    },
   {
      url: "/images/jewellry/2 (14).webp",
    }, 
    {
      url: "/images/jewellry/2 (15).webp",
    }, 
    {
      url: "/images/jewellry/2 (16).webp",
    }, 
    {
      url: "/images/jewellry/2 (17).webp",
    },
    {
      url: "/images/jewellry/2 (18).webp",
    },
    {
      url: "/images/jewellry/2 (19).webp",
    },
    {
      url: "/images/jewellry/2 (20).webp",
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

export default Jewell;
