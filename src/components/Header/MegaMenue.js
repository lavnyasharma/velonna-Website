"use client";
import React from "react";

const MegaMenu = ({disableDropdown=false, heading = "rings" ,onClick}) => {
  return (
    <div className="relative group">
      {/* MegaMenu Trigger */}
      <div
        className="h-full flex items-center space-x-[5px] flex-row dark:bg-gray-800 text-[12px] font-semibold uppercase text-custom-blue dark:text-white cursor-pointer"
      >
        <div className={`border-b-0 ${disableDropdown?"group-hover:underline":"group-hover:border-b-2"} flex duration-300 ease-in items-center border-transparent group-hover:border-black dark:border-gray-700 h-full`}>
          <span onClick={()=>{
            if (disableDropdown){
              if (onClick) onClick()
            }
          }}>{heading}</span>
        </div>
       {!disableDropdown && <div className="group-hover:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            className="icon__caret-up"
            aria-label="icon caret-up"
            width="10"
            height="10"
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
        className="fixed left-0 shadow-[0_-2px_6px_-2px_rgba(0,0,0,0.1),0_5px_6px_-5px_rgba(0,0,0,0.1)] w-full bg-white dark:bg-gray-900 opacity-0 h-0 pointer-events-none group-hover:h-max group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transform translate-y-4 transition-all duration-300"
      >
        <div className="grid h-full border-box grid-cols-4 gap-4 pt-[40px] p-6">
          {/* Example Mega Menu Sections */}
          <div className="w-[80px] border-box">
            <h3 className="text-[1rem] uppercase font-medium cursor-pointer hover:underline mb-4">
              Shop By Category
            </h3>
            <ul className="space-y-3 text-[.75rem] capitalize font-light text-custom-sub">
              <li>
                <a href="#" className="hover:underline hover:text-custom-blue">
                  charms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-custom-blue">
                  bracelet
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-custom-blue">
                  rings
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-custom-blue">
                  charms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-custom-blue">
                  bracelet
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-custom-blue">
                  rings
                </a>
              </li><li>
                <a href="#" className="hover:underline hover:text-custom-blue">
                  charms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-custom-blue">
                  bracelet
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default MegaMenu;
