"use client";

import React, { useEffect, useState } from "react";
import ButtonClose from "@/shared/ButtonClose/ButtonClose";
import Logo from "@/shared/Logo/Logo";
import { Disclosure } from "@/app/headlessui";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ncNanoId from "@/utils/ncNanoId";
import { axiosInstance } from "@/axios";
import SocialsList from "@/shared/SocialsList/SocialsList";  // Assuming you already have this component for social buttons

const NavMobile = ({ onClickClose }) => {
  const [categories, setCategories] = useState([]);
  const [collections, setCollections] = useState([]);

  // Fetch Categories
  useEffect(() => {
    const getCategories = () => {
      axiosInstance.get('live-categories/').then((r) => setCategories(r.data));
    };
    if (categories.length === 0) {
      getCategories();
    }
  }, [categories]);

  // Fetch Collections
  useEffect(() => {
    const getCollections = () => {
      axiosInstance.get('live-collections/').then((r) => setCollections(r.data));
    };
    if (collections.length === 0) {
      getCollections();
    }
  }, [collections]);

  // Dynamic data rendering
  const data = [
    {
      id: ncNanoId(),
      href: "/",
      name: "Home",
    },
    {
      id: ncNanoId(),
      name: "Categories",
      type: "megaMenu",
      children: [
        ...categories.length !== 0 ? categories.map((item) => ({
          id: ncNanoId(),
          name: item.name,
          href: `/category/${item.id}`,
        })) : [],
      ],
    },
    {
      id: ncNanoId(),
      name: "Collections",
      type: "megaMenu",
      children: [
        ...collections.length !== 0 ? collections.map((item) => ({
          id: ncNanoId(),
          name: item.name,
          href: `/collection/${item.id}`,
        })) : [],
      ],
    },
  ];

  // Render children menu
  const _renderMenuChild = (
    item,
    itemClass = " pl-3 text-neutral-900 dark:text-neutral-200 font-medium "
  ) => {
    return (
      <ul className="nav-mobile-sub-menu pl-6 pb-1 text-base">
        {item.children?.map((i, index) => (
          <Disclosure key={index} as="li">
            <Link
              href={i.href || "/"}
              className={`flex text-sm rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 mt-0.5 pr-4 ${itemClass}`}
            >
              <span className={`py-2.5 ${!i.children ? "block   capitalize w-full" : ""}`} onClick={i.children ? ()=>{} : onClickClose}>
                {i.name}
              </span>
              {i.children && (
                <span className="flex items-center flex-grow">
                  <Disclosure.Button as="span" className="flex justify-end flex-grow">
                    <ChevronDownIcon className="ml-2 h-4 w-4 text-slate-500" aria-hidden="true" />
                  </Disclosure.Button>
                </span>
              )}
            </Link>
            {i.children && <Disclosure.Panel>{_renderMenuChild(i, "pl-3 text-slate-600 dark:text-slate-400 ")}</Disclosure.Panel>}
          </Disclosure>
        ))}
      </ul>
    );
  };

  // Render each menu item
  const _renderItem = (item, index) => {
    return (
      <Disclosure key={index} as="li" className="text-slate-900 dark:text-white">
        <Link className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" href={item.href || "/"}>
          <span className={!item.children ? "block w-full capitalize" : ""} onClick={item.children ? () => { } : onClickClose}>
            {item.name}
          </span>
          {item.children && (
            <span className="block flex-grow" onClick={(e) => e.preventDefault()}>
              <Disclosure.Button as="span" className="flex justify-end flex-grow">
                <ChevronDownIcon className="ml-2 h-4 w-4 text-neutral-500" aria-hidden="true" />
              </Disclosure.Button>
            </span>
          )}
        </Link>
        {item.children && <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>}
      </Disclosure>
    );
  };

  return (
    <div className="overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800 flex flex-col">
      <div className="py-6 px-5">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Logo className="w-40" />
          <ButtonClose onClick={onClickClose} />
        </div>
      </div>
      <ul className="flex flex-col py-6 px-2 space-y-1 flex-grow">
        {data.map(_renderItem)}
      </ul>
      
      {/* Footer Section */}
      <div className="mt-auto p-4 bg-white dark:bg-neutral-900">
        {/* Sign In Button */}
        <div className="py-2">
          <ButtonPrimary href="/login" className="flex w-full items-center py-2.5 px-4 font-medium uppercase text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
            Login
          </ButtonPrimary>
        </div>

        {/* Social Media Section */}
        <div className="py-4">
          <div className="flex justify-center items-center space-x-4">
            <SocialsList />  {/* Add the social buttons as before */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
