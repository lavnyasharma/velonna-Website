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
      className="relative w-10 h-10 sm:w-10 sm:h-10  rounded-full inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      {itemCount ? <div className="w-3.5 h-3.5 flex items-center justify-center bg-custom-blue absolute top-1.5 right-1.5 rounded-full text-[10px] leading-none text-white font-medium">

        <Link href={is_auth ? "/cart" : "/login"} className="">
          {itemCount}
        </Link>

      </div> : ""}
      <svg xmlns="http://www.w3.org/2000/svg" role="img" class="icon__bag" aria-label="icon bag" width="22" height="22" viewBox="0 0 16.2 19.8" fill="#27251F">
        <path d="M5.4 5.4V3.6C5.4 2.2 6.6.9 8.1.9s2.7 1.3 2.7 2.7v1.8H5.4zM.9 18.9V6.3h3.6v2.2c0 .3.2.5.4.5.3 0 .4-.2.4-.4V6.3h5.4v2.2c.1.3.3.5.5.5.3 0 .4-.2.4-.4V6.3h3.6v12.6H.9zm-.9.4c0 .3.1.4.4.4h15.3c.3 0 .4-.1.4-.4V5.8c0-.3-.1-.4-.4-.4h-4V3.6c0-2-1.5-3.6-3.6-3.6S4.5 1.6 4.5 3.6v1.8h-4c-.4 0-.5.1-.5.4v13.5z" fill="#27251F" />
      </svg>

      <Link className="absolute inset-0" href={is_auth ? "/cart" : "/login"} />
    </button>
  );
}
