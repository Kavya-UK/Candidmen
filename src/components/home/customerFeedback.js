import React from 'react'
import { ReactComponent as Quotes } from "../../assets/icons/quotes.svg";


export default function CustomerFeedback({
  title,
  name,
  description,
  image
}) {
  return (
    <div className="  ">
      <div className="grid grid-cols-3  mt-[40px]">
        <div className="col-span-1">
          <div className=" bg-shadeYellow rounded-[50%] h-[150px] w-[150px] ">
            <span className="relative top-[12px] left-[25px]">
              <Quotes className="text-[10px]" />
            </span>
            <div className="relative left-[30px]">
              <img src={require(`../../${image}`)} alt="" />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <p className="not-italic font-normal text-2xl leading-9 text-[rgba(0,0,0,0.5)]">
            {description}
          </p>
          <p className="not-italic font-medium text-4xl leading-[54px] text-shadeYellow pt-[20px] relative -left-[80px]">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}
