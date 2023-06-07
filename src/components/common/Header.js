import React from "react";
import HeaderLinks from "./HeaderLinks";
import CustomButton from "./customButton";
import { BiChevronDown } from "react-icons/bi";
import HeaderButtons from "./HeaderButtons";

export default function Header({ selected }) {
  return (
    <div className=" bg-white sm:flex py-[20px] px-[30px] drop-shadow-header justify-between hidden ">
      <div className="flex justify-center items-center">
        <img
          src={require("../../assets/header/user.png")}
          alt=""
          className="rounded-[50%] w-[40px] inline-block"
        />
        <span className="pl-[10px] text-contentBlack not-italic font-medium text-xl lg:text-2xl leading-9">
          Candidmen
        </span>
      </div>
      <div className="">
        <div className="h-full flex justify-center items-center ">
          <span className="text-suvaGray pr-[10px]">Banglore</span>
          <CustomButton
            fontSize={"lg:text-[24px]"}
            primaryTextColor={"text-shadeYellow"}
            type={"icon"}
            icon={<BiChevronDown />}
          ></CustomButton>
        </div>
      </div>
      <div className="hidden lg:block">
        <HeaderLinks selected={selected} />
      </div>
      <div className="">
        <div className="h-full flex justify-center items-center ">
          <input
            className="bg-lightAsh rounded-[8px] p-[5px] not-italic font-normal text-xs leading-[18px] text-lightBlack outline-none"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="">
        <HeaderButtons />
      </div>
    </div>
  );
}
