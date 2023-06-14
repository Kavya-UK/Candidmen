import React from 'react'
import CountdownTimer from '../common/Counter';
import CustomButton from '../common/CustomButton';
import { BsArrowRightShort } from "react-icons/bs";

export default function DealComponent() {
    const THREE_DAYS_IN_MS = 1 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    
  return (
    <div className="grid grid-cols-7 h-[300px] bg-shadeYellow p-[20px]">
      <div className="h-[180px] col-span-7 tablet:col-span-3 pr-5 relative">
        <h2 className="not-italic font-Prata font-normal text-xl sm:text-3xl lg:text-5xl leading-[65px] text-black lg:mb-[30px]">
          Deal of the Day
        </h2>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        <div className="lg:mt-[20px] not-italic font-medium text-[12px] lg:text-[16px] leading-6 text-white">
          Lorem ipsum dolor sit amet consectetur. At bibendum lorem rutrum
          facilisis enim elementum et
        </div>
      </div>
      <div className="col-span-4 relative hidden tablet:block">
        <div className="">
          <img
            className="absolute -top-[80px] w-[180px] tablet:w-[200px] lg:w-[280px]"
            src={require("../../assets/home/products/DealProduct3.png")}
            alt="product"
          />
        </div>
        <div>
          <img
            className="absolute -top-[120px] sm:right-[15%] lg:right-[8%] xl:right-[20%]  w-[180px] tablet:w-[200px] lg:w-[280px]"
            src={require("../../assets/home/products/dealProduct1.png")}
            alt="product"
          />
        </div>
        <div>
          <img
            className="absolute -bottom-[160px] left-[120px]  w-[180px] tablet:w-[200px] lg:w-[280px]"
            src={require("../../assets/home/products/dealProduct2.png")}
            alt="product"
          />
        </div>
      </div>
      <div className="col-span-5 relative -bottom-[85px] lg:-bottom-[55px] w-[300px] ">
        <CustomButton
          fontSize={"text-[20px] lg:text-[24px]"}
          secondaryTextColor={"text-shadeYellow"}
          secondaryBgColor={"bg-white"}
          borderColor={"border-shadeYellow"}
          primaryTextColor={"text-shadeYellow"}
          type={"secondary"}
          iconColor=""
          customStyle="py-[8px]"
          icon={<BsArrowRightShort />}
          primaryBgColor="bg-white"
        >
          SHOP NOW
        </CustomButton>
      </div>
    </div>
  );
}


