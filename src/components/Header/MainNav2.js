"use client";

import React, { createRef, FC, useEffect, useState } from "react";
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
import { axiosInstance } from "@/axios";



const MainNav2 = ({ className = "" }) => {
  const [showSearchForm, setShowSearchForm] = useState(false);
  const router = useRouter();
  const { user } = useAuth()
  const mobileInputRef = createRef();
  const desktopinputref = createRef()
  const [categoriesData, setCategoriesData] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      const res = await axiosInstance.get("live-categories/").then(res => {
        setCategoriesData(res.data)
      })
    }
    if (categoriesData.length === 0) { getCategories() }
  }, [])

  const [collectionData, setCollectionData] = useState([])
  useEffect(() => {
    const getCollections = async () => {
      const res = await axiosInstance.get("live-collections/").then(res => {
        setCollectionData(res.data)
      })
    }
    if (collectionData.length === 0) { getCollections() }
    
  }, [])

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
          if (mobileInputRef.current) {
            router.push(`/search?s=${mobileInputRef.current.value}`);
            mobileInputRef.current.blur();
          }
        }}
      >
        <div className="drop-shadow-sm border border-black dark:bg-slate-800 flex items-center px-2 w-full h-full rounded-full">
          {renderMagnifyingGlassIcon()}
          <input
            type="text"
            ref={mobileInputRef}
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
    const router = useRouter();
    const placeholderTexts = [
      'Rings',
      'Solitaire',
      'Chains',
    ];
    const [placeholder, setPlaceholder] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        const currentText = placeholderTexts[currentTextIndex];
        if (charIndex < currentText.length) {
          setPlaceholder((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => {
            setPlaceholder('');
            setCharIndex(0);
            setCurrentTextIndex((prev) => (prev + 1) % placeholderTexts.length);
          }, 1500); // Delay before switching to the next text
        }
      }, 100);

      return () => clearInterval(interval);
    }, [charIndex, currentTextIndex, placeholderTexts]);

    return (
      <form
        className="h-3/4 w-[30rem] py-2 hidden md:block text-black font-bold mx-8 fancy-cut dark:text-slate-100"
        onSubmit={(e) => {
          e.preventDefault();
          if (desktopinputref.current) {
            router.push(`/search?s=${desktopinputref.current.value}`);
            desktopinputref.current.blur();
          }
        }}
      >
        <div className="bg-custom-grey flex items-center space-x-1.5 px-5 h-full rounded">
          {renderMagnifyingGlassIcon()}
          <input
            type="text"
            ref={desktopinputref}
            placeholder={placeholder} // Dynamic placeholder
            className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-sm text-black dark:text-slate-100"
            autoFocus
          />
        </div>
        <input type="submit" hidden value="" />
      </form>
    );
  };
  return (
    <div className="nc-MainNav2 relative shadow-md z-10 bg-white dark:bg-slate-900 ">
      <div className="mx-[10px]">
        <div className="h-[3rem] md:h-20 flex justify-between">
          {/* <div className="flex items-center md:hidden flex-1">
            <MenuBar />
          </div>  */}

          <div className="flex lg:flex-1 md:mb-[15px] md:ml-[20px]">
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


          <div className="h-full items-center lg:flex md:flex hidden ">
            <TemplatesDropdown data={collectionData} />
            <TemplatesDropdown data={categoriesData} name={"categories"} />

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
            )} */}{renderSearchForm()}
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
