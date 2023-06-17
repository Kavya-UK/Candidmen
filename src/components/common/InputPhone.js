import React from 'react'
import Label from './LabelComponent';
import ErrorMessage from './ErrorMessage';

const InputPhone = ({
  placeholder,
  label,
  name,
  disabled,
  errorMessage,
  labelSize,
  borderColor,
  bgColor,
}) => {
  const placeholderStyle = 'placeholder:text-[14px] sm:placeholder:text-authLabel  placeholder:text-authGrey';
  const borderStyle = "border-b-2 border-solid border-black";
  return (
    <div className="flex flex-col w-full">
      <Label label={label} labelFor={name} textSize={labelSize} />
      <div className="relative w-full">
        <input
          placeholder={placeholder}
          name={name}
          type={"number"}
          disabled={disabled}
          className={`  pb-[10px] pl-[6px] outline-none ${bgColor} ${
            disabled && "text-authGrey2"
          }
               w-full ${placeholderStyle} ${borderStyle}  rounded-md pl-10  sm:pl-12`}
        />
        <div
          className={`absolute left-1 top-[1px] w-3 text-[16px] ${
            disabled ? "text-authGrey2" : "text-authGrey"
          } `}
        >
          +91
        </div>
      </div>
      <ErrorMessage errorFor={name} errorMessage={errorMessage} />
    </div>
  );
};
export default InputPhone;