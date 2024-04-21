import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[25px]",
};
const variants = {
  fill: {
    pink_500: "bg-pink-500 text-white-A700",
    blue_800: "bg-blue-800 text-white-A700",
  },
  outline: {
    blue_800: "border-blue-800 border border-solid text-blue-800",
  },
};
const sizes = {
  md: "h-[65px] px-[35px] text-xl",
  sm: "h-[56px] px-[19px]",
  xs: "h-[51px] px-[33px] text-xl",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "blue_800",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["pink_500", "blue_800"]),
};

export { Button };
