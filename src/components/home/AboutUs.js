import React from "react";
import CustomButton from "../common/CustomButton";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function AboutUs() {
  return (
    <div className="h-[400px] w-full">
      <div className="grid grid-cols-8 gap-5 mt-[40px] px-[50px]">
        <div className="col-span-6">
          <span className="not-italic font-normal text-2xl leading-9 text-[rgba(0,0,0,0.5)]">
            Candidmen is an online fashion rental & sales company. We rent
            designer wear clothing online at10%of the retail cost for 3 days.
            Dry, Cleaned and Ironed!
          </span>
        </div>
        <div className="col-span-2 relative">
          <img
            className="absolute translate-x-[50px] -translate-y-[140px]"
            src={require("../../assets/home/aboutus/aboutus-3.png")}
            alt="aboutus"
          />
          <img
            className="absolute translate-x-[200px] -translate-y-[80px] "
            src={require("../../assets/home/aboutus/aboutus-2.png")}
            alt="aboutus"
          />
          <img
            className="absolute"
            src={require("../../assets/home/aboutus/aboutus-1.png")}
            alt="aboutus"
          />
        </div>
      </div>
      <div className="flex justify-start mt-[40px]">
        <p className="text-darekBlue not-italic font-normal text-[40px] leading-[60px] px-[50px]">
          100k+
          <br />
          <span className="not-italic font-normal text-2xl leading-9 text-lightshadedgrey">
            Brands
          </span>
        </p>
        <p className="text-darekBlue not-italic font-normal text-[40px] leading-[60px] px-[50px]">
          20k+
          <br />
          <span className="not-italic font-normal text-2xl leading-9 text-lightshadedgrey">
            Customers
          </span>
        </p>
        <p className="text-darekBlue not-italic font-normal text-[40px] leading-[60px] px-[50px]">
          2k+
          <br />
          <span className="not-italic font-normal text-2xl leading-9 text-lightshadedgrey">
            Active Merchants
          </span>
        </p>
      </div>
      <div className="flex items-center justify-center mx-auto mt-[10px]">
        <div className="sm:w-[25%]">
          <CustomButton
            fontSize={"text-[12px] sm:text-[16px] lg:text-[20px]"}
            customStyle={
              "not-italic font-medium text-2xl leading-9 text-[#091C42] "
            }
            type="text"
            primaryTextColor={"text-black"}
            icon={<MdKeyboardDoubleArrowRight />}
          >
            View More
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
