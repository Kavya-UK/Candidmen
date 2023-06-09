import React from 'react'
import "../../styles/ProductSummary.css";
import { ReactComponent as FavIcon } from "../../assets/icons/FavIcon.svg";
import { useNavigate } from "react-router-dom";
export default function ProductSummary({
  productImg,
  title,
  price,
  isRent,
  rentPrice,
  discount,
  link
}) {
  const navigate = useNavigate();
  return (
    <div
      className=" h-full p-[5px]"
      onClick={link ? () => navigate(link) : () => {}}
    >
      <div className="relative h-[80%] ">
        <img
          src={require(`../../${productImg}`)}
          alt="product-img"
          className="w-full h-full object-cover absolute"
        />
        <p className={`absolute right-0 ${discount ? "block" : "hidden"}`}>
          <aside class="ribbon3">{`${discount}% off`}</aside>
        </p>
        <aside className="absolute -right-2 -bottom-2 flex justify-center items-center">
          <FavIcon />
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
