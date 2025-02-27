import Button, { ButtonProps } from "@/shared/Button/Button";
import React from "react";



const ButtonPrimary = ({
  className = "",
  fontSize = "text-lg",
  sizeClass = "py-3 px-4 sm:py-3.5 sm:px-6",
  ...args
}) => {
  return (
    <Button
      sizeClass={sizeClass}
      className={`ttnc-ButtonPrimary disabled:bg-opacity-50 bg-black dark:bg-slate-100 hover:bg-black text-slate-50 dark:text-slate-800  ${className}`}
      fontSize={fontSize}
      {...args}
    />
  );
};

export default ButtonPrimary;
