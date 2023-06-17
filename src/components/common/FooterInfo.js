import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import { ReactComponent as ChevronRight } from "../../assets/icons/chevronRightWhite.svg";

export default function FooterInfo({title,links}) {
  return (
    <div className="">
      <h1 className="font-Inter not-italic font-bold text-xl xl:text-2xl leading-[29px] text-white">
        {title}
      </h1>
      {links.map((item) => {
        return (
          <div className="not-italic font-bold text-[13px] xl:text-[16px] leading-[19px] text-white my-[30px] font-Inter">
            <span className="pr-[10px] inline-block relative top-[3px]">
              <MdArrowForwardIos />
            </span>
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
}
