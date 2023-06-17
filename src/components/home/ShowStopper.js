import React from 'react'
import CustomButton from '../common/CustomButton';
import { ReactComponent as IconRight } from "../../assets/home/IconRight.svg";
export default function ShowStopper() {
  return (
    <div className="flex justify-around bg-floralWhite h-[500px] xl:h-[600px] w-full transition-all duration-[0.5s] ease-[ease]">
      <div>
        <h2 className="not-italic font-Cardo font-normal text-5xl xl:text-7xl leading-[97px] text-black mt-[50px]  xl:mt-[80px]">
          SHOWSTOPPERS
        </h2>
        <h3 className="not-italic font-Candara font-light text-[40px] lg:text-[50px] xl:text-[64px] leading-[78px] text-black mt-[20px] xl:mt-[40px]">
          Dazzle up for the Best
          <br /> Times
        </h3>
        <div className="flex  mt-[50px] xl:mt-[130px] max-w-[400px] transition-all duration-[0.5s] ease-[ease]">
          <CustomButton
            fontSize={"text-[14px] sm:text-[18px] lg:text-[24px]"}
            customStyle={
              "not-italic font-normal leading-[30px] text-black px-[20px] sm:px-0 py-[10px] sm:py-[15px] w-[400px]"
            }
            type="primary"
            primaryTextColor={"text-black"}
            icon={<IconRight />}
          >
            BUY NOW
          </CustomButton>
        </div>
      </div>
      <div className="h-[320px] w-[280px] lg:h-[500px] lg:w-[320px] xl:h-[580px] xl:w-[400px] relative transition-all duration-[0.5s] ease-[ease] ">
        <img
          className=" absolute w-full h-full left-[15px] top-[20px] rotate-[15deg] object-cover "
          src={require("../../assets/home/show3.png")}
          alt="product"
        />
        <img
          className=" absolute w-full h-full -top-[30px] -translate-x-[12px]  -rotate-[15deg] object-cover"
          src={require("../../assets/home/show2.png")}
          alt="product"
        />
        <img
          className="  absolute w-full h-full -top-[20px] object-cover"
          src={require("../../assets/home/show.png")}
          alt="product"
        />
      </div>
    </div>
  );
}
