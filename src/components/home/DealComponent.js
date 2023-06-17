import React from 'react'
import CountdownTimer from '../common/Counter';
import CustomButton from '../common/CustomButton';
import { BsArrowRightShort } from "react-icons/bs";

export default function DealComponent() {
    const THREE_DAYS_IN_MS = 1 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    
  return (
    <div className="grid grid-cols-7 h-[340px] xl:h-[350px] bg-shadeYellow pt-[40px] px-[80px] transition-all duration-[0.5s] ease-[ease]">
      <div className="pl-[20px] h-[180px] col-span-7 tablet:col-span-3 pr-5 relative flex flex-col">
        <h2 className="not-italic font-Prata font-normal text-xl sm:text-3xl lg:text-5xl xl:text-6xl leading-[65px] text-black lg:mb-[30px]">
          Deal of the Day
        </h2>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        <div className="mt-[20px] flex justify-around max-w-[380px]">
          <span className="relative  not-italic font-normal text-xl leading-[21px] text-black font-PortLligatSans">
            Hours
          </span>
          <span className="relative  not-italic font-normal text-xl leading-[21px] text-black font-PortLligatSans">
            Minutes
          </span>
          <span className="relative  not-italic font-normal text-xl leading-[21px] text-black font-PortLligatSans">
            Seconds
          </span>
        </div>
        <div className="lg:mt-[20px] max-w-[480px] not-italic font-medium text-[12px] lg:text-[14px] xl:text-[16px] leading-6 text-white">
          Lorem ipsum dolor sit amet consectetur. At bibendum lorem rutrum
          facilisis enim elementum et
        </div>
      </div>
      <div className="col-span-4 relative hidden tablet:block">
        <div className="">
          <img
            className="absolute -top-[80px] xl:-top-[100px] w-[180px] tablet:w-[200px] lg:w-[280px] xl:w-[340px] transition-all duration-[0.5s] ease-[ease]"
            src={require("../../assets/home/products/DealProduct3.png")}
            alt="product"
          />
        </div>
        <div>
          <img
            className="absolute -top-[100px] xl:-top-[140px] sm:left-[220px] lg:left-[300px] xl:left-[380px]  w-[180px] tablet:w-[200px] lg:w-[280px] xl:w-[340px] transition-all duration-[0.5s] ease-[ease]"
            src={require("../../assets/home/products/dealProduct1.png")}
            alt="product"
          />
        </div>
        <div>
          <img
            className="absolute -bottom-[200px] xl:bottom-[-280px] left-[120px]  w-[180px] tablet:w-[200px] lg:w-[320px] xl:w-[420px] transition-all duration-[0.5s] ease-[ease]"
            src={require("../../assets/home/products/dealProduct2.png")}
            alt="product"
          />
        </div>
      </div>
      <div className="col-span-5 relative -bottom-[55px] xl:-bottom-[65px] w-[260px] xl:w-[300px] left-[10%] transition-all duration-[0.5s] ease-[ease]">
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


