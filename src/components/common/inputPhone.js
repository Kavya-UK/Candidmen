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
          className={` h-[40px] sm:h-[48px] outline-none ${bgColor} ${
            disabled && "text-authGrey2"
          }
               w-full ${placeholderStyle} ${borderStyle} mt-2 rounded-md pl-10  sm:pl-12`}
        />
        <div
          className={`absolute left-1 top-[16.5px] sm:top-[21px] w-3 text-[16px] ${
            disabled ? "text-authGrey2" : "text-authGrey"
          } ltr:pl-2 rtl:pr-2`}
        >
          +91
        </div>
      </div>
      <ErrorMessage errorFor={name} errorMessage={errorMessage} />
    </div>
  );
};
export default InputPhone;