import React from "react";

export default function RentalPolicy() {
  return (
    <div className="bg-returnPolicy bg-cover py-[60px] px-[30px] lg:px-[50px] xl:px-[80px]">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-2">
          <img src={require("../../assets/home/rent.png")} alt="rent" />
        </div>
        <div className="col-span-10">
          <h2 className="not-italic font-semibold text-5xl leading-[72px] text-white">
            Rent
          </h2>
          <h4 className="not-italic font-medium text-2xl leading-9 text-[#A8A8A8]">
            Select styles you love. Book for a future date (directly in website
            or in Bangalore/ Hyderabad store ). Don’t worry about fitting in
            online booking , we will send the selected styles in multiple sizes.
          </h4>
        </div>
      </div>
      <div className="grid grid-cols-12 text-right gap-8">
        <div className="col-span-10">
          <h2 className="not-italic font-semibold text-5xl leading-[72px] text-white">
            Wear
          </h2>
          <h4 className="not-italic font-medium text-2xl leading-9 text-[#A8A8A8]">
            Our delivery representative will come to your doorstep with multiple
            sizes. You can try and take the size which fits the best.
          </h4>
        </div>
        <div className="col-span-2 flex justify-end">
          <img src={require("../../assets/home/wear.png")} alt="rent" />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-2">
          <img src={require("../../assets/home/return.png")} alt="rent" />
        </div>
        <div className="col-span-10">
          <h2 className="not-italic font-semibold text-5xl leading-[72px] text-white">
            Return
          </h2>
          <h4 className="not-italic font-medium text-2xl leading-9 text-[#A8A8A8]">
            Delivery across Bangalore and Hyderabad. Dry- cleaned & Sanitized.
          </h4>
        </div>
      </div>
    </div>
  );
}
