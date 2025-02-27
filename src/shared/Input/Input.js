"use client"
import React, { useId } from "react";

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(
  (
    {
      onChange = () => { },
      className = "",
      
      sizeClass = "h-5",
      fontClass = "text-[12px] font-normal",
      rounded = "",
      value = "",
      type = "text",
      label = "test",
      required = true,
      additionalComponent = "",
      ...args
    },
    ref
  ) => {
    const id = useId();

    return (
      <div className={`border-custom-blue border bg-white flex flex-col px-2 pb-1 ${className}`}>
        <label htmlFor={id} className="text-[10px] font-normal text-placeholder uppercase">
          {label} {required ? "*" : ""}
        </label>

        <div className="flex h-full items-center">
          <input
            ref={ref}
            onChange={(e) => onChange(e, e.target.value)}
            id={id}
            type={type}
            value={value} // Ensures controlled behavior
            className={`block py-2 px-0 w-full border-0 outline-none h-full ring-0 focus-within:outline-none focus:ring-0 ${rounded} ${fontClass} ${sizeClass}`}
            {...args}
          />
          {additionalComponent}
        </div>
      </div>
    );
  }
);

export default Input;
