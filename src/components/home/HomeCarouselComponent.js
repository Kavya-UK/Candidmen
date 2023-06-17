import React from 'react'

import ProductCarousel from "../common/ProductCarousel";
import CustomButton from "../common/CustomButton";
import { ReactComponent as DoubleChevronRight } from "../../assets/icons/doubleChevronRight.svg";


export default function HomeCarouselComponent({title,subTitle, productList, hideButton=false }) {
  return (
    <div>
      <h2 className="not-italic font-bold font-Rufina_Regular text-[24px]  sm:text-[30px]  lg:text-[36px] leading-[44px] text-black  text-center ">
        {title}
      </h2>
      <h4 className="not-italic font-light text-[16px] sm:text-[20px] lg:text-[26px] leading-[39px] text-center text-black mt-[20px]">
        {subTitle}
      </h4>
      <ProductCarousel hwProp={"h-[450px] w-[95%] "} listItems={productList} />
      {!hideButton && (
        <div className="flex items-center justify-center mx-auto mt-[10px]">
          <div className="sm:w-[25%]">
            <CustomButton
              fontSize={"text-[12px] sm:text-[16px] lg:text-[24px] "}
              customStyle={
                "not-italic font-semibold text-[24px] leading-[54px] text-darekBlue "
              }
              type="text"
              primaryTextColor={"text-darekBlue"}
              icon={<DoubleChevronRight />}
            >
              View More
            </CustomButton>
          </div>
        </div>
      )}
    </div>
  );
}
