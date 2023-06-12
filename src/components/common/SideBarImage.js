import React from 'react'
import CustomButton from './CustomButton';
import { BsArrowRightShort } from 'react-icons/bs';

export default function SideBarImage({imgSrc}) {
  return (
    <div className="h-full relative">
      <img
        className="absolute object-cover h-full w-full"
        src={require(`../../${imgSrc}`)}
        alt="sideBar"
      />
      <div className="w-[80%] mx-auto absolute bottom-0 left-[6%] translate-y-[50%]">
        <CustomButton
          fontSize={"text-[12px] sm:text-[16px] lg:text-[20px]"}
          customStyle={
            "not-italic font-normal  leading-[30px] text-black  py-[6px] sm:py-[8px]"
          }
          type="primary"
          primaryBgColor="bg-darekBlue"
          primaryTextColor={"text-white"}
          icon={<BsArrowRightShort />}
        >
          View All
        </CustomButton>
      </div>
    </div>
  );
}
