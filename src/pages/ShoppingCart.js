import React from 'react'
import Header from '../components/common/Header'
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

export default function ShoppingCart() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-8 mt-[60px]">
        <div className="col-span-1 w-full">
          <img
            src={require("../assets/shoppingcart/productimage.png")}
            alt="productimage"
          />
        </div>
        <div className="col-span-2">
          <p className="not-italic font-medium text-sm leading-[21px] text-black">
            Grey Embroidered All Over Suit
            <div className="font-light text-xs leading-[18px] text-black mt-[20px] ">
              <span className="p-[10px] ">Booked Date :</span>
              <span className="p-[5px] ">29/03/2023</span>
            </div>
            <div className="font-light text-xs leading-[18px] text-black">
              <span className="p-[10px]">Return Date :</span>
              <span className="p-[10px]">01/04/2023</span>
            </div>
          </p>
        </div>
        <div className="col-span-1">
          <div className="relative top-[43px]">
            <FiMinus className="inline-block " />
            <span className="inline-block border-2 border-black rounded p-[3px] mx-[10px]">
              1
            </span>
            <FiPlus className="inline-block " />
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative top-[50px] not-italic font-normal text-base leading-6 text-darekBlue">
            <span>₹2789</span>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative top-[50px] not-italic font-normal text-base leading-6 text-darekBlue">
            <span>₹2789</span>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative top-[50px] not-italic font-normal text-base leading-6 text-darekBlue">
            <span>₹5578</span>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative top-[50px]">
            <FiTrash2 className="text-[20px] text-redtransh" />
          </div>
        </div>
      </div>
    </div>
  );
}
