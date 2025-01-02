import React from "react";
import NextPrev from "@/shared/NextPrev/NextPrev";
import ScrollAnimation from "../ScrollAnimation";

const solutions = [
  {
    name: "last 24 hours",
    href: "##",
  },
  {
    name: "last 7 days",
    href: "##",
  },
  {
    name: "last 30 days",
    href: "##",
  },
];

const Heading = ({
  children,
  desc = "",
  className = "text-neutral-900  dark:text-neutral-50 mb-[15px] md:mb-[20px]",
  isCenter = false,
  hasNextPrev = false,
  fontClass = "text-[18px] PanD-Regular uppercase md:text-[28px] font-extrabold",
  rightDescText,
  rightPopoverOptions = solutions,
  ...args
}) => {
  return (
    <ScrollAnimation duration="2000ms">
      <div
        className={`nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${className}`}
      >
        <div
          className={
            isCenter
              ? "flex flex-col items-center text-center w-full mx-auto"
              : ""
          }
        >
          <h2
            className={`${isCenter ? "justify-center " : "font-[700]"} ${fontClass}`}
            {...args}
          >
            {children || `Section Heading`}
            {rightDescText && (
              <>
                <span className="">{` `}</span>
                {/* <span className="text-neutral-500 dark:text-neutral-400">
                  {rightDescText}
                </span> */}
              </>
            )}
          </h2>
          {!!desc && (
            <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
              {desc}
            </span>
          )}
        </div>
        {hasNextPrev && !isCenter && (
          <div className="mt-4 flex justify-end sm:ms-2 sm:mt-0 flex-shrink-0">
            <NextPrev onClickNext={() => { }} onClickPrev={() => { }} />
          </div>
        )}
      </div>
    </ScrollAnimation>
  );
};

export default Heading;
