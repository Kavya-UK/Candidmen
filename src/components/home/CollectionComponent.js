import React from "react";
import CollectionContainer from "./CollectionContainer";
import CustomButton from "../common/CustomButton";
import { ReactComponent as DoubleChevronRight } from "../../assets/icons/doubleChevronRight.svg";

const CollectionComponent = ({title,subTitle, collection }) => {
  return (
    <div className="">
      <h2 className="not-italic font-bold text-[24px] sm:text-[30px] font-Rufina_Regular lg:text-[36px] leading-[44px] text-black  text-center">
        {title}
      </h2>
      <h4 className="not-italic font-light text-[16px] sm:text-[20px] lg:text-[26px] leading-[39px] text-center text-black my-[50px]">
        {subTitle}
      </h4>
      <div className="h-[620px] sm:h-[720px] w-[90%] sm:w-[80%] mx-auto">
        <CollectionContainer collection={collection} />
      </div>
      <div className="flex items-center justify-center mx-auto mt-[40px]">
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
    </div>
  );
};
export default CollectionComponent;
