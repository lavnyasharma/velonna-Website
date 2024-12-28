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

export default function StoreLocation() {
  const { cart, itemCount, subtotal, totalDiscount, total, removeFromCart } = useCart();
  const { is_auth } = useAuth()
 

  return (
    <button
      className="relative w-10 h-10 sm:w-10 sm:h-10  rounded-full inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
    <svg xmlns="http://www.w3.org/2000/svg" role="img" class="icon__map-pin" aria-label="icon map-pin" width="14" height="21" viewBox="0 0 13.334 19.589" fill="#27251F">
  <path d="M5.918 19.028c.225.374.45.561.75.561.261 0 .523-.187.748-.561l3.896-6.705c.936-1.573 2.022-4.045 2.022-5.993 0-3.708-2.772-6.33-6.667-6.33S0 2.622 0 6.33c0 1.948 1.086 4.42 2.023 5.993l3.895 6.705zm.75-.45l-3.896-6.705C1.648 9.926.899 7.753.899 6.33c0-3.184 2.36-5.431 5.768-5.431 3.409 0 5.768 2.247 5.768 5.431 0 1.423-.749 3.596-1.873 5.543l-3.895 6.705zm0-9.551C5.13 9.027 3.97 7.866 3.97 6.33s1.161-2.697 2.697-2.697S9.364 4.794 9.364 6.33 8.203 9.027 6.667 9.027zm0 .899a3.597 3.597 0 000-7.192 3.597 3.597 0 000 7.192z" fill="#27251F"/>
</svg>


      <Link className="absolute inset-0" href={is_auth ? "/cart" : "/login"} />
    </button>
  );
}
