import React from "react";
import ErrorMessage from "./ErrorMessage"
import Label from "./LabelComponent";
const InputText = ({ type, placeholder, label, name, errorMessage }) => {
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
        className="w-full border-b-2 rounded-[8px] border-solid border-black outline-none	placeholder-grayShade"
      />
      <ErrorMessage errorFor={name} errorMessage={errorMessage} />
    </div>
  );
};
export default InputText;
