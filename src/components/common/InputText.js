import React from "react";
import ErrorMessage from "./ErrorMessage"
import Label from "./LabelComponent";
const InputText = ({
  type,
  placeholder,
  label,
  name,
  disable = false,
  errorMessage,
}) => {
  return (
    <div>
      {label ? (
        <Label label={label} labelFor={name} labelColor="text-black" />
      ) : null}
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        disable={disable}
        className="w-full border-b-2 rounded-[8px] border-solid border-black outline-none	placeholder-grayShade pb-[10px] pl-[6px]"
      />
      <ErrorMessage errorFor={name} errorMessage={errorMessage} />
    </div>
  );
};
export default InputText;
