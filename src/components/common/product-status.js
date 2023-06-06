import React from 'react'
import CustomButton from './customButton';
export default function ProductStatus({
  status,
  imgSrc,
  productTitle,
  bookingDate,
  deliveredDate,
  returnDate,
  rentPrice,
}) {
  const statusBar =
    status === "Delivered" ? `border-productGreen` : "border-productYellow";
  const titleFont =
    status === "Delivered" ? `text-productGreen` : "text-productYellow";
  return (
    <div className={`border-l-4 ${statusBar} pb-[15px] pt-[5px]`}>
      <h4
        className={`${titleFont} text-[16px] pl-[10px] font-semibold leading-[24px]`}
      >
        {status}
      </h4>
      <div className="grid grid-cols-6 gap-2 pl-[20px]">
        <div className="col-span-1 pt-[10px] h-[130px]">
          <img
            src={require(`../../${imgSrc}`)}
            alt={"leftEnd"}
            className=" h-full w-full object-cover"
          />
        </div>
        <div className="col-span-3">
          <h4 className="text-black text-[14px] sm:text-[16px] font-medium">
            {productTitle}
          </h4>
          {deliveredDate && (
            <p className="text-black text-[10px] sm:text-[12px] font-light pt-[10px]">
              Delivered on : <span className="pl-2">{deliveredDate}</span>
            </p>
          )}
          {bookingDate && (
            <p className="text-black text-[10px] sm:text-[12px] font-light pt-[10px]">
              Booked Date : <span className="pl-2">{bookingDate}</span>
            </p>
          )}
          <p className="text-black text-[10px] sm:text-[12px] font-light">
            Return Date : <span className="pl-2">{returnDate}</span>
          </p>
          <p className="text-black text-[10px] sm:text-[12px] font-normal pt-[20px] leading-[18px]">
            Rent Price :
            <span className="text-[14px] sm:text-[16px] font-semibold pl-2">
              ₹{rentPrice}
            </span>
          </p>
        </div>
        <div className="col-span-2 ">
          <div className="flex items-end h-full flex-col justify-end gap-4">
            {status !== "Delivered" && (
              <CustomButton
                type="secondary"
                iconPosition="start"
                secondaryTextColor="text-cancelRed"
                borderColor="border-cancelRed"
                customStyle="py-[8px] font-semibold "
                fontSize="text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[20px]"
              >
                Cancel Order
              </CustomButton>
            )}
            <CustomButton
              type="primary"
              primaryTextColor="text-white"
              iconPosition="start"
              customStyle="py-[8px] font-semibold"
              fontSize="text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[20px]"
            >
              View Details
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
