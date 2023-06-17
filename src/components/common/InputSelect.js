import React from "react";
import Label from "./LabelComponent";
import ErrorMessage from "./ErrorMessage";

export default function InputSelect({
  type,
  optionList,
  label,
  name,
  errorMessage,
  
}) {
  return (
    <div>
      {label ? (
        <Label label={label} labelFor={name} labelColor="text-black" />
      ) : null}
      <select
        name={name}
        id={name}
        type={type}
        className="select-option w-full border-b-2 rounded-[8px] border-solid border-black outline-none	placeholder-grayShade pb-[10px] pl-[6px]"
      >
        {optionList.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <ErrorMessage errorFor={name} errorMessage={errorMessage} />
    </div>
  );
}
