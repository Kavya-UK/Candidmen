import React from 'react'

const CustomButton = ({
  handleClick,
  children,
  type,
  icon,
  borderRadius,
  borderColor = "border-darekBlue",
  fontSize,
  disabled,
  customStyle,
  iconPosition = "end",
  primaryTextColor = "text-black",
  secondaryTextColor = "text-darekBlue",
}) => {
  let styles = "";
  let iconStyle = "";

  switch (type) {
    case "primary":
      styles = `flex justify-center items-center bg-shadeYellow ring-button ${primaryTextColor}`;
      break;
    case "secondary":
      styles = `flex justify-center items-center border-2 ${borderColor} ${secondaryTextColor} bg-trasparent `;
      break;
    case "text":
      styles = `flex justify-center items-center text-darekBlue bg-trasparent `;
      break;

    default:
      break;
  }

  if (disabled) {
    styles += " opacity-50 cursor-not-allowed ";
  }
  if (icon) {
    const iconPadding = iconPosition === "start" ? "pr-[10px] " : "pl-[10px] ";
    iconStyle += children
      ? `${iconPadding} ${primaryTextColor} ${fontSize}`
      : `${fontSize}`;
  }

  borderRadius = borderRadius ? `rounded-[${borderRadius}]` : "rounded-[8px]";
  fontSize = fontSize ? `${fontSize}` : "text-[18px] lg:text-[20px]";

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={` ${styles} ${borderRadius} ${fontSize} ${customStyle} w-full`}
    >
      {iconPosition === "start" && (
        <span className={`${iconStyle}`}>{icon}</span>
      )}
      {children}
      {iconPosition === "end" && <span className={`${iconStyle}`}>{icon}</span>}
    </button>
  );
};
export default CustomButton;