import NextPrev from "@/shared/NextPrev/NextPrev";
import React, { HTMLAttributes, ReactNode } from "react";



const Heading = ({
  children,
  desc = "Discover more.",
  className = "mx-[20px] text-neutral-900 dark:text-neutral-50",
  isCenter = false,
  hasNextPrev = false,
  ...args
}) => {
  return (
    <div
      className={`nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${className}`}
    >
      <div
        className={
          isCenter ? "text-center w-full max-w-2xl mx-auto mb-4" : "max-w-2xl"
        }
      >
        <h2 className={`text-sm md:text-4xl font-semibold`} {...args}>
          {children || `Section Heading`}
        </h2>
        {desc && (
          <span className="md:mt-4 font-normal block text-xs sm:text-lg text-neutral-500 dark:text-neutral-400">
            {desc}
          </span>
        )}
      </div>
      {hasNextPrev && !isCenter && (
        <div className="mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
          <NextPrev onClickNext={() => {}} onClickPrev={() => {}} />
        </div>
      )}
    </div>
  );
};

export default Heading;
