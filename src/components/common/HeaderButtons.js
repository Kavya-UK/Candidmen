import React from 'react'
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Cart } from "../../assets/icons/cart.svg";
import { ReactComponent as Heart } from "../../assets/icons/Heart.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";


const HeaderButtons = () => {
    const navigate = useNavigate();

  return (
    <div className="h-full flex justify-center items-center">
      <div className="pl-[20px]">
        <CustomButton
          fontSize={"lg:text-[24px]"}
          primaryTextColor={"text-shadeYellow"}
          type={"icon"}
          icon={<Search />}
        ></CustomButton>
      </div>
      <div className="pl-[20px]">
        <CustomButton
          fontSize={"lg:text-[24px]"}
          primaryTextColor={"text-shadeYellow"}
          type={"icon"}
          count={3}
          icon={<Cart />}
          handleClick={() => navigate("/shoppingcart")}
        ></CustomButton>
      </div>
      <div className="pl-[20px]">
        <CustomButton
          fontSize={"lg:text-[24px]"}
          primaryTextColor={"text-shadeYellow"}
          type={"icon"}
          icon={<Heart />}
        ></CustomButton>
      </div>
      <div className="pl-[20px]">
        <CustomButton
          fontSize={"lg:text-[30px]"}
          primaryTextColor={"text-darekBlue"}
          type={"icon"}
          icon={<User />}
        ></CustomButton>
      </div>
    </div>
  );
}
export default HeaderButtons;