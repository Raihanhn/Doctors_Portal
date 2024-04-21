import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  lg: "text-4xl font-normal md:text-[34px] sm:text-[32px]",
  s: "text-base font-normal",
  xl: "text-[64px] font-medium md:text-5xl",
  md: "text-xl font-normal",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-ibmplexsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
