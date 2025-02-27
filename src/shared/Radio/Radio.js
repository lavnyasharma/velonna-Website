import React, { FC } from "react";



const Radio = ({
  className = "",
  name,
  id,
  onChangeFun,
  label,
  sizeClassName = "w-6 h-6",
  defaultChecked,
  add
}) => {

  return (
    <div className={`flex items-center text-sm sm:text-base ${className}`}>
      <input
        id={id}
        name={name}
        type="radio"
        className={`focus:ring-0 text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 ${sizeClassName}`}
        onChange={(e) => onChangeFun && onChangeFun(e.target.value)}
        checked={defaultChecked}
        value={id}
      />
      {label && (
        <label
          htmlFor={id}
          className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none"
          dangerouslySetInnerHTML={{ __html: label }}
        ></label>
      )}
    </div>
  );
};

export default Radio;
