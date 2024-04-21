import React from "react";

const sizes = {
  "3xl": "text-[55px] font-bold md:text-[47px] sm:text-[41px]",
  "2xl": "text-5xl font-bold md:text-[44px] sm:text-[38px]",
  "5xl": "text-8xl font-bold md:text-5xl",
  xl: "text-[40px] font-semibold md:text-[38px] sm:text-4xl",
  "4xl": "text-[64px] font-bold md:text-5xl",
  s: "text-2xl font-bold md:text-[22px]",
  md: "text-[32px] font-bold md:text-3xl sm:text-[28px]",
  xs: "text-base font-semibold",
  lg: "text-4xl font-bold md:text-[34px] sm:text-[32px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-ibmplexsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
