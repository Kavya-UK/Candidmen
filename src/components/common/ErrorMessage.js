import React from "react";
import { useTranslation } from "react-i18next";

const ErrorMessage = ({ errorMessage, errorFor }) => {
  const { t } = useTranslation("", { keyPrefix: "Validations" });

  return (
    <label
      htmlFor={errorFor}
      className="text-[red] font-normal h-[1rem] text-[12px] sm:text-[14px]"
    >
      {errorMessage && t(errorMessage)}
    </label>
  );
};


export default ErrorMessage;
