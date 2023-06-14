import React from 'react'
import CustomButton from '../common/CustomButton';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function FeaturedBrands() {
  return (
    <div>
      <h2 className="text-center font-Rufina_Regular not-italic font-bold text-2xl lg:text-4xl leading-[44px]">
        Featured Brands
      </h2>
      <div className="flex justify-around mt-[50px]">
        <img
          className="h-[60px] sm:h-[100px] lg:h-auto"
          alt="brands"
          src={require("../../assets/home/brands/wrangler.png")}
        />
        <img
          className="h-[60px] sm:h-[100px] lg:h-auto"
          alt="brands"
          src={require("../../assets/home/brands/vans.png")}
        />
        <img
          className="h-[60px] sm:h-[100px] lg:h-auto"
          alt="brands"
          src={require("../../assets/home/brands/lv.png")}
        />
        <img
          className="h-[60px] sm:h-[100px] lg:h-auto"
          alt="brands"
          src={require("../../assets/home/brands/allenSolly.png")}
        />
      </div>
      <div className="flex items-center justify-center mx-auto mt-[50px]">
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
