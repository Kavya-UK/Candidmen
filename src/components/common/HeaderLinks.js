import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function HeaderLinks({ selected }) {
  const navigate=useNavigate();
  return (
    <ul className="h-full flex justify-center items-center gap-[15px] not-italic font-normal text-base leading-6 text-contentBlack">
      <li
        className={`${
          selected === "/"
            ? "text-shadeYellow font-semibold underline decoration-2 underline-offset-2"
            : ""
        }`}
      >
        <span onClick={()=>navigate("/")}>Home</span>
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
