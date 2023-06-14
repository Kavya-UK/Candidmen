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
        <h3 className="not-italic font-normal text-base leading-5 font-Rufina_Regular text-darekBlue">
          {title}
        </h3>
        <p className="flex justify-between px-[10px]">
          <span
            className={
              " " + isRent
                ? " line-through not-italic font-normal text-xl leading-[30px] text-nero font-Poppins"
                : "font-medium text-[13px]"
            }
          >{`₹${price}`}</span>
          {isRent && (
            <>
              <span className="not-italic font-medium text-xl leading-[30px] text-darekBlue font-Poppins">{`Rent- ₹${rentPrice}`}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
