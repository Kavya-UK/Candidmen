import React from "react";
import CustomButton from "./CustomButton";

const OrderSummary = ({
  status,
  orderTitle,
  orderedItems,
  rent,
  deposit,
  discount,
  walletCash,
  total,
}) => {
  const statusBar =
    status === "In Progress" ? `bg-darekBlue` : "bg-light_offwhite";
  const fontType = 
  status === "Completed" ? `text-black` : "text-white";
  return (
    <div className={`${statusBar} rounded-[8px] p-[15px] h-[550px] w-[250px]`}>
      <div className={""}>
        <h1
          className={`${fontType} text-[24px] font-Poppins not-italic font-normal leading-36  pb-[15px] border-b-2 border-light_graycolor}`}
        >
          {orderTitle}
        </h1>
        <div className="grid grid-cols-2 font-Poppins text-[16px] font-normal leading-24 text-off_white my-[20px]">
          <div className={`${fontType} text-left`}>Items</div>
          <div className={`${fontType} text-right`}> {orderedItems}</div>
        </div>
        <div className="grid grid-cols-2 font-Poppins text-[16px] font-normal leading-24 text-off_white  mb-[15px]">
          <div className={`${fontType} text-left`}>Rent Price</div>
          <div className={`${fontType} text-right`}> {rent}</div>
        </div>
        <div className="grid grid-cols-2 font-Poppins text-[16px] font-normal leading-24 text-off_white  mb-[15px]">
          <div className={`${fontType} text-left`}>Deposit</div>
          <div className={`${fontType} text-right`}> {deposit}</div>
        </div>
        <div className="grid grid-cols-2 font-Poppins text-[16px] font-normal leading-24 text-off_white  mb-[15px]">
          <div className={`${fontType} text-left`}>Discount</div>
          <div className={`${fontType} text-right`}> {discount}</div>
        </div>
        <div className="grid grid-cols-2 font-Poppins text-[16px] font-normal leading-24 text-off_white mb-[15px] ">
          <div className={`${fontType} text-left`}>Wallet Cash</div>
          <div className={`${fontType} text-right`}> {walletCash}</div>
        </div>
        <div className="mt-[10px] border-b-2 border-light_graycolor"></div>
        <div className="grid grid-cols-2 font-Poppins text-[16px] font-normal leading-24 text-off_white mt-[20px]">
          <div className={`${fontType} text-left`}>Total</div>
          <div className={`${fontType} text-right`}> {total}</div>
        </div>
        {status !== "In Progress" && (
          <CustomButton
            type="secondary"
            fontSize={"20px"}
            primaryTextColor="text-grayish_color"
            customStyle="py-[8px] font-Poppins font-normal mt-[40px]"
          >
            Cancel Order
          </CustomButton>
        )}
        <CustomButton
          type="primary"
          fontSize={"24px"}
          primaryTextColor="text-white"
          customStyle="py-[8px] font-Poppins font-normal mt-[40px]"
        >
          Checkout
        </CustomButton>

        <div
          className={`${fontType} text-[12px] font-Poppins font-normal leading-18 mt-[15px] not-italic`}
        >
          <p>Note :</p>
          <p>1. Do Not worry about size</p>
          <p>
            2. We will send each product in 2-3 sizes to avoid any fitting issue
            for booking orders.
          </p>
        </div>
      </div>
    </div>
  );
};
export default OrderSummary;
