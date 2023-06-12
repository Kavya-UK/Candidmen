import React from 'react'

export default function SaleLinks({ selected = "All" }) {
  return (
    <ul className="h-full flex items-center  gap-[15px] not-italic font-normal text-base leading-6 text-contentBlack">
      <li
        className={`${
          selected === "All"
            ? "text-shadeYellow font-semibold underline decoration-2 underline-offset-2"
            : ""
        }`}
      >
        All
      </li>
      <li
        className={`${
          selected === "Graduation/Farewell"
            ? "text-shadeYellow font-semibold underline decoration-2 underline-offset-2"
            : ""
        }`}
      >
        Graduation/Farewell
      </li>
      <li
        className={`${
          selected === "Office Event"
            ? "text-shadeYellow font-semibold underline decoration-2 underline-offset-2"
            : ""
        }`}
      >
        Office Event
      </li>
      <li
        className={`${
          selected === "Ethnic Day"
            ? "text-shadeYellow font-semibold underline decoration-2 underline-offset-2"
            : ""
        }`}
      >
        Ethnic Day
      </li>
      <li
        className={`${
          selected === "Party Wear"
            ? "text-shadeYellow font-semibold underline decoration-2 underline-offset-2"
            : ""
        }`}
      >
        Party Wear
      </li>
      <li
        className={`${
          selected === "Wedding"
            ? "text-shadeYellow font-semibold underline decoration-2 underline-offset-2"
            : ""
        }`}
      >
        Wedding
      </li>
    </ul>
  );
}
