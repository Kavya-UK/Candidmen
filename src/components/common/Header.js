import React, { useState } from "react";
import HeaderLinks from "./HeaderLinks";
import CustomButton from "./CustomButton";
import { BiChevronDown } from "react-icons/bi";
import HeaderButtons from "./HeaderButtons";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevronDown.svg";


export default function Header({ selected }) {
      const navigate = useNavigate();
      const [isOpen, setisOpen] = useState(false)
  return (
    <div className=" bg-white sm:flex py-[20px] px-[30px] drop-shadow-header justify-between hidden ">
      <div
        className="flex justify-center items-center"
        onClick={() => navigate("/")}
      >
        <img
          src={require("../../assets/header/user.png")}
          alt=""
          className="rounded-[50%] w-[40px] inline-block"
        />
        <span className="pl-[10px] text-contentBlack not-italic font-medium text-xl xl:text-2xl leading-9">
          Candidmen
        </span>
      </div>
      <div
        onClick={() => setisOpen(!isOpen)}
        className="relative drop-down-container"
      >
        <div
          className={` ${
            isOpen ? "smalldesc expand " : "smalldesc "
          } h-full flex justify-center items-center  `}
        >
          <div
            className={` ${
              isOpen ? "select-dropdown-open " : "select-dropdown-close "
            }`}
          >
            <p className="text-suvaGray pr-[10px] pb-[5px]">Bangalore</p>
            <p className="text-suvaGray pr-[10px] pb-[5px]">Hyderabad</p>
          </div>
          <span
            className={` ${
              isOpen ? "select-icon-open " : "select-icon-close "
            }`}
          >
            <ChevronDown />
          </span>

         
        </div>
      </div>
      <div className="hidden lg:block">
        <HeaderLinks selected={selected} />
      </div>
      <div className="hidden xl:block">
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
