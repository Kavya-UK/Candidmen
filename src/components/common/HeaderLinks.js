import React from 'react'
import { Link } from 'react-router-dom';

export default function HeaderLinks({ selected }) {
  return (
    <ul className="h-full flex justify-center items-center gap-[15px] not-italic font-normal text-base leading-6 text-contentBlack">
      <li
        className={`${
          selected === "Home"
            ? "text-shadeYellow font-semibold underline decoration-2 underline-offset-2"
            : ""
        }`}
      >
        <Link to="/home">Home</Link>
      </li>
      <li
        className={`${
          selected === "Shop"
            ? "text-shadeYellow font-semibold underline decoration-2 underline-offset-2"
            : ""
        }`}
      >
        <Link to="/shop">Shop</Link>
      </li>
      <li
        className={`${
          selected === "Collection"
            ? "text-shadeYellow font-semibold underline decoration-2 underline-offset-2"
            : ""
        }`}
      >
        Collection
      </li>
      <li
        className={`${
          selected === "Blogs"
            ? "text-shadeYellow font-semibold underline decoration-2 underline-offset-2"
            : ""
        }`}
      >
        Blogs
      </li>
      <li
        className={`${
          selected === "About"
            ? "text-shadeYellow font-semibold underline decoration-2 underline-offset-2"
            : ""
        }`}
      >
        About
      </li>
    </ul>
  );
}
