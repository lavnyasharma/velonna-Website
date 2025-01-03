import { Popover, Transition } from "@/app/headlessui";
import Input from "@/shared/Input/Input";
import { useRouter } from "next/navigation";
import React, { useRef, Fragment } from "react";

const SearchDropdown = ({ className = "" }) => {
  const inputRef = useRef(null);
  const router = useRouter();

  const mobileInputRef = useRef();
  
  return (
    <React.Fragment>
      <Popover className={`relative ${className}`}>
        {({ open }) => {
          if (open) {
            setTimeout(() => {
              inputRef.current?.focus();
            }, 100);
          }

          return (
            <>
              <Popover.Button className="w-10 rounded-full text-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  className="icon__magnifying-glass"
                  aria-label="icon magnifying-glass"
                  width="20"
                  height="20"
                  viewBox="0 0 19.8 19.8"
                  fill="#27251F"
                >
                  <path d="M13.4 12.8c1.2-1.4 1.9-3.1 1.9-5.1 0-4.2-3.4-7.7-7.7-7.7S0 3.4 0 7.7s3.4 7.7 7.7 7.7c2 0 3.7-.7 5.1-1.9l6.4 6.4.6-.6-6.4-6.5zm-5.7 1.7C4 14.5.9 11.5.9 7.7S3.9.9 7.7.9s6.8 3 6.8 6.8-3.1 6.8-6.8 6.8z" />
                </svg>
              </Popover.Button>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  static
                  className="fixed top-[4.585rem]   bg-white inset-0 flex justify-center items-center"
                >
                  <form
                    className="flex-1 bg-white backdrop-blur-lg py-[8px] px-4 text-slate-900 dark:text-slate-100"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (mobileInputRef.current) {
                        router.push(`/search?s=${mobileInputRef.current.value}`);
                        mobileInputRef.current.blur();
                      }
                    }}
                  >
                    <div className="drop-shadow-sm border uppercase border-inputborder dark:bg-slate-800 flex items-center px-2 w-full h-full rounded-sm">

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
                </Popover.Panel>
              </Transition>
            </>
          );
        }}
      </Popover>
    </React.Fragment>
  );
};

export default SearchDropdown;
