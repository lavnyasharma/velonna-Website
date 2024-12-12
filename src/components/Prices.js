import React, { FC } from "react";



const Prices = ({
  className = "",
  price = 33,
  contentClass = "py-1 px-2  text-sm font-medium",
}) => {
  return (
    <div className={`${className}`}>
      <div
        className={`flex items-center ${contentClass}`}
      >
        <span className="text-black-500 !leading-none"> &#8377;{String(price)}</span>
      </div>
    </div>
  );
};

export default Prices;
