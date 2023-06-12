import React from "react";
import CustomButton from "../common/CustomButton";
import {FiSend} from "react-icons/fi"

const Subscribe = () => {
  return (
    <div className="w-[80%] rounded-[20px] h-[170px] bg-subscribe bg-no-repeat bg-[length:100%_100%] mx-auto px-[30px] py-[30px] grid grid-cols-2 absolute -top-[90px]">
      <div className="col-span-1">
        <h2 className="not-italic font-normal text-xl leading-[30px] text-white">
          Stay in touch
        </h2>
        <h1 className="not-italic font-medium text-[32px] leading-[48px] text-white">
          Subscribe to our News Letter
        </h1>
      </div>
      <div className="col-span-1">
        <div className="bg-inputgrey rounded-[20px] flex justify-between items-center px-[20px] sm:py-[20px] py-[10px]">
          <div className="w-full">
            <input
              className="w-full outline-none bg-inputgrey"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="bg-shadeYellow w-[50px] h-[50px] rounded-[50%] flex justify-center items-center">
            <FiSend className="text-[20px] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Subscribe;