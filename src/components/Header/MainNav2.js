"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/shared/Logo/Logo";
import MenuBar from "@/shared/MenuBar/MenuBar";
import LangDropdown from "./LangDropdown";
import AvatarDropdown from "./AvatarDropdown";
import TemplatesDropdown from "./TemplatesDropdown";
import DropdownCategories from "./DropdownCategories";
import CartDropdown from "./CartDropdown";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import WishlistDropDown from "./WisthListDropdown";
import StoreLocation from "./StoreLocation";
import { axiosInstance } from "@/axios";
import MegaMenu from "./MegaMenue";
import SearchDropdown from "./SearchDropdown";


const MenuBody = () => {
  const [collectionData, setCollectionData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const getCollections = async () => {
      const res = await axiosInstance.get("live-collections/");
      setCollectionData(res.data);
    };

    if (collectionData.length === 0) {
      getCollections();
    }
  }, [collectionData]);

  return (
    <div className="grid h-full border-box grid-cols-4 gap-4 pt-[40px] p-[15px]">
      <div className="w-[130px] bg-blue border-box">
        <h3 className="text-[1rem] uppercase mb-[10px] font-medium cursor-pointer">
          Shop By Collection
        </h3>
        {/* Adjust the layout to two columns if there are too many collections */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 text-[11px] w-max uppercase font-normal text-custom-sub">
          {collectionData.map((data, index) => (
            <li key={index}>
              <h2 onClick={()=>{
                router.push(`/collection/${data.id}`)
              }} className="hover:underline cursor-pointer hover:text-custom-blue">
                {data.name}
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


const MainNav2 = ({ className = "" }) => {
  const [showSearchForm, setShowSearchForm] = useState(false);
  const router = useRouter();
  const { user } = useAuth();
  const [categoriesData, setCategoriesData] = useState([]);
  const [collectionData, setCollectionData] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const mobileInputRef = useRef()
  const inputref = useRef()
  let lastScrollY = 0;

  // Fetch Categories Data
  useEffect(() => {
    const getCategories = async () => {
      const res = await axiosInstance.get("live-categories/");
      setCategoriesData(res.data);
    };

    if (categoriesData.length === 0) {
      getCategories();
    }
  }, [categoriesData]);

  // Fetch Collections Data
  useEffect(() => {
    const getCollections = async () => {
      const res = await axiosInstance.get("live-collections/");
      setCollectionData(res.data);
    };

    if (collectionData.length === 0) {
      getCollections();
    }
  }, [collectionData]);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {


        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // Scrolling down
        } else {
          setIsVisible(true); // Scrolling up
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




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
        <div className="drop-shadow-sm border uppercase border-inputborder dark:bg-slate-800 flex items-center px-2 w-full h-full rounded-sm">
          {renderMagnifyingGlassIcon()}
          <input
            type="text"
            ref={mobileInputRef}
            placeholder="Type and press enter"
            className="border-none bg-transparent uppercase focus:outline-none focus:ring-0 w-full text-xs"
            autoFocus
          />
        </div>
        <input type="submit" hidden value="" />
      </form>
    );
  };


  const renderMagnifyingGlassIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      className="icon__magnifying-glass"
      aria-label="icon magnifying-glass"
      width="25"
      height="25"
      viewBox="0 0 19.8 19.8"
      fill="#27251F"
    >
      <path d="M13.4 12.8c1.2-1.4 1.9-3.1 1.9-5.1 0-4.2-3.4-7.7-7.7-7.7S0 3.4 0 7.7s3.4 7.7 7.7 7.7c2 0 3.7-.7 5.1-1.9l6.4 6.4.6-.6-6.4-6.5zm-5.7 1.7C4 14.5.9 11.5.9 7.7S3.9.9 7.7.9s6.8 3 6.8 6.8-3.1 6.8-6.8 6.8z" />
    </svg>
  );

  const renderSearchForm = () => (
    <form
      className="h-3/4 w-[13rem] py-1 hidden md:block font-normal mx-4 dark:text-slate-100"
      onSubmit={(e) => {
        e.preventDefault();
        if (inputref.current) {
          router.push(`/search?s=${inputref.current.value}`);
          inputref.current.blur();
        }
      }}
    >
      <div className="flex items-center border text-placeholder font-normal focus-within:text-custom-blue border-solid border-inputborder focus-within:border-custom-blue duration-300 group space-x-1.5 px-3 h-full">
        <input
          ref={inputref}
          type="text"
          placeholder="Search"
          className="border-none placeholder:text-placeholder duration-300 focus:placeholder:text-custom-blue bg-transparent outline-none focus:outline-none focus:ring-0 w-full text-sm text-black dark:text-slate-100"
        />
        {renderMagnifyingGlassIcon()}
      </div>
      <input type="submit" hidden value="" />
    </form>
  );

  return (
    <>
      <div className="w-full px-[15px] h-[30px] bg-black hidden md:flex justify-center items-center">
        <h2 className=" text-[11px] text-white cursor-pointer font-normal hover:underline ">
          Launch Discount <span className="font-bold">20%</span> off
        </h2>
      </div>
      <div
        className={`nc-MainNav2  z-40 sticky top-0 w-full transition-transform duration-300 bg-white dark:bg-slate-900 ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >

        <div className="px-[15px] h-[3rem] md:h-[4.4rem] flex justify-between">
          <div className="flex lg:flex-1 md:mb-[10px]">
            <div className="flex md:hidden">
              <MenuBar />
            </div>
            <Logo />
          </div>

          <div className="flex-1 flex items-center justify-end">
            {renderSearchForm()}
            <div className="block md:hidden"> <SearchDropdown></SearchDropdown></div>
            <WishlistDropDown />
            {/* <StoreLocation /> */}
            <AvatarDropdown />
            <CartDropdown />
          </div>
        </div>
        <div className="w-full h-[5px]  bg-black from-white via-black to-white"></div>
        {/* <div className="h-12 flex md:hidden justify-center">
        <div className="lg:hidden md:hidden flex w-full">
          {renderSearchFormMobile()}
        </div>
      </div> */}
        <div className="w-full px-[15px] h-12 border-b border-inputborder hidden md:flex justify-center">
          <div className="lg:flex md:flex space-x-[20px] hidden w-full">
            <MegaMenu disableDropdown={true} heading="shop all" onClick={() => {
              router.push('/search')
            }} />
            <MegaMenu heading="sale" >
              <MenuBody />
            </MegaMenu>
            <MegaMenu heading="rings" >
              <MenuBody />
            </MegaMenu>
            <MegaMenu heading="bracelet" >
              <MenuBody />
            </MegaMenu>
            <MegaMenu heading="Necklace" >
              <MenuBody />
            </MegaMenu>
            <MegaMenu heading="pendants" >
              <MenuBody />
            </MegaMenu>
            <MegaMenu heading="All collections" >
              <MenuBody />
            </MegaMenu>
            <MegaMenu heading="earrings" >
              <MenuBody />
            </MegaMenu>
            <MegaMenu heading="new in" >
              <MenuBody />
            </MegaMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav2;
