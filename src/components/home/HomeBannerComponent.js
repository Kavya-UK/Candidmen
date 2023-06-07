import React from 'react'
import HomeBanner from '../common/home-banner';
import CustomButton from "../common/customButton";
import {BsArrowRightShort} from 'react-icons/bs'

export default function HomeBannerComponent() {
  return (
    <div>
      <div className="flex flex-col justify-center w-[100%] lg:w-[80%] px-10 lg:px-0 mx-auto">
        <div className="flex justify-center not-italic font-normal text-[30px] sm:text-[54px] lg:text-[64px] leading-[87px] text-black ">
          <h2>WEAR</h2>
        </div>
        <div className="flex justify-between not-italic font-normal text-[30px] sm:text-[54px] lg:text-[64px] leading-[87px] text-black">
          <h2>
            RENT
            <img
              className="relative w-[60%] -top-[15px] -left-[25px] sm:top-0 sm:w-[80%] "
              src={require("../../assets/home/banner/rent.png")}
              alt="rent"
            />
          </h2>
          <h2>RETURN</h2>
        </div>
      </div>
      <HomeBanner />
      <div className="flex items-center justify-center mx-auto mt-[40px]">
        <div className="sm:w-[20%]">
          <CustomButton
            fontSize={"text-[12px] sm:text-[16px] lg:text-[20px]"}
            customStyle={
              "not-italic font-normal  leading-[30px] text-black px-[20px] sm:px-0 py-[6px] sm:py-[8px]"
            }
            type="primary"
            primaryTextColor={"text-black"}
            icon={<BsArrowRightShort />}
          >
            BROWSE NOW
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
