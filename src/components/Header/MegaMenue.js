"use client";
import React from "react";

const MegaMenu = ({disableDropdown=false, heading = "rings" ,onClick,children}) => {
  return (
    <div className="relative group">
      {/* MegaMenu Trigger */}
      <div
        className="h-full flex items-center space-x-[5px] flex-row dark:bg-gray-800 tracking-tight text-[0.8rem] font-normal  uppercase text-custom-blue dark:text-white cursor-pointer"
      >
        <div className={` border-b-0 ${disableDropdown?"group-hover:underline":"heading-after"} flex duration-300 ease-in px-2 items-center border-transparent group-hover:border-black dark:border-gray-700 h-full`}>
          <span onClick={()=>{
            if (disableDropdown){
              if (onClick) onClick()
            }
          }}>{heading}</span>
        </div>
       {!disableDropdown && <div className="group-hover:rotate-0 rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            className="icon__caret-up"
            aria-label="icon caret-up"
            width="6"
            height="6"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.025 4.71a.1.1 0 00-.142 0L.03 14.562a.1.1 0 000 .141l.56.571a.1.1 0 00.142.001l9.15-9.15a.1.1 0 01.141 0l9.144 9.144a.1.1 0 00.141.001l.571-.56a.1.1 0 00.001-.142l-9.585-9.585-.269-.274z"
              fill="#27251F"
            />
          </svg>
        </div>}
      </div>

      {/* MegaMenu Content */}
     {!disableDropdown && <div
        className="fixed left-0 w-full bg-white dark:bg-gray-900 opacity-0 h-0 pointer-events-none group-hover:h-max group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transform transition-all duration-100"
      >
       {children}
      </div>}
    </div>
  );
};

export default MegaMenu;
