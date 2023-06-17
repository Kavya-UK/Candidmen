import React from "react";
import CustomButton from "../common/CustomButton";
import { ReactComponent as DoubleChevronRight } from "../../assets/icons/doubleChevronRight.svg";

export default function AboutUs() {
  return (
    <div className="h-[500px] w-full">
      <h2 className="not-italic font-normal text-4xl leading-[44px] text-black text-center font-Rufina_Regular pb-[120px] w-full">
        About us
      </h2>
      <div className="grid grid-cols-8 gap-5 mt-[40px] px-[50px]">
        <div className="col-span-4">
          <span className="not-italic font-normal text-2xl leading-9 text-[rgba(0,0,0,0.5)]">
            Candidmen is an online fashion rental & sales company. We rent
            designer wear clothing online at10%of the retail cost for 3 days.
            Dry, Cleaned and Ironed!
          </span>
        </div>
        <div className=" col-start-6 col-span-3 relative hidden sm:block">
          <img
            className="w-[60%] lg:w-auto absolute translate-x-[50px] -translate-y-[140px]"
            src={require("../../assets/home/aboutus/aboutus-3.png")}
            alt="aboutus"
          />
          <img
            className="w-[50%] lg:w-auto absolute translate-x-[150px] lg:translate-x-[200px] -translate-y-[40px] lg:-translate-y-[40px] "
            src={require("../../assets/home/aboutus/aboutus-2.png")}
            alt="aboutus"
          />
          <img
            className="w-[60%] lg:w-auto absolute"
            src={require("../../assets/home/aboutus/aboutus-1.png")}
            alt="aboutus"
          />
        </div>
      </div>
      <div className="flex justify-start mt-[40px]">
        <p className="text-darekBlue not-italic font-normal text-[36px] xl:text-[40px] leading-[60px] px-[50px] flex flex-col">
          100k+
          <span className="not-italic font-normal text-xl xl:text-2xl leading-9 text-lightshadedgrey">
            Brands
          </span>
        </p>
        <p className="text-darekBlue not-italic font-normal text-[36px] xl:text-[40px] leading-[60px] px-[50px] flex flex-col">
          20k+
          <span className="not-italic font-normal text-xl xl:text-2xl leading-9 text-lightshadedgrey">
            Customers
          </span>
        </p>
        <p className="text-darekBlue not-italic font-normal text-[36px] xl:text-[40px] leading-[60px] px-[50px] flex flex-col">
          2k+
          <span className="not-italic font-normal text-xl xl:text-2xl leading-9 text-lightshadedgrey">
            Active Merchants
          </span>
        </p>
      </div>
      <div className="flex items-center justify-center mx-auto mt-[80px]">
        <div className="sm:w-[25%]">
          <CustomButton
            fontSize={"text-[12px] sm:text-[16px] lg:text-[24px] "}
            customStyle={
              "not-italic text-2xl leading-9 text-[#091C42] font-semibold"
            }
            type="text"
            primaryTextColor={"text-black"}
            icon={<DoubleChevronRight />}
          >
            View More
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
