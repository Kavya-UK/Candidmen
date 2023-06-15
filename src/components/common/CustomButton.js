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
  primaryBgColor = "bg-shadeYellow",
  secondaryBgColor = "bg-trasparent",
  count,
}) => {
  let styles = "";
  let iconStyle = "";

  switch (type) {
    case "primary":
      styles = `flex justify-center items-center ${primaryBgColor} ring-button ${primaryTextColor}`;
      break;
    case "secondary":
      styles = `flex justify-center items-center border-2 ${borderColor} ${secondaryTextColor} ${secondaryBgColor} `;
      break;
    case "text":
      styles = `flex justify-center items-center text-darekBlue bg-trasparent `;
      break;
    case "icon":
      styles = `flex justify-center items-center bg-trasparent ${primaryTextColor} relative`;
      break;

    default:
      break;
  }

  if (disabled) {
    styles += " opacity-50 cursor-not-allowed ";
  }
  if (icon) {
    const iconPadding =
      iconPosition === "start" ? "pr-[10px] pt-[4px] " : "pl-[10px] pt-[4px] ";
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
      {count && (
        <span className="flex items-center justify-center h-[12px] w-[12px] rounded-[50%] text-white bg-darkRed text-[8px] absolute bottom-0 right-0">
          {count}
        </span>
      )}
    </button>
  );
};
export default CustomButton;