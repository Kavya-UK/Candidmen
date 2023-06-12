import React from 'react'
import CustomButton from '../common/CustomButton';
import { BsArrowRightShort } from 'react-icons/bs';

export default function Banner() {
  return (
    <div className="bg-shopbanner w-full h-[80vh]">
      <div className="grid grid-cols-2 h-full">
        <div className="col-span-1 h-full relative">
          <div className="absolute">
            <img
              className="absolute"
              src={require("../../assets/shop/user.png")}
              alt="bg-shop"
            />
            <img src={require("../../assets/shop/bg-shop.png")} alt="bg-shop" />
          </div>
        </div>
        <div className="col-span-1 h-full">
          <div className=" flex flex-col justify-center items-center h-full">
            <h2 className="not-italic font-normal text-2xl leading-[27px] text-black mb-[40px]">
              Newly In
            </h2>
            <h1 className="not-italic font-normal text-[64px] leading-[64px] text-black mb-[25px]">
              UNLOCK YOUR STYLE
            </h1>
            <h2 className=" not-italic font-normal text-2xl leading-[27px] text-black">
              with our newly arrived collection
            </h2>
          </div>
          <div className="relative ">
            <div className="absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] w-[400px] ">
              <CustomButton
                fontSize={"text-[12px] sm:text-[16px] lg:text-[20px]"}
                customStyle={
                  "not-italic font-normal leading-[30px] text-black py-[10px] sm:py-[12px]"
                }
                type="primary"
                primaryTextColor={"text-black"}
                icon={<BsArrowRightShort />}
              >
                Shop Now
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
