import React from "react";

const Label = ({
  label,
  labelFor,
  textSize = "text-[16px]",
  textWeight = "font-normal",
  labelColor = "text-black",
}) => {
  return (
    <label
      htmlFor={labelFor}
      className={`${labelColor} whitespace-nowrap mb-[15px] ${textSize} ${textWeight}`}
    >
      {label}
    </label>
  );
};
export default Label;
