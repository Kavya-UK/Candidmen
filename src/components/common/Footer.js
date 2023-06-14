import React from "react";
import FooterInfo from "./FooterInfo";
import { BiSearch, BiChevronDown } from "react-icons/bi";
import {FiPhoneCall} from "react-icons/fi"
import {MdOutlineStore} from "react-icons/md"
import Subscribe from "../home/SubscribeLetter";

export default function Footer() {

  const InformationLink=["Our Story","FAQs","About us","Contact us"]
  const PoliciesLink=["Return Policy","Cancellation Policy","Privacy Policy","Terms & Condition"]
  const PartnersLink=["Venue Partner","Co-Work Space"]
  return (
    <div className="h-[449px] pt-[90px] pb-[20px] pl-[70px] bg-darekBlue relative">
      <div className="bg-red-300 w-full">
        <Subscribe />
      </div>
      <div className="grid grid-cols-12 mt-[30px]">
        <div className="col-span-4">
          <img
            src={require("../../assets/header/user.png")}
            alt=""
            className="rounded-[50%] w-[40px] inline-block"
          />
          <span className="pl-[10px] text-white not-italic font-medium text-xl lg:text-2xl leading-9 font-Inter">
            Candidmen
          </span>

          <p className="not-italic font-Inter font-normal text-lg leading-[22px] text-white mt-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
            cursus sed nunc eget dictum Sed ornare cursus sed nunc eget dictumd
            nunc eget dictum Sed ornare cursus sed nunc eget dictum{" "}
          </p>
          <div className="mt-[30px]">
            <span className="text-white p-[20px]">
              <BiSearch className="inline-block" />
            </span>
            <span className="text-white p-[20px]">
              <BiSearch className="inline-block" />
            </span>
            <span className="text-white p-[20px]">
              <BiSearch className="inline-block" />
            </span>
            <span className="text-white p-[20px]">
              <BiSearch className="inline-block" />
            </span>
          </div>

          <div className="inline-block">
            <div className="h-full flex justify-center items-center px-[10px] py-[10px]">
              <span className="text-suvaGray not-italic font-normal text-base leading-6">
                Banglore
              </span>
              <span className="">
                <BiChevronDown className="text-[30px] text-shadeYellow" />
              </span>

              <span className="ml-[15px]">
                <FiPhoneCall className="text-[20px] text-shadeYellow" />
              </span>
              <span className="text-suvaGray not-italic font-normal text-base leading-6 ml-[6px]">
                7676269920
              </span>
              <span className="ml-[15px]">
                <MdOutlineStore className="text-[20px] text-shadeYellow" />
              </span>
              <span className="text-suvaGray not-italic font-normal text-base leading-6 ml-[6px]">
                Jayanagar
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-2 pl-[40px] ">
          <FooterInfo title="Information" links={InformationLink} />
        </div>
        <div className="col-span-2 ">
          <FooterInfo title="Policies" links={PoliciesLink} />
        </div>
        <div className="col-span-2 ">
          <FooterInfo title="Partners" links={PartnersLink} />
        </div>
      </div>
    </div>
  );
}
