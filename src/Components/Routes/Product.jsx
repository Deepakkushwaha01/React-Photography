import React from "react";
import { useDispatch } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styled from "styled-components";
import { viewSet } from "../../Redux/Slice";

const Product = () => {
  const image = [
    {
      url: "/images/product/1 (1).webp",
    },
    {
      url: "/images/product/1 (2).webp",
    },
    {
      url: "/images/product/1 (3).webp",
    },
    {
      url: "/images/product/1 (4).webp",
    },
    {
      url: "/images/product/1 (5).webp",
    },
    {
      url: "/images/product/1 (6).webp",
    },
    {
      url: "/images/product/1 (7).webp",
    },
    {
      url: "/images/product/1 (8).webp",
    },
    {
      url: "/images/product/1 (9).webp",
    },
    {
      url: "/images/product/1 (10).webp",
    },
    {
      url: "/images/product/1 (11).webp",
    },
    {
      url: "/images/product/1 (12).webp",
    },
    {
      url: "/images/product/1 (13).webp",
    },
   {
      url: "/images/product/1 (14).webp",
    }, 
    {
      url: "/images/product/1 (15).webp",
    }, 
    {
      url: "/images/product/1 (16).webp",
    }, 
    {
      url: "/images/product/1 (17).webp",
    },
    {
      url: "/images/product/1 (18).webp",
    },
    {
      url: "/images/product/1 (19).webp",
    },
    {
      url: "/images/product/1 (20).webp",
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

export default Product;
