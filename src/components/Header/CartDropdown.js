"use client";

import { Popover, Transition } from "@/app/headlessui";
import Prices from "@/components/Prices";
import { PRODUCTS } from "@/data/data";
import { Fragment } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cartContext";
import { useAuth } from "@/context/authContext";

export default function CartDropdown() {
  const { cart, itemCount, subtotal, totalDiscount, total, removeFromCart } = useCart();
  const { is_auth } = useAuth()
  console.log(itemCount)
  const renderProduct = (item, index, close) => {
    const { title, price, images } = item;
    return (
      <div key={index} className="flex py-5 last:pb-0">
        <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <Image
            fill
            src={images[0]?.image}
            alt={title}
            className="h-full w-full object-contain object-center"
          />
          <Link
            onClick={close}
            className="absolute inset-0"
            href={"/product-detail"}
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between ">
              <div>
                <h3 className="text-base font-medium ">
                  <Link onClick={close} href={"/product-detail"}>
                    {title}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  <span>{`Natural`}</span>
                  <span className="mx-2 border-l border-slate-200 dark:border-slate-700 h-4"></span>
                  <span>{"XL"}</span>
                </p>
              </div>
              <Prices price={price} className="mt-0.5" />
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500 dark:text-slate-400">{`Qty 1`}</p>

            <div className="flex">
              <button
                type="button"
                className="font-medium text-primary-6000 dark:text-primary-500 "
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <button
      className="relative w-10 h-10 sm:w-12 sm:h-12 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      {itemCount ? <div className="w-3.5 h-3.5 flex items-center justify-center bg-primary-500 absolute top-1.5 right-1.5 rounded-full text-[10px] leading-none text-white font-medium">

        <Link href={is_auth ? "/cart" : "/login"} className="mt-[1px]">
          {itemCount}
        </Link>

      </div> : ""}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.99995 22H14.9999C19.0199 22 19.7399 20.39 19.9499 18.43L20.6999 12.43C20.9699 9.99 20.2699 8 15.9999 8H7.99995C3.72995 8 3.02995 9.99 3.29995 12.43L4.04995 18.43C4.25995 20.39 4.97995 22 8.99995 22Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.4955 12H15.5045" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.49451 12H8.50349" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

      <Link className="absolute inset-0" href={is_auth ? "/cart" : "/login"} />
    </button>
  );
}
