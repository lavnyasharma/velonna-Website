"use client";

import { Popover, Transition } from "@/app/headlessui";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { MEGAMENU_TEMPLATES } from "@/data/navigation";
import CardCategory1 from "@/components/CardCategories/CardCategory1";
import { NavItemType } from "@/shared/Navigation/NavigationItem";
import Link from "next/link";
import NcImage from "@/shared/NcImage/NcImage";

export default function TemplatesDropdown({ name = "Collections", data = [] }) {
  const renderMegaMenuNavlink = (item) => {
    return (
      <li key={item.id} className={`px-3 py-2 rounded-md hover:bg-slate-100 hover:shadow-lg transition ${item.isNew ? "menuIsNew" : ""}`}>
        <Link
          className="font-xs items-center capitalize flex-row flex text-black hover:text-black dark:text-slate-400 dark:hover:text-white"
          href={{
            pathname: item.href || undefined,
          }}
        >
          {item?.icon && <NcImage
            alt=""
            containerClassName={`flex-shrink-0 relative w-12 h-12 rounded-lg mr-4 overflow-hidden`}
            src={item.icon}
            sizes="(max-width: 640px) 100vw, 40vw"
            fill
          />}

          {item.name}
        </Link>
      </li>
    );
  };

  return (
    <div className="TemplatesDropdown hidden lg:block">
      <Popover className="">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-80"}
                group h-10 sm:h-12 px-3 py-1.5 inline-flex items-center text-xs  text-black dark:text-slate-300 font-bold hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="">{name.toUpperCase()}</span>
            </Popover.Button>
          
              

              <Popover.Panel className="absolute z-20 w-full mt-3.5 inset-x-0 bg-white dark:from-slate-800 dark:to-slate-900 shadow-xl">
                <div className="custom-container">
                  <div className="flex text-sm border-t border-slate-200 dark:border-slate-700 py-6 px-4">
                    <div className="flex-1 grid grid-cols-4 gap-4">
                      {data.length !== 0 ? (
                        Array(Math.ceil(data.length / 5))
                          .fill()
                          .map((_, colIndex) => (
                            <div key={colIndex}>
                              <ul className="grid space-y-3">
                                {data
                                  .slice(colIndex * 5, colIndex * 5 + 5)
                                  .map(renderMegaMenuNavlink)}
                              </ul>
                            </div>
                          ))
                      ) : (
                        "Loading"
                      )}
                    </div>
                  </div>
                </div>
              </Popover.Panel>

       
          </>
        )}
      </Popover>
    </div>
  );
}
