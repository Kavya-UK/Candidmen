import React from 'react'
import CustomButton from '../common/customButton';
import {BsArrowRightShort} from 'react-icons/bs'

export default function ShowStopper() {
  return (
    <div className="flex justify-around bg-floralWhite h-[480px] w-full">
      <div>
        <h2 className="not-italic font-normal text-5xl xl:text-7xl leading-[97px] text-black mt-[80px]">
          SHOWSTOPPERS
        </h2>
        <h3 className="not-italic font-light text-[40px] lg:text-[50px] xl:text-[64px] leading-[78px] text-black">
          Dazzle up for the Best Times
        </h3>
        <div className="flex  mx-auto mt-[40px]">
            <CustomButton
              fontSize={"text-[14px] sm:text-[18px] lg:text-[24px]"}
              customStyle={
                "not-italic font-normal  leading-[30px] text-black px-[20px] sm:px-0 py-[8px] sm:py-[12px] w-[400px]"
              }
              type="primary"
              primaryTextColor={"text-black"}
              icon={<BsArrowRightShort />}
            >
              BUY NOW
            </CustomButton>
        </div>
      </div>
      <div className="h-[500px] w-[300px] relative ">
        <img
          className=" absolute top-[50px] rotate-[15deg] object-cover"
          src={require("../../assets/home/products/product4.png")}
          alt="product"
        />
        <img
          className=" absolute top-[50px] -translate-x-[12px]  -rotate-[15deg]"
          src={require("../../assets/home/products/product2.png")}
          alt="product"
        />
        <img
          className="  absolute top-[50px] object-fill"
          src={require("../../assets/home/products/product5.png")}
          alt="product"
        />
      </div>
    </div>
  );
}
