"use client";

import React, { useState, Fragment } from "react";
import { Transition, Dialog } from "@/app/headlessui";
import NavMobile from "@/shared/Navigation/NavMobile";


const MenuBar = () => {
  const [isVisable, setIsVisable] = useState(false);

  const handleOpenMenu = () => setIsVisable(true);
  const handleCloseMenu = () => setIsVisable(false);

  const renderContent = () => {
    return (
      <Transition appear show={isVisable} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={handleCloseMenu}
        >
          <div className="fixed left-0 top-0 bottom-0 w-full max-w-md md:w-auto z-max outline-none focus:outline-none">
            <React.Fragment>
              <Transition.Child
                as={Fragment}
                enter="transition duration-100 transform"
                enterFrom="opacity-0 -translate-x-14"
                enterTo="opacity-100 translate-x-0"
                leave="transition duration-150 transform"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-14"
              >
                <div className="z-20 relative">
                  <NavMobile onClickClose={handleCloseMenu} />
                </div>
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter=" duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave=" duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-neutral-900/60" />
              </Transition.Child>
            </React.Fragment>
          </div>
        </Dialog>
      </Transition>
    );
  };

  return (
    <>
      <button
        onClick={handleOpenMenu}
        className="rounded-lg h-4 text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-end"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      {renderContent()}
    </>
  );
};

export default MenuBar;
