import React from 'react'
import Header from '../components/common/Header';
import { ReactComponent as Stroke1 } from "../assets/icons/Stroke1.svg";

import InputSelect from '../components/common/InputSelect'
import OrderSummary from '../components/common/OrderSummary';
import { FiArrowLeft } from 'react-icons/fi';
import Footer from '../components/common/Footer';
import InputText from '../components/common/InputText';
import InputPhone from "../components/common/InputPhone";
import CustomButton from '../components/common/CustomButton';

const stateList = ['Select your city',"Maharashtra","Karnataka","Tamil Nadu"]
const cityList=['Select your city',"Mumbai","Bangalore","Chennai"]
const deliveryType=["Site pickup ( 11:30 am  - 8:30 pm )","Offline-Fulltime"]
const paymentMode=["Online Full Payment","Card Payment","UPI"]

export default function Delivery() {
  return (
    <div>
      <div className="grid grid-cols-10 gap-3 mt-[40px]">
        <div className="col-span-8 ml-[20px] ">
          <div className="border-light_graycolor border-b-[1px] py-[20px] flex items-center justify-between">
            <div className="flex items-center">
              <Stroke1 className="inline-block text-[30px]  mt-[6px] mr-[20px]" />
              <h1 className="not-italic inline-block font-normal text-4xl leading-[44px] text-nero font-Rufina_Regular ">
                Delivery
              </h1>
            </div>
            <h3 className="not-italic font-normal text-2xl leading-[30px] text-nero inline-block float-right font-Rufina_Regular">
              3 Items
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-10 mt-[30px]">
            <div className="col-span-1">
              <InputText
                type="text"
                label="Name"
                placeholder={"Enter your First name"}
                name="FirstName"
              />
            </div>
            <div className="col-span-1">
              <InputText
                type="text"
                label={"\u00A0"}
                placeholder={"Enter your Last name"}
                name="LastName"
              />
            </div>
            <div className="col-span-2">
              <InputText
                type="text"
                label="Address"
                placeholder={"Brief your address"}
                name="Address"
              />
            </div>
            <div className="col-span-1">
              <InputText
                type="text"
                label="Landmark"
                placeholder={"Enter your Landmark"}
                name="Landmark"
              />
            </div>
            <div className="col-span-1">
              <InputText
                type="text"
                label="Pincode"
                placeholder={"Enter your Pincode"}
                name="Pincode"
              />
            </div>
            <div className="col-span-1">
              <InputSelect label="City" optionList={cityList} name="City" />
            </div>
            <div className="col-span-1">
              <InputSelect label="State" name="State" optionList={stateList} />
            </div>
            <div className="col-span-1">
              <InputText
                type="text"
                label="Country"
                name="Country"
                disable={true}
                placeholder={"India"}
              />
            </div>
            <div className="col-span-1">
              <InputPhone type="number" label="Mobile number" name="Mobile" />
            </div>
            <div className="col-span-1">
              <InputSelect
                label="Delivery Mode"
                optionList={deliveryType}
                name="delivery"
              />
            </div>
            <div className="col-span-1">
              <InputSelect
                optionList={paymentMode}
                label="Payment Method"
                name="Payment"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-[50px]">
            <CustomButton
              type="primary"
              primaryBgColor="bg-shadeYellow"
              primaryTextColor="text-white"
              customStyle={"font-Poppins w-[30%] py-[8px]"}
            >
              Proceed to Payment
            </CustomButton>
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
      <div className='mb-[180px]'>
        <div className="flex items-center p-[20px] mt-[40px] ">
          <FiArrowLeft className="inline-block text-[25px] mt-[6px]" />
          <h1 className="not-italic inline-block font-normal text-[24px] leading-[44px] text-nero pl-[10px]">
            Continue Shopping
          </h1>
        </div>
      </div>
      
    </div>
  );
}
