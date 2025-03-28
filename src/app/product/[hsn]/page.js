"use client";

import React, { useEffect, useState } from "react";
import {
  NoSymbolIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import NcImage from "@/shared/NcImage/NcImage";
import ReviewItem from "@/components/ReviewItem";
import detail21JPG from "@/images/products/detail3-1.webp";
import detail22JPG from "@/images/products/detail3-2.webp";
import detail23JPG from "@/images/products/detail3-3.webp";
import detail24JPG from "@/images/products/detail3-4.webp";
import { Product, PRODUCTS } from "@/data/data";
import IconDiscount from "@/components/IconDiscount";
import NcInputNumber from "@/components/NcInputNumber";
import BagIcon from "@/components/BagIcon";
import toast from "react-hot-toast";
import { StarIcon } from "@heroicons/react/24/solid";
import SectionSliderProductCard from "@/components/SectionSliderProductCard";
import NotifyAddTocart from "@/components/NotifyAddTocart";
import Image, { StaticImageData } from "next/image";
import LikeSaveBtns from "@/components/LikeSaveBtns";
import AccordionInfo from "@/components/AccordionInfo";
import Policy from "./Policy";
import ModalViewAllReviews from "./ModalViewAllReviews";
import ListingImageGallery from "@/components/listing-image-gallery/ListingImageGallery";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Transition } from "@/app/headlessui";


import axios from "axios";
import { getProductByHsn, getProducts } from "@/utils/products";
import { addToCart } from "../../../axios";
import Prices from "@/components/Prices";
import { useCart } from "@/context/cartContext";
import convertMarkdownToHtml from "@/utils/mdDecsConverter";
import { useAuth } from "@/context/authContext";
import GenericBannerSlider from "@/components/GenericBanner";



const ProductScreenSkeleton = () => (
  <div className="animate-pulse">
    {/* Header Image Skeleton */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 mb-8">
      <div className="col-span-2 md:col-span-1 row-span-2 bg-gray-300 rounded-md h-96"></div>
      <div className="col-span-1 row-span-2 bg-gray-300 rounded-md h-96"></div>
      <div className="bg-gray-300 rounded-md h-48"></div>
      <div className="bg-gray-300 rounded-md h-48"></div>
    </div>

    {/* Product Information Skeleton */}
    <div className="space-y-6 lg:space-y-8 px-4">
      {/* Title */}
      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      {/* Reviews */}
      <div className="flex items-center space-x-2">
        <div className="h-5 w-20 bg-gray-300 rounded"></div>
        <div className="h-5 w-12 bg-gray-300 rounded"></div>
      </div>
      {/* Price */}
      <div className="h-8 w-1/2 bg-gray-300 rounded"></div>
      {/* Add to Cart */}
      <div className="h-12 w-full bg-gray-300 rounded mt-4"></div>
    </div>

    {/* Description Skeleton */}
    <div className="space-y-4 px-4 mt-8">
      <div className="h-6 bg-gray-300 rounded w-1/4"></div>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      <div className="h-4 bg-gray-300 rounded w-4/6"></div>
    </div>

    {/* Additional Sections */}
    <div className="space-y-6 px-4 mt-8">
      {/* Similar Products */}
      <div className="h-6 bg-gray-300 rounded w-1/3"></div>
      <div className="flex space-x-4">
        <div className="h-48 w-32 bg-gray-300 rounded"></div>
        <div className="h-48 w-32 bg-gray-300 rounded"></div>
        <div className="h-48 w-32 bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>
);




function ProductScreen() {
  const [recProducts, setRecProducts] = useState([]);
  const [hsnProduct, setHsnProduct] = useState(null);
  const { is_auth } = useAuth()
  const router = useRouter();
  // const {hsn} = router.query
 
  const [productData, setProductData] = useState({});

  const { sizes, variants, status, allOfSizes, image } = PRODUCTS[0];
  //

  const thisPathname = usePathname();
  const searchParams = useSearchParams();
  const modal = searchParams?.get("modal");

  // Extract dynamic `id` from the pathname
  const hsn = thisPathname.split("/")[2];
  //
  const [variantActive, setVariantActive] = useState(0);
  const [sizeSelected, setSizeSelected] = useState(sizes ? sizes[0] : "");
  const [qualitySelected, setQualitySelected] = useState(1);
  const [isOpenModalViewAllReviews, setIsOpenModalViewAllReviews] =
    useState(false);

  //
  const handleCloseModalImageGallery = () => {
    let params = new URLSearchParams(document.location.search);
    params.delete("modal");
    router.push(`${thisPathname}/?${params.toString()}`);
  };
  const handleOpenModalImageGallery = () => {
    router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE`);
  };

  useEffect(() => {
    const getData = async () => {
      if (recProducts.length === 0) {
        try {
          const result = await getProducts(); // Call the async function
          setRecProducts(result); // Set the fetched data to state
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      if (hsnProduct === null) {
        const result = await getProductByHsn(hsn); // Call the async function
        setHsnProduct(result);
      }
    };
    getData();
  }, [recProducts, hsnProduct]);

  //
  const renderVariants = () => {
    if (!variants || !variants.length) {
      return null;
    }

    return (
      <div>
        <label htmlFor="">
          <span className="text-sm font-medium">
            Color:
            <span className="ml-1 font-semibold">
              {variants[variantActive].name}
            </span>
          </span>
        </label>
        <div className="flex mt-3">
          {variants.map((variant, index) => (
            <div
              key={index}
              onClick={() => setVariantActive(index)}
              className={`relative flex-1 max-w-[75px] h-10 sm:h-11 rounded-full border-2 cursor-pointer ${variantActive === index
                ? "border-primary-6000 dark:border-primary-500"
                : "border-transparent"
                }`}
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
                        : ""
                    })`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const { fetchCart } = useCart()
  const handleAddToCart = () => {
    if (!is_auth) {
      router.push("/login")
    }

    addToCart(hsnProduct.hsn, qualitySelected)
      .then((res) => {
     
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




  const NotifyAddTocart = ({ productImage, qualitySelected, show, variantActive }) => {
    if (!show) return null;
    return (
      <div className="notification">
        <img src={productImage} alt="Product" />
        <p>{qualitySelected}</p>
        <p>{variantActive}</p>
        {/* Any additional content for the notification */}
      </div>
    );
  };

  const renderSizeList = () => {
    if (!allOfSizes || !sizes || !sizes.length) {
      return null;
    }
    return (
      <div>
        <div className="flex justify-between font-medium text-sm">
          <label htmlFor="">
            <span className="">
              Size:
              <span className="ml-1 font-semibold">{sizeSelected}</span>
            </span>
          </label>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="##"
            className="text-primary-6000 hover:text-primary-500"
          >
            See sizing chart
          </a>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-3">
          {allOfSizes.map((size, index) => {
            const isActive = size === sizeSelected;
            const sizeOutStock = !sizes.includes(size);
            return (
              <div
                key={index}
                className={`relative h-10 sm:h-11 rounded-2xl border flex items-center justify-center 
                text-sm sm:text-base uppercase font-semibold select-none overflow-hidden z-0 ${sizeOutStock
                    ? "text-opacity-20 dark:text-opacity-20 cursor-not-allowed"
                    : "cursor-pointer"
                  } ${isActive
                    ? "bg-primary-6000 border-primary-6000 text-white hover:bg-primary-6000"
                    : "border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
                  }`}
                onClick={() => {
                  if (sizeOutStock) {
                    return;
                  }
                  setSizeSelected(size);
                }}
              >
                {size}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderStatus = () => {
    if (!status) {
      return null;
    }
    const CLASSES =
      "text-sm flex items-center text-slate-700 text-slate-900 dark:text-slate-300";
    if (status === "New in") {
      return (
        <div className={CLASSES}>
          <SparklesIcon className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    if (status === "50% Discount") {
      return (
        <div className={CLASSES}>
          <IconDiscount className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    if (status === "Sold Out") {
      return (
        <div className={CLASSES}>
          <NoSymbolIcon className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    if (status === "limited edition") {
      return (
        <div className={CLASSES}>
          <ClockIcon className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    return null;
  };

  const notifyAddTocart = (data) => {


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
          {renderProductCartOnNotify(data)}
        </Transition>
      ),
      {
        position: "top-right",
        duration: 3000,
      }
    );
  };


  const renderProductCartOnNotify = (data) => {
   
    return (
      <div className="flex ">
        <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <Image
            width={80}
            height={96}
            src=""
            alt=""
            className="absolute object-cover object-center"
          />
        </div>

        <div className="ms-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between ">
              <div>
                <h3 className="text-base font-medium ">{data.product.title}</h3>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  <span>
                    {variants ? variants[variantActive].name : `Natural`}
                  </span>
                  <span className="mx-2 border-s border-slate-200 dark:border-slate-700 h-4"></span>
                  <span>{data.product.size || "XL"}</span>
                </p>
              </div>
              <Prices price={data.product.price} className="mt-0.5" />
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




  const renderSectionSidebar = () => {
    return (
      <div className="listingSectionSidebar__wrap lg:shadow-lg">
        <div className="space-y-7 lg:space-y-8">
          {/* PRICE */}
          <div className="">
            {/* ---------- 1 HEADING ----------  */}
            <div className="flex items-center justify-between space-x-5">
              <div className="flex text-2xl font-semibold">
                ₹{hsnProduct?.price?.toLocaleString('en-IN')}
              </div>



              <a
                href="#reviews"
                className="flex items-center text-sm font-medium"
              >
                <div className="">
                  <StarIcon className="w-5 h-5 pb-[1px] text-orange-400" />
                </div>
                <span className="ml-1.5 flex">
                  <span>{0} </span>
                  <span className="mx-1.5">·</span>
                  <span className="text-slate-700 dark:text-slate-400 underline">
                    {0} {" reviews"}
                  </span>
                </span>
              </a>
            </div>
            {/* <ul style={{ listStyleType: 'disc', color: '#757575', paddingLeft: '20px', fontWeight: '300', fontSize: '14px' }}>
  <li>
    {hsnProduct?.collection?.charAt(0).toUpperCase() + hsnProduct?.collection?.slice(1).toLowerCase()}
  </li>
  <li>
    {hsnProduct?.category?.charAt(0).toUpperCase() + hsnProduct?.category?.slice(1).toLowerCase()}
  </li>
  <li>9 to 5 silver</li>
</ul> */}




            {/* ---------- 3 VARIANTS AND SIZE LIST ----------  */}
            <div className="mt-6 space-y-7 lg:space-y-8">
              {/* <div className="">{renderVariants()}</div> */}
              {/* <div className="">{renderSizeList()}</div> */}
            </div>
          </div>
          {/*  ---------- 4  QTY AND ADD TO CART BUTTON */}
          <div className="flex space-x-3.5">
            {/* <div className="flex items-center justify-center bg-slate-100/70 dark:bg-slate-800/70 px-2 py-3 sm:p-3.5 rounded-full">
              <NcInputNumber
                defaultValue={qualitySelected}
                onChange={setQualitySelected}
              />
            </div> */}
            {hsnProduct.quantity > 0 ? <ButtonPrimary
              className="flex-1 flex-shrink-0"
              onClick={handleAddToCart}
            >
              <BagIcon className="hidden sm:inline-block w-5 h-5 mb-0.5" />
              <span className="ml-3">Add to cart</span>
            </ButtonPrimary> : <ButtonPrimary disabled
              className="flex-1 flex-shrink-0"
            >
              <span className="ml-3">Out Of Stock</span>
            </ButtonPrimary>}
          </div>

          {/* SUM */}
          <div className="hidden sm:flex flex-col space-y-4 ">
            <div className="space-y-2.5">
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                {/* <span className="flex">
                  <span>{`$${hsnProduct?.price}  `}</span>
                  <span className="mx-2">x</span>
                  <span>{`${qualitySelected} `}</span>
                </span> */}

                {/* <span>{`$${(hsnProduct?.price * qualitySelected).toFixed(2)}`}</span> */}
              </div>
              {/* <div className="flex justify-between text-slate-600 dark:text-slate-300">
                 <span>Tax estimate</span>
                <span>$0</span> 
              </div> */}
            </div>
            {/* <div className="border-b border-slate-200 dark:border-slate-700"></div> */}
            {/* <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>{`$${(PRICE * qualitySelected).toFixed(2)}`}</span> 
            </div> */}
          </div>
        </div>
      </div>
    );
  };

  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap !space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">
            {hsnProduct?.title?.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}
          </h2>

          <p className="">{hsnProduct?.category?.charAt(0).toUpperCase() + hsnProduct?.category?.slice(1).toLowerCase()}</p>


          {/* <div className="flex items-center mt-4 sm:mt-5">
            <a
              href="#reviews"
              className="hidden sm:flex items-center text-sm font-medium "
            >
              <div className="">
                <StarIcon className="w-5 h-5 pb-[1px] text-slate-800 dark:text-slate-200" />
              </div>
              <span className="ml-1.5">
                <span>{0}</span>
                <span className="mx-1.5">·</span>
                <span className="text-slate-700 dark:text-slate-400 underline">
                  {0} reviews
                </span>
              </span>
            </a>
            <span className="hidden sm:block mx-2.5">·</span>
           

            <div className="ml-auto">
              <LikeSaveBtns />
            </div>
          </div> */}
        </div>
        {/*  */}
        <div className="block lg:hidden">{renderSectionSidebar()}</div>

        {/*  */}
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/*  */}
        <AccordionInfo data={convertMarkdownToHtml(hsnProduct?.description)} panelClassName="p-4 pt-3.5 text-slate-600 text-base dark:text-slate-300 leading-7" />
      </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap !border-b-0 !pb-0">
        <h2 className="text-2xl font-semibold">Product details</h2>
        {/* <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div> */}
        <div className="prose prose-sm sm:prose dark:prose-invert sm:max-w-4xl">

          <h2>About This Product</h2>
          <p>
            Crafted with premium quality 925 sterling silver, this piece offers a timeless elegance that complements any style. Its sophisticated design ensures durability and versatility, making it perfect for both casual and formal occasions.
          </p>
          <h3>Material & Quality</h3>
          <ul>
            <li>Made from 92.5% pure silver, known for its strength and shine.</li>
            <li>Nickel-free and hypoallergenic, ensuring it's safe for sensitive skin.</li>
            <li>Designed to resist tarnishing and maintain its luster with proper care.</li>
          </ul>
          <h3>Care Tips</h3>
          <ul>
            <li>Avoid direct exposure to chemicals like perfumes, hairsprays, and household cleaners.</li>
            <li>Store in a cool, dry place, ideally in an airtight pouch or box.</li>
            <li>Clean gently with a soft, lint-free cloth to restore its shine.</li>
            <li>Avoid wearing during activities like swimming, gym, or heavy-duty tasks.</li>
          </ul>
          <h3>Why Choose 925 Sterling Silver?</h3>
          <ul>
            <li>Durable and designed to last for years with proper care.</li>
            <li>Perfect for gifting, offering a blend of quality and elegance.</li>
            <li>A sustainable and timeless choice for jewelry enthusiasts.</li>
          </ul>
          <p>
            Add this exquisite 925 sterling silver piece to your collection and let its charm and quality elevate your style.
          </p>

        </div>
        {/* ---------- 6 ----------  */}
        <div className="" style={{ marginBottom: "20px" }}> <Policy />

        </div>

      </div>
    );
  };

  // const renderReviews = () => {
  //   return (
  //     <div id="reviews" className="scroll-mt-[100px]">
  //       {/* HEADING */}
  //       <h2 className="text-2xl font-semibold flex items-center">
  //         <StarIcon className="w-7 h-7 mb-0.5" />
  //         <span className="ml-1.5"> 4,87 · 142 Reviews</span>
  //       </h2>

  //       {/* comment */}
  //       <div className="mt-10">
  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-y-11 gap-x-28">
  //           <ReviewItem />
  //           <ReviewItem
  //             data={{
  //               comment: `I love the charcoal heavyweight hoodie. Still looks new after plenty of washes. 
  //                 If you’re unsure which hoodie to pick.`,
  //               date: "December 22, 2021",
  //               name: "Stiven Hokinhs",
  //               starPoint: 5,
  //             }}
  //           />
  //           <ReviewItem
  //             data={{
  //               comment: `The quality and sizing mentioned were accurate and really happy with the purchase. Such a cozy and comfortable hoodie. 
  //               Now that it’s colder, my husband wears his all the time. I wear hoodies all the time. `,
  //               date: "August 15, 2022",
  //               name: "Gropishta keo",
  //               starPoint: 5,
  //             }}
  //           />
  //           <ReviewItem
  //             data={{
  //               comment: `Before buying this, I didn't really know how I would tell a "high quality" sweatshirt, but after opening, I was very impressed. 
  //               The material is super soft and comfortable and the sweatshirt also has a good weight to it.`,
  //               date: "December 12, 2022",
  //               name: "Dahon Stiven",
  //               starPoint: 5,
  //             }}
  //           />
  //         </div>

  //         <ButtonSecondary
  //           onClick={() => setIsOpenModalViewAllReviews(true)}
  //           className="mt-10 border border-slate-300 dark:border-slate-700 "
  //         >
  //           Show me all 142 reviews
  //         </ButtonSecondary>
  //       </div>
  //     </div>
  //   );
  // };


  const CollapsableBar = ({ children, state = false, title }) => {
    const [isOpen, setIsOpen] = useState(state);
    return (
      <div className="py-[30px] overflow-hidden border-b border-custom-blue ">
        <div onClick={() => {
          setIsOpen(!isOpen)
        }} className="flex group justify-between items-center cursor-pointer">
          <div className="text-[18px] select-none uppercase text-custom-blue font-normal">{title}</div>
          <div className="text-[40px] select-none font-light text-custom-blue">{isOpen ? "-" : "+"}</div>
        </div>
        <div className={`${isOpen ? "h-max mt-[20px]" : "h-0"}  overflow-hidden px-[5px]`}>
          {children}
        </div>
      </div>
    );
  }
  return (
    <>
      {hsnProduct ? (
        <div className={`ListingDetailPage nc-ProductDetailPage2 `}>


          <div className="md:flex pt-4 md:flex-row pb-[100px]">
            <div className="">
              <div className="relative">
                {/* Mobile: Swiper Carousel */}
                <div className="block md:hidden relative">
                  <GenericBannerSlider aspectRatio="1/1"
                    banners={[...hsnProduct.images.slice(0, 4).map((imagedata, index) => {
                      return imagedata.image;
                    })]}></GenericBannerSlider>
                </div>

                {/* Desktop: Grid Layout */}

              </div>
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden w-[70%] md:block">
              <div className="hidden sticky top-5 pr-[15px] pl-[80px] gap-[30px] md:grid grid-cols-2">
                {/* <div
                className="md:h-full col-span-2 md:col-span-1 row-span-2 relative cursor-pointer"
                onClick={handleOpenModalImageGallery}
              >
                <NcImage
                  alt="first"
                  containerClassName="aspect-w-3 aspect-h-4 relative md:aspect-none md:absolute md:inset-0"
                  className="object-cover px-15px"
                  src={hsnProduct?.images[0]?.image}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-neutral-900/20 opacity-0 hover:opacity-40 transition-opacity "></div>
              </div>

              <div
                className="col-span-1 row-span-2 relative  overflow-hidden z-0 cursor-pointer"
                onClick={handleOpenModalImageGallery}
              >
                <NcImage
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  containerClassName="absolute inset-0"
                  className="object-cover w-full h-full "
                  src={hsnProduct?.images[1]?.image}
                />
                <div className="absolute inset-0 bg-neutral-900/20 opacity-0 hover:opacity-40 transition-opacity"></div>
              </div>

              {[
                hsnProduct?.images[2]?.image || "",
                hsnProduct?.images[3]?.image || "",
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative  overflow-hidden z-0`}
                >
                  <NcImage
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    containerClassName="aspect-w-6 aspect-h-5 lg:aspect-h-4"
                    className="object-cover w-full h-full "
                    src={item || ""}
                  />
                  <div
                    className="absolute inset-0 bg-slate-900/20 opacity-0 transition-opacity cursor-pointer"
                    onClick={handleOpenModalImageGallery}
                  />
                </div>
              ))} */}

                {hsnProduct?.images.map((image, index) => {
                  return <div
                    className="relative  aspect-1 cursor-pointer"
                    onClick={handleOpenModalImageGallery}
                  >
                    <NcImage
                      alt="first"
                      containerClassName="aspect-1"
                      className="object-fit px-15px"
                      src={image?.image}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-neutral-900/20 opacity-0 hover:opacity-40 transition-opacity "></div>
                  </div>
                })}
              </div>
            </div>




            {/* MAIn */}
            <div className="w-[100%] relative px-[15px] md:w-[30%] md:pl-[15px] md:pr-[80px] leading-7">
              <div className="sticky top-5">
                <h2 className="font-bold uppercase text-[#71706c] text-[12px]">{hsnProduct?.category?.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}
                </h2>
                <h2 className="font-bold text-[28px]">{hsnProduct?.title?.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}
                </h2>
                <h2 className="font-normal py-[10px] text-[20px]">
                  ₹{hsnProduct?.price?.toLocaleString('en-IN')}
                </h2>


                <div className="leading-4">
                  <h2 className="underline uppercase select-none font-normal text-[10px]">silver</h2>
                  <h2 className=" uppercase select-none font-normal text-[10px]">product code: {hsnProduct.hsn}</h2>
                  <h2 className=" pb-0 uppercase select-none font-bold text-[10px]">exclusive of all taxes</h2>

                </div>

                {hsnProduct.quantity > 0 ? <ButtonPrimary
                  fontSize="text-[16px]"
                  sizeClass="py-2"
                  className="flex-1 flex-shrink-0 w-full mb-[10px]"
                  onClick={handleAddToCart}
                >
                  <span className=" uppercase tracking-wide ">Add to bag</span>
                </ButtonPrimary> : <ButtonPrimary disabled
                  className="flex-1 flex-shrink-0 w-full"
                >
                  <span className="uppercase tracking-wide">Out Of Stock</span>
                </ButtonPrimary>}
                <ButtonPrimary
                  fontSize="text-[16px]"
                  sizeClass="py-2"
                  className="flex-1 flex-shrink-0 w-full border border-custom-blue hover:bg-white bg-transparent group hover:text-white"
                  onClick={handleAddToCart}
                >

                  <span className=" uppercase tracking-wide text-custom-blue ">Add to wishlist</span>
                </ButtonPrimary>
                <CollapsableBar title={"product details"} state={true}>
                  <h2 className="text-[12px] underline uppercase">About This Product</h2>
                  <p className="text-[10px]">
                    Crafted with premium quality 925 sterling silver, this piece offers a timeless elegance that complements any style. Its sophisticated design ensures durability and versatility, making it perfect for both casual and formal occasions.
                  </p>
                  <h3 className="text-[12px] underline uppercase">Material & Quality</h3>
                  <ul className="text-[10px] list-disc px-[10px]">
                    <li>Made from 92.5% pure silver, known for its strength and shine.</li>
                    <li>Nickel-free and hypoallergenic, ensuring it's safe for sensitive skin.</li>
                    <li>Designed to resist tarnishing and maintain its luster with proper care.</li>
                  </ul>
                  <h3 className="text-[12px] underline uppercase">Care Tips</h3>
                  <ul className="text-[10px] list-disc">
                    <li>Avoid direct exposure to chemicals like perfumes, hairsprays, and household cleaners.</li>
                    <li>Store in a cool, dry place, ideally in an airtight pouch or box.</li>
                    <li>Clean gently with a soft, lint-free cloth to restore its shine.</li>
                    <li>Avoid wearing during activities like swimming, gym, or heavy-duty tasks.</li>
                  </ul>
                  <h3 className="text-[12px] underline uppercase">Why Choose 925 Sterling Silver?</h3>
                  <ul className="text-[10px] list-disc">
                    <li>Durable and designed to last for years with proper care.</li>
                    <li>Perfect for gifting, offering a blend of quality and elegance.</li>
                    <li>A sustainable and timeless choice for jewelry enthusiasts.</li>
                  </ul>
                  <p className="text-[10px]">
                    Add this exquisite 925 sterling silver piece to your collection and let its charm and quality elevate your style.
                  </p>
                </CollapsableBar>
                <CollapsableBar title="shipping and return ">

                  <div className="">

                    <div className="">
                      <h3 className="text-[12px] font-normal underline uppercase">Standard Shipping</h3>
                      <ul className="list-disc pl-5">
                        <li className="font-normal text-[10px]">Arrives in 2-4 business days.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-[12px] font-normal underline uppercase">Returns</h3>
                      <ul className="list-disc text-[10px] pl-5">
                        <li><span className=" text-[10px] font-bold">Free and easy</span> returns.</li>
                        <li className="font-normal text-[10px]">Prepaid return label included.</li>
                      </ul>
                      <h3 className="text-[12px] font-normal underline uppercase">cancellation</h3>
                      <ul className="list-disc text-[10px] pl-5">
                        <li><span className=" text-[10px] font-bold">Free and easy</span> cancellation.</li>
                        <li className="font-normal text-[10px]">Prepaid return label included.</li>
                      </ul>
                    </div>

                  </div></CollapsableBar>
              </div>
              {/* CONTENT */}
              {/* <div className="w-full md:pl-[15px] lg:w-3/5 xl:w-2/3 space-y-10 lg:pr-14 lg:space-y-14">
                {renderSection1()}
                {renderSection2()}
              </div> */}

              {/* SIDEBAR */}
              {/* <div className="flex-grow">
                <div className="hidden pr-[15px] lg:block sticky top-28">
                  {renderSectionSidebar()}
                </div>
              </div> */}



            </div>
          </div>
          {/* OTHER SECTION */}
          {/* <div className="custom-container pb-24 lg:pb-28 pt-14 space-y-14">
            {renderReviews()}
            <SectionSliderProductCard
              heading="Customers also purchased"
              subHeading="Products you might like"
              headingFontClassName="text-2xl font-semibold"
              headingClassName="mb-10 text-neutral-900 dark:text-neutral-50"
              data={recProducts ? recProducts : []}
            />
          </div> */}
          <div className="px-[15px] pb-[50px] space-y-9">
            <SectionSliderProductCard
              heading="Customers also purchased"
              subHeading="Products you might like"
              headingFontClassName="text-[30px] uppercase font-normal"
              headingClassName="mb-10 text-neutral-900 dark:text-neutral-50"
              data={recProducts ? recProducts : []}
            />
             <SectionSliderProductCard
              heading="similar products"
              subHeading="Products you might like"
              headingFontClassName="text-[30px] uppercase font-normal"
              headingClassName="mb-10 text-neutral-900 dark:text-neutral-50"
              data={recProducts ? recProducts : []}
            />
          </div>
          {/* MODAL VIEW ALL REVIEW */}
          <ModalViewAllReviews
            show={isOpenModalViewAllReviews}
            onCloseModalViewAllReviews={() =>
              setIsOpenModalViewAllReviews(false)
            }
          />

          <ListingImageGallery
            isShowModal={modal === "PHOTO_TOUR_SCROLLABLE"}
            onClose={handleCloseModalImageGallery}
            images={hsnProduct.images.map((item, index) => {
              return {
                id: index,
                url: item.image,
              };
            })}
          />
        </div>
      ) : (
        <ProductScreenSkeleton />
      )}
    </>
  );
}

export default ProductScreen;
