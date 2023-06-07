import React from "react";
import CollectionContainer from "../common/collection-container";
import CustomButton from "../common/customButton";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const CollectionComponent = ({title,subTitle, collection }) => {
  return (
    <div className="">
      <h2 className="not-italic font-bold text-[24px] sm:text-[30px]  lg:text-[36px] leading-[44px] text-black  text-center">
        {title}
      </h2>
      <h4 className="not-italic font-light text-[16px] sm:text-[20px] lg:text-[26px] leading-[39px] text-center text-black my-[20px]">
        {subTitle}
      </h4>
      <div className="h-[620px] sm:h-[720px] w-[90%] sm:w-[80%] mx-auto">
        <CollectionContainer collection={collection} />
      </div>
      <div className="flex items-center justify-center mx-auto mt-[40px]">
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
};
export default CollectionComponent;
