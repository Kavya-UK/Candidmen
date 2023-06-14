import React from 'react'
import Header from '../components/common/Header'
import {MdKeyboardArrowLeft} from "react-icons/md"
import CartItems from '../components/common/CartItems'
import OrderSummary from '../components/common/OrderSummary'
import {cartItem} from '../data/home/products'
import { ReactComponent as FiArrowLeft } from "../assets/icons/fi_arrow-left.svg";
import Footer from '../components/common/Footer'

export default function ShoppingCart() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-10 gap-3 mt-[40px]">
        <div className="col-span-8 ml-[20px] ">
          <div className="border-light_graycolor border-b-[1px] px-[20px] py-[20px] flex items-center justify-between">
            <div className="flex items-center">
              <MdKeyboardArrowLeft className="inline-block text-[30px]  mt-[6px]" />
              <h1 className="not-italic inline-block font-normal text-4xl leading-[44px] text-nero ">
                Shopping Cart
              </h1>
            </div>
            <h3 className="not-italic font-normal text-2xl leading-[30px] text-nero inline-block float-right">
              3 Items
            </h3>
          </div>
          <div className="mt-[40px]">
            <div className="grid grid-cols-8 place-items-center mb-[20px]">
              <div className="not-italic font-normal text-xs leading-[18px] text-black col-span-1 ">
                Product Details
              </div>
              <div className="not-italic font-normal text-xs leading-[18px] text-black col-span-2 "></div>
              <div className="not-italic font-normal text-xs leading-[18px] text-black col-span-1 ">
                Quantity
              </div>
              <div className="not-italic font-normal text-xs leading-[18px] text-black col-span-1 ">
                Rent Price
              </div>
              <div className="not-italic font-normal text-xs leading-[18px] text-black col-span-1 ">
                Deposit
              </div>
              <div className="not-italic font-normal text-xs leading-[18px] text-black col-span-1 ">
                Sub Total
              </div>
              <div className="not-italic font-normal text-xs leading-[18px] text-black col-span-1 ">
                Remove
              </div>
            </div>
            {cartItem.map((items) => {
              return (
                <CartItems
                  imgSrc={items.imgSrc}
                  productTitle={items.productTitle}
                  bookedDate={items.bookedDate}
                  returnDate={items.returnDate}
                  quantity={items.quantity}
                  rentPrice={items.rentPrice}
                  deposit={items.deposit}
                  total={items.total}
                />
              );
            })}
          </div>
        </div>
        <div className="col-span-2 border-light_graycolor border-l-[1px] px-[5px]">
          <OrderSummary
            status="In Progress"
            orderTitle="Order Summary"
            orderedItems="3"
            rent=" ₹8367"
            deposit=" ₹8367"
            discount=" ₹0"
            walletCash=" ₹0"
            total=" ₹16735"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center p-[20px]">
          <FiArrowLeft className="inline-block text-[30px] mt-[6px]" />
          <h1 className="not-italic inline-block font-normal text-4xl leading-[44px] text-nero pl-[10px]">
            Continue Shopping
          </h1>
        </div>
      </div>
      <div className='mt-[180px]'>
        <Footer />
      </div>
    </div>
  );
}
