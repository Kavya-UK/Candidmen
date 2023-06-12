import React from "react";
import "./SaleProductSummary.css";
import { ReactComponent as FavoriteIcon } from "../../assets/icons/favourite.svg";
export default function SaleProductSummary({
  productImg,
  title,
  price,
  isRent,
  rentPrice,
  discount,
}) {
  return (
    <div className=" h-full p-[10px] bg-white mx-[6px]">
      <div className="relative h-[80%] ">
        <img
          src={require(`../../${productImg}`)}
          alt="product-img"
          className="w-full h-full object-cover absolute"
        />
        <p className="absolute right-0 ">
          <aside class="ribbon3">{`${discount}% off`}</aside>
        </p>
        <aside className="absolute right-2 bottom-2 w-[35px] h-[35px] bg-white rounded-[50%] flex justify-center items-center">
          <FavoriteIcon />
        </aside>
      </div>
      <div>
        <h3 className="text-[13px] font-normal font-Rufina_Regular">{title}</h3>
        <p className="flex justify-between px-[10px]">
          <span
            className={
              " " + isRent
                ? " line-through font-medium font-Poppins text-[13px]"
                : "font-medium text-[13px]"
            }
          >{`₹${price}`}</span>
          {isRent && (
            <>
              <span className=" text-[13px] font-medium font-Poppins">{`Rent ₹${rentPrice}`}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
