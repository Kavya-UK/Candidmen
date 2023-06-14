import React from 'react'
import './ProductSummary.css'
import { ReactComponent as FavoriteIcon } from "../../assets/icons/favourite.svg";
export default function ProductSummary({
  productImg,
  title,
  price,
  isRent,
  rentPrice,
  discount,
}) {
  return (
    <div className=" h-full p-[5px]">
      <div className="relative h-[80%] ">
        <img
          src={require(`../../${productImg}`)}
          alt="product-img"
          className="w-full h-full object-cover absolute"
        />
        <p className={`absolute right-0 ${discount ? "block" : "hidden"}`}>
          <aside class="ribbon3">{`${discount}% off`}</aside>
        </p>
        <aside className="absolute right-2 bottom-2 w-[35px] h-[35px] bg-white rounded-[50%] flex justify-center items-center">
          <FavoriteIcon />
        </aside>
      </div>
      <div>
        <h3 className="not-italic font-normal text-[18px] leading-[25px] font-Rufina_Regular text-nero">
          {title}
        </h3>
        <p className="flex justify-between px-[10px]">
          <span
            className={
              " " + isRent
                ? " line-through not-italic font-normal text-[18px] leading-9 font-Poppins text-nero"
                : "font-medium"
            }
          >{`₹${price}`}</span>
          {isRent && (
            <>
              <span className="not-italic font-medium text-[18px] leading-9 font-Poppins text-darekBlue">{`Rent - ₹${rentPrice}`}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
