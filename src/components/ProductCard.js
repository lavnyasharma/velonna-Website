"use client";

import React, { FC, useState } from "react";
import LikeButton from "./LikeButton";
import Prices from "./Prices";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { Product, PRODUCTS } from "@/data/data";
import { StarIcon } from "@heroicons/react/24/solid";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import BagIcon from "./BagIcon";
import toast from "react-hot-toast";
import { Transition } from "@/app/headlessui";
import ModalQuickView from "./ModalQuickView";
import ProductStatus from "./ProductStatus";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NcImage from "@/shared/NcImage/NcImage";
import { useCart } from "@/context/cartContext";
import { addToCart } from "@/axios";
import {imagethumbnail } from "../images/products/thumbnail_placeholder.webp";
import { useAuth } from "@/context/authContext";

const ProductCard = ({
  className = "",
  data = {},
  hideDetails = false,
  isLiked,
}) => {
  const {
    hsn,
    title,
    price,
    collection,
    category,
    quantity,
    description,
    size,
    variants,
    variantType,
    status,
    images,
    rating,
    thumbnail,
    id,
    numberOfReviews,
  } = data;

  const [variantActive, setVariantActive] = useState(0);
  const [showModalQuickView, setShowModalQuickView] = useState(false);
  const [qualitySelected, setQualitySelected] = useState(1);
  const router = useRouter();
  const { fetchCart } = useCart()
  const {is_auth} = useAuth()
  const handleAddToCart = () => {
    if (!is_auth){
      router.push("/login")
      return
    }
    addToCart(hsn, qualitySelected)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        notifyAddTocart(data);
        fetchCart()
        // Update cart count or other relevant UI elements
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
        toast.error("Error adding to cart. Please try again.");
      });
  };

  const notifyAddTocart = () => {
    console.log(size)

    alert(size)

    toast.custom(
      (t) => (
        <Transition
          appear
          show={t.visible}
          className="p-4 max-w-md w-full bg-white dark:bg-slate-800 shadow-lg rounded-2xl pointer-events-auto ring-1 ring-black/5 dark:ring-white/10 text-slate-900 dark:text-slate-200"
          enter="transition-all duration-150"
          enterFrom="opacity-0 translate-x-20"
          enterTo="opacity-100 translate-x-0"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 translate-x-20"
        >
          <p className="block text-base font-semibold leading-none">
            Added to cart!
          </p>
          <div className="border-t border-slate-200 dark:border-slate-700 my-4" />
          {renderProductCartOnNotify()}
        </Transition>
      ),
      {
        position: "top-right",
        id: String(id) || "product-detail",
        duration: 3000,
      }
    );
  };

  const renderProductCartOnNotify = () => {
    return (
      <div className="flex ">
        <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <Image
            width={80}
            height={96}
            src={thumbnail ? thumbnail : imagethumbnail}
            alt={title}
            className="absolute object-cover object-center"
          />
        </div>

        <div className="ms-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between ">
              <div>
                <h3 className="text-base   font-medium ">{title}</h3>
                <p className="mt-1 text-sm text-black dark:text-slate-400">
                  <span>
                    {category}
                  </span>
                  <span className="mx-2 border-s border-slate-200 dark:border-slate-700 h-4"></span>
                  <span>{size}</span>
                </p>
              </div>
              <Prices price={Number(price)?.toLocaleString('en-IN')} className="mt-0.5" />

            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500 dark:text-slate-400">Qty 1</p>

            <div className="flex">
              <button
                type="button"
                className="font-medium text-primary-6000 dark:text-primary-500 "
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/cart");
                }}
              >
                View cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getBorderClass = (Bgclass = "") => {
    if (Bgclass.includes("red")) {
      return "border-red-500";
    }
    if (Bgclass.includes("violet")) {
      return "border-violet-500";
    }
    if (Bgclass.includes("orange")) {
      return "border-orange-500";
    }
    if (Bgclass.includes("green")) {
      return "border-green-500";
    }
    if (Bgclass.includes("blue")) {
      return "border-blue-500";
    }
    if (Bgclass.includes("sky")) {
      return "border-sky-500";
    }
    if (Bgclass.includes("yellow")) {
      return "border-yellow-500";
    }
    return "border-transparent";
  };

  const renderVariants = () => {
    if (!variants || !variants.length || !variantType) {
      return null;
    }

    if (variantType === "color") {
      return (
        <div className="flex space-x-1">
          {variants.map((variant, index) => (
            <div
              key={index}
              onClick={() => setVariantActive(index)}
              className={`relative w-6 h-6 rounded-full overflow-hidden z-10 border cursor-pointer ${variantActive === index
                  ? getBorderClass(variant.color)
                  : "border-transparent"
                }`}
              title={variant.name}
            >
              <div
                className={`absolute inset-0.5 rounded-full z-0 ${variant.color}`}
              ></div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="flex ">
        {variants.map((variant, index) => (
          <div
            key={index}
            onClick={() => setVariantActive(index)}
            className={`relative w-11 h-6 rounded-full overflow-hidden z-10 border cursor-pointer ${variantActive === index
                ? "border-black dark:border-slate-300"
                : "border-transparent"
              }`}
            title={variant.name}
          >
            <div
              className="absolute inset-0.5 rounded-full overflow-hidden z-0 bg-cover"
              style={{
                backgroundImage: `url(${
                  // @ts-ignore
                  typeof variant.thumbnail?.src === "string"
                    ? // @ts-ignore
                    variant.thumbnail?.src
                    : typeof variant.thumbnail === "string"
                      ? variant.thumbnail
                      : imagethumbnail
                  })`,
              }}
            ></div>
          </div>
        ))}
      </div>
    );
  };

  const renderGroupButtons = () => {
    return (
      <div className="absolute bottom-0 group-hover:bottom-4 inset-x-1 flex justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <ButtonPrimary
          className="shadow-lg"
          fontSize="text-xs"
          sizeClass="py-2 px-4"
          onClick={() => handleAddToCart()}
        >
          <BagIcon className="w-3.5 h-3.5 mb-0.5" />
          <span className="flex ms-1">Add to bag</span>
        </ButtonPrimary>
        {/* <ButtonSecondary
          className="ms-1.5 bg-white hover:!bg-gray-100 hover:text-slate-900 transition-colors shadow-lg"
          fontSize="text-xs"
          sizeClass="py-2 px-4"
          onClick={() => setShowModalQuickView(true)}
        >
          <ArrowsPointingOutIcon className="w-3.5 h-3.5" />
          <span className="hidden md:flex ms-1">Quick view</span>
        </ButtonSecondary> */}
      </div>
    );
  };



  return (
    <>
      <div
        className={`nc-ProductCard relative flex flex-col bg-transparent ${className}`}
      >
        <Link href={`/product/${hsn}`} className="absolute inset-0"></Link>

        <div className="relative flex-shrink-0 bg-slate-50 dark:bg-slate-300 overflow-hidden  group">
          <Link href={`/product/${hsn}`} className="block">
            <NcImage
              containerClassName="flex aspect-w-11 aspect-h-12 w-full h-0"
              src={thumbnail ? thumbnail : imagethumbnail}
              className="object-cover w-full h-full drop-shadow-xl"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 40vw"
              alt="product"
            />
          </Link>
          {/* <ProductStatus status={status} /> */}
          <LikeButton liked={isLiked} className="absolute top-3 end-3 z-10" />
          {renderGroupButtons()}
        </div>

        {!hideDetails && <div className="space-y-0.5 px-2.5 pt-2 pb-2.5">
          {renderVariants()}
          <div>
            <h2 className="nc-ProductCard__title text-custom-blue text-[12px] font-semibold capitalize transition-colors truncate text-ellipsis">
              {title}
            </h2>
            <p className={`text-xs capitalize text-black font-medium dark:text-slate-400 mt-1 `}>
              {collection}
            </p>
            <span className={`text-[10px] font-medium text-black dark:text-slate-400 mt-1 bg-slate-100 py-0.5 px-2 rounded-xl`}>
              {category.toString().charAt(0).toUpperCase() + category.toString().slice(1)}
            </span>
          </div>

          <div className="flex justify-between items-end ">
            <Prices price={price} />
            <div className="flex items-center mb-0.5">
              <StarIcon className="w-5 h-5 pb-[1px] text-amber-400" />
              <span className="text-sm ms-1 text-black dark:text-slate-400">
                {rating || ""} {numberOfReviews || 0}
              </span>
            </div>
          </div>
        </div>}
      </div>

      {/* QUICKVIEW */}
      <ModalQuickView
        data={data}
        show={showModalQuickView}
        onCloseModalQuickView={() => setShowModalQuickView(false)}
      />
    </>
  );
};

export default ProductCard;