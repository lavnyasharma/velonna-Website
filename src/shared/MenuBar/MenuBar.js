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
        className="rounded-lg text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-end"
      >
       
       <svg width="45" height="45" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.136"></g><g id="SVGRepo_iconCarrier"> 
        <path d="M1 18H8" stroke="#000000" stroke-width="0.5" stroke-linecap="round"></path> 
       <path d="M1 12L14 12" stroke="#000000" stroke-width="0.5" stroke-linecap="round"></path> 
       <path d="M1 6L18 6" stroke="#000000" stroke-width="0.5" stroke-linecap="round"></path> </g></svg>
      </button>

      {renderContent()}
    </>
  );
};

export default MenuBar;
