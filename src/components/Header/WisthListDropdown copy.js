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

export default function WishlistDropDown() {
  const { cart, itemCount, subtotal, totalDiscount, total, removeFromCart } = useCart();
  const { is_auth } = useAuth()


  return (
    <button
      className="relative w-10 h-10 sm:w-10 sm:h-10  rounded-full inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      <svg xmlns="http://www.w3.org/2000/svg" role="img" class="icon__heart" aria-label="icon heart" width="20.226" height="18.353" viewBox="0 0 20.226 18.353" fill="#27251F">
      <path d="M9.401 2.66c.225.262.45.374.712.374.225 0 .487-.112.712-.375C11.873 1.461 13.222.9 14.608.9c2.846 0 4.72 1.91 4.72 4.832 0 1.798-.638 3.296-2.323 4.944l-6.78 6.742c-.037.037-.075.075-.112.075-.037 0-.075-.038-.112-.075l-6.78-6.742C1.536 9.027.9 7.529.9 5.73c0-2.884 1.91-4.832 4.72-4.832 1.423 0 2.771.562 3.782 1.76zm.675-.6C8.877.712 7.304 0 5.618 0 2.285 0 0 2.36 0 5.73c0 2.023.786 3.746 2.622 5.544l6.78 6.742c.224.225.449.337.711.337.262 0 .487-.112.712-.337l6.78-6.742c1.834-1.798 2.621-3.52 2.621-5.543C20.226 2.322 17.941 0 14.608 0c-1.648 0-3.222.712-4.458 2.06l-.037.038-.037-.038z"></path>
      </svg>

      <Link className="absolute inset-0" href={is_auth ? "/cart" : "/login"} />
    </button>
  );
}
