"use client"
import React, { FC, SelectHTMLAttributes, useId } from "react";


const Select = ({
  className = "",
  sizeClass = "h-5",
  label = "test",
  placeholder = "select",
  children,
  ...args
}) => {
  const id = useId();
  return (
    <div className={`border-custom-blue border bg-white flex flex-col pb-1 ${className}`}>
      <label htmlFor={id} className="text-[10px] px-2 font-normal text-placeholder uppercase">{label}</label>
      <select
        placeholder={placeholder}
        className={`nc-Select px-2 text-[12px] font-normal block w-full border-0 outline-none ring-0 focus-within:outline-none focus:ring-0 ${sizeClass}`}
        id={id}
        {...args}

      >
        {children}
      </select>
    </div>
  );
};

export default Select;
