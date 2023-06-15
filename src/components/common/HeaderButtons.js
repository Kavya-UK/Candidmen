import React from 'react'
import CustomButton from "./CustomButton";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";


const HeaderButtons = () => {
    const navigate = useNavigate();

  return (
    <div className="h-full flex justify-center items-center">
      <div className="pl-[20px]">
        <CustomButton
          fontSize={"lg:text-[24px]"}
          primaryTextColor={"text-shadeYellow"}
          type={"icon"}
          icon={<BsSearch />}
        ></CustomButton>
      </div>
      <div className="pl-[20px]">
        <CustomButton
          fontSize={"lg:text-[24px]"}
          primaryTextColor={"text-shadeYellow"}
          type={"icon"}
          count={3}
          icon={<BsCart />}
          handleClick={() => navigate("/shoppingcart")}
        ></CustomButton>
      </div>
      <div className="pl-[20px]">
        <CustomButton
          fontSize={"lg:text-[24px]"}
          primaryTextColor={"text-shadeYellow"}
          type={"icon"}
          icon={<BsHeart />}
        ></CustomButton>
      </div>
      <div className="pl-[20px]">
        <CustomButton
          fontSize={"lg:text-[30px]"}
          primaryTextColor={"text-darekBlue"}
          type={"icon"}
          icon={<BiUserCircle />}
        ></CustomButton>
      </div>
    </div>
  );
}
export default HeaderButtons;