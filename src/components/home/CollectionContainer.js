import React from "react";
import { useNavigate } from "react-router-dom";

export default function CollectionContainer({ collection }) {
      const navigate = useNavigate();

  return (
    <div className="h-full  grid grid-cols-3 gap-2 ">
      <div className="">
        <div
          className={`h-[50%] pb-1 not-italic font-medium text-4xl leading-[54px]`}
          onClick={() => navigate("/productlisting")}
        >
          {collection.leftTop.product}
        </div>
        <div
          className={`h-[50%] p1-1 not-italic font-medium text-4xl leading-[54px]`}
        >
          {collection.leftBottom.product}
        </div>
      </div>
      <div className="">
        <div
          className={`h-[75%] pb-1 not-italic font-medium text-4xl leading-[54px]`}
        >
          {collection.centerTop.product}
        </div>
        <div
          className={`h-[25%] pt-1 not-italic font-medium text-4xl leading-[54px]`}
        >
          {collection.centerBottom.product}
        </div>
      </div>
      <div className="">
        <div
          className={`h-[40%] pb-1 not-italic font-medium text-4xl leading-[54px]`}
        >
          {collection.rightTop.product}
        </div>
        <div
          className={`h-[60%] pt-1 not-italic font-medium text-4xl leading-[54px]`}
        >
          {collection.rightBottom.product}
        </div>
      </div>
    </div>
  );
}
