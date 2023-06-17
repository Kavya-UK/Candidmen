import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function HeaderLinks() {
  const pathname = window.location.pathname
  const navigate=useNavigate();
  return (
    <ul className="h-full flex justify-center items-center gap-[15px] not-italic font-normal text-base leading-6 text-contentBlack">
      <li
        className={`${
          pathname === "/"
            ? "text-shadeYellow font-semibold underline decoration-2 underline-offset-2"
            : ""
        }`}
      >
        <Link to="/">Home</Link>
      </li>
      <li
        className={`${
          pathname === "/shop"
            ? "text-shadeYellow font-semibold underline decoration-2 underline-offset-2"
            : ""
        }`}
      >
        <Link to="/shop">Shop</Link>
      </li>
      <li
        className={`${
          pathname === "/collection" ||
          pathname === "/productlisting" ||
          pathname === "/productdescription"
            ? "text-shadeYellow font-semibold underline decoration-2 underline-offset-2"
            : ""
        }`}
      >
        <Link to="/productlisting">Collection</Link>
      </li>
      <li
        className={`${
          pathname === "/blogs"
            ? "text-shadeYellow font-semibold underline decoration-2 underline-offset-2"
            : ""
        }`}
      >
        <Link to="/blogs">Blogs</Link>
      </li>
      <li
        className={`${
          pathname === "/about"
            ? "text-shadeYellow font-semibold underline decoration-2 underline-offset-2"
            : ""
        }`}
      >
        <Link to="/about">About</Link>
        About
      </li>
    </ul>
  );
}
