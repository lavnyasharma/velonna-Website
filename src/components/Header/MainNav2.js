"use client";

import React, { FC, useState } from "react";
import Logo from "@/shared/Logo/Logo";
import MenuBar from "@/shared/MenuBar/MenuBar";
import LangDropdown from "./LangDropdown";
import AvatarDropdown from "./AvatarDropdown";
import TemplatesDropdown from "./TemplatesDropdown";
import DropdownCategories from "./DropdownCategories";
import CartDropdown from "./CartDropdown";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import SearchDropdown from "./SearchDropdown";



const MainNav2 = ({ className = "" }) => {
  const [showSearchForm, setShowSearchForm] = useState(false);
  const router = useRouter();
  const { user } = useAuth()

  const renderMagnifyingGlassIcon = () => {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };


  const renderSearchFormMobile = () => {
    return (
      <form
        className="flex-1 py-[8px] px-4 text-slate-900  dark:text-slate-100"
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/search");
        }}
      >
        <div className="drop-shadow-sm border border-black dark:bg-slate-800 flex items-center px-2 w-full h-full rounded-full">
          {renderMagnifyingGlassIcon()}
          <input
            type="text"
            placeholder="Type and press enter"
            className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-xs"
            autoFocus
          />

        </div>
        <input type="submit" hidden value="" />
      </form>
    );
  };

  const renderSearchForm = () => {
    return (
      <form
        className="flex-1 py-2 text-slate-900 h-20 dark:text-slate-100"
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/search");
        }}
      >
        <div className="bg-slate-50 dark:bg-slate-800 flex items-center space-x-1.5 px-5 h-full rounded">
          {renderMagnifyingGlassIcon()}
          <input
            type="text"
            placeholder="Type and press enter"
            className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-base"
            autoFocus
          />
          <button type="button" onClick={() => setShowSearchForm(false)}>
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        <input type="submit" hidden value="" />
      </form>
    );
  };

  return (
    <div className="nc-MainNav2 relative shadow-md z-10 bg-white dark:bg-slate-900 ">
      <div className="mx-[10px]">
        <div className="h-[3rem] flex justify-between">
           {/* <div className="flex items-center md:hidden flex-1">
            <MenuBar />
          </div>  */}

          <div className="flex lg:flex-1 items-center space-x-3 sm:space-x-8">
          <div className="flex md:hidden">
            <MenuBar />
          </div> 
            <Logo />
            {/* {!showSearchForm && (
              <div className="hidden md:block h-10 border-l border-slate-200 dark:border-slate-700"></div>
            )} */}
            {/* {!showSearchForm && (
              <div className="hidden md:block">
                <DropdownCategories />
              </div>
            )} */}
          </div>


          <div className="flex-[2]  lg:flex md:flex hidden !mx-auto">
            {renderSearchForm()}
          </div>

          <div className="flex-1 flex items-center justify-end ">
            {/* {user ? "" : "Login"} */}

            {/* {!showSearchForm && (
              <button
                className="hidden lg:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none items-center justify-center"
                onClick={() => setShowSearchForm(!showSearchForm)}
              >
                {renderMagnifyingGlassIcon()}
              </button>
            )} */}
            {user ? <AvatarDropdown /> : ""}
            <CartDropdown />
            
          </div>
          
          {/* <div className="flex-1 flex items-center justify-end ">
            {user ? "" : "Login"}
            {!showSearchForm && <TemplatesDropdown />}
            {!showSearchForm && <LangDropdown />}
            {!showSearchForm && (
              <button
                className="hidden lg:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none items-center justify-center"
                onClick={() => setShowSearchForm(!showSearchForm)}
              >
                {renderMagnifyingGlassIcon()}
              </button>
            )}
           
            <CartDropdown />
          </div> */}
        </div>
        <div className="h-12 hidden md:flex  mx-[21rem] gap-[1rem] justify-start">
          <TemplatesDropdown />

          <LangDropdown />
        </div>
        <div className="h-12 flex md:hidden justify-center">
          <div className="lg:hidden md:hidden flex w-full">
            {renderSearchFormMobile()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav2;
