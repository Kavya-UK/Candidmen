import React from 'react'
import CustomButton from './CustomButton';
import { FiPlus, FiStar } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';
import ProductShowCase from './ProductShowCase';
const imageList = [
  "assets/product/product1.png",
  "assets/product/product2.png",
  "assets/product/product3.png",
  "assets/product/product4.png",
  "assets/product/product5.png",
  "assets/product/product6.png",
  "assets/product/product7.png",
];
export default function ProductDetails() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-2 ml-[30px]">
        <div className="col-span-4">
          <ProductShowCase imageList={imageList} />
        </div>
        <div className="col-span-8 mx-auto">
          <h2 className="inline-block text-nero not-italic font-normal text-4xl leading-[44px] pb-[10px] border-b-[1px] border-shadeYellow font-Rufina_Regular">
            Grey Embroidered All Over Suit
          </h2>
          <p className="text-BlueCharcoal not-italic font-light text-base leading-6 font-Poppins">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna nonummy nibh
            euismod tincidunt
          </p>
          <div className="mt-[15px]">
            <span className="inline-block px-[5px] ">
              <BsStarFill color="#FABB4B" />
            </span>
            <span className="inline-block px-[5px] ">
              <BsStarFill color="#FABB4B" />
            </span>
            <span className="inline-block px-[5px]">
              <BsStarFill color="#FABB4B" />
            </span>
            <span className="inline-block px-[5px]">
              <BsStarFill color="#FABB4B" />
            </span>
            <span className="inline-block px-[5px]">
              <FiStar color="#CDCDCD" />
            </span>
          </div>
          <div className="flex items-center font-Poppins">
            <span className="inline-block not-italic font-normal text-2xl leading-9 line-through text-nero pr-[10px]">
              ₹27890
            </span>
            <span className="inline-block not-italic font-semibold text-[32px] leading-[48px] text-darekBlue px-[10px]">
              Rent - ₹2789
            </span>
            <span className="inline-block not-italic font-normal text-2xl leading-9 text-nero px-[10px]">
              <FiPlus className="" />
            </span>
            <span className="inline-block not-italic font-normal text-base leading-6 text-nero px-[10px]">
              Refundable Deposit
            </span>
            <span className="inline-block not-italic font-medium text-base leading-6 text-darekBlue px-[10px]">
              ₹2789
            </span>
          </div>
          <div>
            <span className="not-italic font-normal text-base leading-6 text-nero font-Poppins">
              Product ID:
            </span>
            <span className="not-italic font-medium text-base leading-6 text-darekBlue pl-[10px]">
              23FBC31B
            </span>
            <div className="mt-[20px] not-italic font-normal text-base leading-6 text-nero">
              <span>Shoulder Size</span>
            </div>
          </div>
          <div className="grid grid-cols-6 mt-[20px] pl-[10px] not-italic font-normal text-[12px] leading-[18px] text-darkestgray font-Poppins">
            <div className="border-b-2 border-r-2 border-solid border-[#EDEDED] bg-[#FCFCFC] h-[50px] pl-[10px] flex items-center ">
              Size
            </div>
            <div className="border-b-2 border-r-2 border-solid border-[#EDEDED] bg-[#FCFCFC] h-[50px] pl-[10px]  flex items-center">
              S
            </div>
            <div className="border-b-2 border-r-2 border-solid border-[#EDEDED] bg-[#FCFCFC] h-[50px] pl-[10px]  flex items-center">
              M
            </div>
            <div className="border-b-2 border-r-2 border-solid border-[#EDEDED] bg-[#FCFCFC] h-[50px] pl-[10px]  flex items-center">
              L
            </div>
            <div className="border-b-2 border-r-2 border-solid border-[#EDEDED] bg-[#FCFCFC] h-[50px] pl-[10px]  flex items-center">
              XL
            </div>
            <div className="border-b-2  border-solid border-[#EDEDED] bg-[#FCFCFC] h-[50px] pl-[10px]  flex items-center">
              XXL
            </div>
            <div className="border-b-2 border-r-2 border-solid border-[#EDEDED] bg-[#FCFCFC] h-[50px] pl-[10px]  flex items-center ">
              Shoulder Size
            </div>
            <div className="border-b-2 border-r-2 border-solid border-[#EDEDED] bg-[#FCFCFC] h-[50px] pl-[10px]  flex items-center ">
              38
            </div>
            <div className="border-b-2 border-r-2 border-solid border-[#EDEDED] bg-[#FCFCFC] h-[50px] pl-[10px]  flex items-center">
              40
            </div>
            <div className="border-b-2 border-r-2 border-solid border-[#EDEDED] bg-[#FCFCFC] h-[50px] pl-[10px]  flex items-center">
              42
            </div>
            <div className="border-b-2 border-r-2 border-solid border-[#EDEDED] bg-[#FCFCFC] h-[50px] pl-[10px]  flex items-center">
              44
            </div>
            <div className="border-b-2  border-solid border-[#EDEDED] bg-[#FCFCFC] h-[50px] pl-[10px]  flex items-center">
              46
            </div>
          </div>
          <div className="not-italic font-normal text-base leading-6 text-nero py-[20px]">
            <span>Select Size</span>
          </div>
          <div className="flex gap-5 ">
            <div className="h-[45px] w-[45px] rounded-[50%] flex items-center justify-center bg-light_graycolor">
              S
            </div>
            <div className="h-[45px] w-[45px] rounded-[50%] bg-light_graycolor flex items-center justify-center ">
              M
            </div>
            <div className="h-[45px] w-[45px] rounded-[50%] bg-shadeYellow flex items-center justify-center ">
              L
            </div>
            <div className="h-[45px] w-[45px] rounded-[50%] bg-light_graycolor flex items-center justify-center ">
              XL
            </div>
            <div className="h-[45px] w-[45px] rounded-[50%] bg-light_graycolor flex items-center justify-center ">
              XXL
            </div>
          </div>
          <div className="mt-[20px]">
            <span className="not-italic font-normal text-base leading-6 text-nero mr-[10px] font-Poppins">
              Duration :
            </span>
            <select className="px-[20px] py-[5px] bg-[#EDEDED] font-Poppins">
              <option>1 Day</option>
              <option>2 Days</option>
              <option>3 Days</option>
            </select>
          </div>
          <div className="mt-[20px]">
            <span className="not-italic font-normal text-base leading-6 text-nero mr-[10px] font-Poppins">
              Delivery Date :
            </span>
            <input
              type="date"
              id="datefield"
              name="datefield"
              value="2023-01-08"
              className="p-[5px] bg-[#EDEDED]"
            />
            <span className="not-italic font-normal text-base leading-6 text-nero ml-[10px] font-Poppins ">
              Return Date :
            </span>
            <input
              type="date"
              id="datefield"
              value="2023-01-18"
              name="datefield"
              className="p-[5px] bg-[#EDEDED] ml-[10px]"
            />
          </div>
          <div className="grid grid-cols-8 gap-8 mt-[20px]">
            <div className="col-span-4">
              <CustomButton
                fontSize={"text-4xl"}
                customStyle={
                  "not-italic font-Poppins font-semibold leading-[30px] text-white leading-[54px] px-[12px] sm:px-0 py-[8px] sm:py-[12px] w-[100px]"
                }
                type="primary"
                primaryBgColor={"bg-shadeYellow"}
              >
                Rent
              </CustomButton>
            </div>
            <div className="col-span-4">
              <CustomButton
                fontSize={"text-4xl"}
                customStyle={
                  "not-italic font-normal leading-[30px] leading-[54px] px-[12px] sm:px-0 py-[8px] sm:py-[12px] w-[100px]"
                }
                type="secondary"
                secondaryTextColor="text-darekBlue"
                primaryBgColor={"bg-trasparent"}
              >
                Add to Cart
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
