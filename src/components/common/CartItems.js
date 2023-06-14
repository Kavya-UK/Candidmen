import React from 'react'
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

export default function CartItems({
  imgSrc,
  productTitle,
  bookedDate,
  returnDate,
  quantity,
  rentPrice,
  deposit,
  total
}) {
  return (
    <div className="grid grid-cols-8 h-[120px] place-items-center mt-[15px] border-b-[1px] border-light_graycolor pb-[10px]">
      <div className="col-span-1 w-full h-full relative flex justify-center">
        <img
          className="absolute w-full h-full object-contain"
          src={require(`../../${imgSrc}`)}
          alt="productimage"
        />
      </div>
      <div className="col-span-2">
        <p className="not-italic font-medium text-sm leading-[21px] text-black">
          {productTitle}
          <div className="font-light text-xs leading-[18px] text-black mt-[20px] ">
            <span className="py-[10px] ">Booked Date :</span>
            <span className="py-[5px] pl-[10px]">{bookedDate}</span>
          </div>
          <div className="font-light text-xs leading-[18px] text-black">
            <span className="py-[10px]">Return Date :</span>
            <span className="py-[10px] pl-[10px]">{returnDate}</span>
          </div>
        </p>
      </div>
      <div className="col-span-1">
        <div className="">
          <FiMinus className="inline-block " />
          <span className="inline-block border-2 border-black rounded p-[3px] mx-[10px]">
            {quantity}
          </span>
          <FiPlus className="inline-block " />
        </div>
      </div>
      <div className="col-span-1">
        <div className=" not-italic font-normal text-base leading-6 text-darekBlue">
          <span>{rentPrice}</span>
        </div>
      </div>
      <div className="col-span-1">
        <div className=" not-italic font-normal text-base leading-6 text-darekBlue">
          <span>{deposit}</span>
        </div>
      </div>
      <div className="col-span-1">
        <div className=" not-italic font-normal text-base leading-6 text-darekBlue">
          <span>{total}</span>
        </div>
      </div>
      <div className="col-span-1">
        <div className="">
          <FiTrash2 className="text-[20px] text-redtransh" />
        </div>
      </div>
    </div>
  );
}
