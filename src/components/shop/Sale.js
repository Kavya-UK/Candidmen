import React from "react";
import CountdownTimer from "../common/Counter";
import ProductCarousel from "../common/ProductCarousel";
import SaleProductSummary from "./SaleProducts";
import { productList } from "../../data/home/products";


export default function DealComponent() {
  const THREE_DAYS_IN_MS = .41 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className="grid grid-cols-8 h-[350px] bg-saleBg p-[20px]">
      <div className=" col-span-2 tablet:col-span-3 pr-5 relative">
        <h2 className="not-italic font-Shippori font-bold text-[40px] leading-[58px] text-white mb-[20px]">
          Preloved Sale
        </h2>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        <div className="mt-[20px] ">
          <span className="relative left-[15px] not-italic font-normal text-xl leading-[21px] text-white font-PortLligatSans">
            Hours
          </span>
          <span className="relative left-[55px] not-italic font-normal text-xl leading-[21px] text-white font-PortLligatSans">
            Minutes
          </span>
          <span className="relative left-[85px] not-italic font-normal text-xl leading-[21px] text-white font-PortLligatSans">
            Seconds
          </span>
        </div>
      </div>
      <div className="col-span-5 relative hidden tablet:block">
        <ProductCarousel
          isShop={true}
          hwProp="h-[300px] w-full"
          listItems={productList}
          ProductComponet={SaleProductSummary}
          defaultIcon={false}
        />
      </div>
    </div>
  );
}
