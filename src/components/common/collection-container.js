import React from "react";

export default function CollectionContainer({ collection }) {
  return (
    <div className="h-full  grid grid-cols-3 gap-2">
      <div className="">
        <div className={`h-[50%] pb-1`}>{collection.leftTop.product}</div>
        <div className={`h-[50%] p1-1`}>{collection.leftBottom.product}</div>
      </div>
      <div className="">
        <div className={`h-[75%] pb-1`}>{collection.centerTop.product}</div>
        <div className={`h-[25%] pt-1`}>{collection.centerBottom.product}</div>
      </div>
      <div className="">
        <div className={`h-[40%] pb-1`}>{collection.rightTop.product}</div>
        <div className={`h-[60%] pt-1`}>{collection.rightBottom.product}</div>
      </div>
    </div>
  );
}
