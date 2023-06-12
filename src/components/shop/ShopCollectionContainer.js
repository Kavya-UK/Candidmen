import React from "react";

export default function ShopCollectionContainer({ collections }) {
  return (
    <div className="h-full  grid grid-cols-2  border-2 border-solid border-white">
      <div className="">
        <div className={`h-[75%] border-2 border-solid border-white`}>
          <div className="h-[100%] w-[60%] pb-1 border-2 border-solid border-white inline-block ">
            {collections.leftTop.product}
          </div>
          <div className="h-[67%] w-[40%] pb-1 border-2 border-solid border-white inline-block relative top-0 ">
            {collections.leftSide.product}
          </div>
        </div>
        <div className={`h-[25%] pb-1  border-2 border-solid border-white `}>
          {collections.leftBottom.product}
        </div>
      </div>
      <div className="relative">
        <div
          className={`h-[25%] pb-1 border-2  relative `}
        >
          <div
            className={`h-[100%] w-[141%] pb-1 border-2 border-solid border-white absolute right-[0] `}
          >
            {collections.rightTop.product}
          </div>
        </div>
        <div className={`h-[25%] pb-1  border-2 border-solid border-white `}>
          {collections.rightMiddle.product}
        </div>
        <div className={`h-[50%] pb-1  border-2 border-solid border-white `}>
          {collections.rightBottom.product}
        </div>
      </div>
    </div>
  );
}
