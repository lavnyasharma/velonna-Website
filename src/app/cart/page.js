"use client"
import { NoSymbolIcon, CheckIcon } from "@heroicons/react/24/outline";
import NcInputNumber from "@/components/NcInputNumber";
import Prices from "@/components/Prices";
import { Product, PRODUCTS } from "@/data/data";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cartContext";
import { useEffect } from "react";

const CartPage = () => {
  const { cart, removeFromCart } = useCart()
  useEffect(() => {
    if (cart) {
     
    }
  }, [cart]);
  const formatPrice = (price) => {
    return Number(price)?.toLocaleString('en-IN');
  };
  function formatTitle(title) {
    if (!title) return ""; // Handle empty or undefined input

    return title
      .split(" ") // Split the string into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
      .join(" "); // Join the words back into a single string
  }

  const renderStatusSoldout = () => {
    return (
      <div className="rounded-full flex items-center justify-center px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 border border-custom-blue dark:border-slate-700">
        <NoSymbolIcon className="w-3.5 h-3.5" />
        <span className="ml-1 leading-none">Sold Out</span>
      </div>
    );
  };

  const renderStatusInstock = () => {
    return (
      <div className="rounded-full flex items-center justify-center px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 border border-custom-blue dark:border-slate-700">
        <CheckIcon className="w-3.5 h-3.5" />
        <span className="ml-1 leading-none">In Stock</span>
      </div>
    );
  };



  const ShippingInformation = () => {
    return (
      <div className="content-asset pt-4 border-t-[0.5px] border-custom-blue dark:border-slate-700 mt-4">
        <div className="shipping-information space-y-2">
          <InformationItem
            iconClass="delivery-icon"
            title="Shipping Options"
            content={
              <>
                <p>
                  <strong>Standard:</strong> FREE on all orders $75+. Arrives in
                  2-4 business days. Order by 11:59PM ET on 2/9 for delivery by
                  Valentine's Day. Engraving orders may take 1 extra day to
                  process than standard orders. Order by 11:59PM ET on 2/8 for
                  delivery by Valentine's Day.
                </p>
                <p>
                  <strong>Express:</strong> Free on Lab-Grown Diamonds. Arrives in
                  1-2 business days. Order by 11:59PM ET on 2/10 for delivery by
                  Valentine's Day. Engraving orders may take 1 extra day to
                  process than standard orders. Order by 11:59PM ET on 2/9 for
                  delivery by Valentine's Day.
                </p>
                <p>
                  <strong>In-Store Pickup:</strong> Free on all orders. Ready for
                  pickup within 2 hours.
                </p>
              </>
            }
          />

          <InformationItem
            iconClass="warranty-icon"
            title="Free & Easy Returns"
            content={
              <p>
                If you are not satisfied with your purchase, returns will be
                accepted until January 31, 2025 by mail or in-store with original
                receipt/electronic receipt lookup (excluding Final Sale).
              </p>
            }
          />

          <InformationItem
            iconClass="gift-icon"
            title="Premium Gift Packaging"
            content={
              <p>
                Make your gift extra special by adding a{" "}
                <a
                  href=""
                  className="text-blue-500 underline"
                >
                  Premium Gift Box
                </a>
                , gift bag, tissue paper, and a blank gift note for $5.00.
              </p>
            }
          />

          <InformationItem
            iconClass="phone-icon"
            title="Need help?"
            content={
              <p>
                Contact{" "}
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Velonna Customer Service
                </a>
              </p>
            }
          />
        </div>
      </div>
    );
  };

  const InformationItem = ({ iconClass, title, content }) => {
    return (
      <div className="information-item flex items-center border-b mb-2 pb-2">
        <div className="left-icon flex-shrink-0">
          <span className={`${iconClass} shipping-icon inline-block`} />
        </div>
        <div>
          <div className="sub-heading font-semibold text-[12px] pb-2">{title}</div>
          <div className="sub-text text-[10px] text-gray-700">{content}</div>
        </div>
      </div>
    );
  };


  const renderProduct = (cartData, index) => {
    const { id, product } = cartData;

    return (
      <div
        key={index}
        className="relative border-b-[0.5px] md:border pb-[10px]  md:bg-white border-custom-blue md:border-custom-grey  justify-between  px-[10px] py-[5px] last:mb-[0px] mb-[15px]  flex  first:mt-0 "

      >
        <div className="relative flex items-start justify-center aspect-1 w-1/3 md:w-1/5 md:m-[10px] overflow-hidden" style={{ aspectRatio: 1 / 1 }}>
          <Image
            width={300}
            height={300}
            style={{ aspectRatio: 1 / 1 }}
            objectFit="cover"
            src={product.thumbnail}
            alt={product.title}
            sizes="300px"
            className="object-cover"
          />

        </div>

        <div className="ml-4 md:ml-3 w-2/3 justify-between sm:ml-6 flex md:flex-1 md:flex-col">
          <div>
            <div className="flex justify-between ">
              <div className="flex flex-col">
                <div className="text-[12px] whitespace-nowrap block overflow-hidden text-ellipsis w-full h-fit md:text-[16px] font-normal">
                  {formatTitle(product.title)}
                </div>
                <div className="md:mt-1.5 leading-3 md:leading-4 font-normal text-[10px] md:text-[12px] text-gray-700 dark:text-slate-300">
                  <div className="flex md:px-0 line items-center">
                    <span>Collection: {formatTitle(product.collection)}</span>
                  </div>
                  <div className="flex w-max   md:bg-white md:w-max md:px-0 rounded-md items-center">
                    <span>Category: {formatTitle(product.category)}</span>
                  </div>
                 
                  <div className="flex md:px-0 items-center">
                    {/* <svg className="w-2 h-2 mr-1" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21 9V3H15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 15V21H9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 3L13.5 10.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.5 13.5L3 21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg> */}

                    <span>Size: {product.size}</span>
                  </div>


                </div>
                <div className="text-custom-blue bg-gray-100 w-max px-1 md:bg-gray-50 md:w-max md:px-1 py-[3px] rounded-md text-[8px] md:text-[10px] mt-1 flex flex-row">
                  <div className="flex items-center">
                    <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.63639 6.99013C6.84386 7.1976 6.84386 7.53397 6.63639 7.74143L5.7725 8.60533H8.27232C9.21251 8.60533 9.97949 7.84333 9.97949 6.89824C9.97949 5.95914 9.21859 5.19824 8.27949 5.19824H6.89116C6.59776 5.19824 6.35991 4.96039 6.35991 4.66699C6.35991 4.37359 6.59776 4.13574 6.89116 4.13574H8.27949C9.80539 4.13574 11.042 5.37234 11.042 6.89824C11.042 8.43232 9.79722 9.66783 8.27241 9.66783H5.77242L6.63639 10.5318C6.84386 10.7393 6.84386 11.0756 6.63639 11.2831C6.42893 11.4906 6.09256 11.4906 5.88509 11.2831L4.11426 9.51227C4.0417 9.43971 3.99452 9.35138 3.97271 9.25831C3.96352 9.21922 3.95866 9.17846 3.95866 9.13658C3.95866 9.05996 3.97488 8.98713 4.00407 8.92134C4.02519 8.87367 4.05366 8.82847 4.08949 8.78745C4.09828 8.77738 4.10745 8.76764 4.11697 8.75826L5.88509 6.99013C6.09256 6.78267 6.42893 6.78267 6.63639 6.99013Z" fill="#282C3F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.416992 7.50033C0.416992 3.58831 3.58831 0.416992 7.50033 0.416992C11.4123 0.416992 14.5837 3.58831 14.5837 7.50033C14.5837 11.4123 11.4123 14.5837 7.50033 14.5837C3.58831 14.5837 0.416992 11.4123 0.416992 7.50033ZM7.50033 1.47949C4.17511 1.47949 1.47949 4.17511 1.47949 7.50033C1.47949 10.8255 4.17511 13.5212 7.50033 13.5212C10.8255 13.5212 13.5212 10.8255 13.5212 7.50033C13.5212 4.17511 10.8255 1.47949 7.50033 1.47949Z" fill="#282C3F"></path></svg>
                  </div>
                  <div className="flex pl-[4px] items-center">
                    <span className=" text-red-600">
                      7 days
                    </span>
                    <span className="text-slate-500 font-normal pl-[3px] dark:text-slate-400">
                      {" easy return"}
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex justify-between w-full sm:hidden relative">
                  <Prices
                    contentClass="py-1 md:py-1.5 md:px-2.5 text-[12px] antialiased font-normal h-full"
                    price={(product.price)}
                  />
                </div>
              </div>

              {/* <div className="hidden sm:block text-center relative">
                <NcInputNumber className="relative z-10" />
              </div> */}

              <div className="hidden sm:flex-1 sm:flex justify-end">
                <Prices price={(product.price)} className="mt-0.5" contentClass="font-bold text-[15px]" />

              </div>

            </div>
          </div>

          <div className="flex mt-auto pt-4 items-end justify-end w-full  text-sm">
            {/* {product.qualtity > 1
              ? renderStatusSoldout()
              : renderStatusInstock()} */}

            <button
              onClick={() => {
                removeFromCart(id)
              }}
              className="z-10 flex px-2 p-1 bg-red-50 uppercase items-end mt-3 font-medium text-red-500 text-[12px] "
            >
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="nc-CartPage bg-[#fefefe] mt-0 md:mt-0  ">
      <main className="custom-container px-[15px] py-16 lg:pb-28 lg:pt-8  ">
        <div className="mb-4 px-32 sm:mb-4">
          <span className="text-[24px] uppercase font-bold hidden md:block ">
            My Bag({cart ? `${cart.cart_item.length} ${cart.cart_item.length === 1 ? "item" : "items"}` : "0"})
          </span>

        </div>
        <div className="mb-[10px] flex justify-center items-center w-full md:hidden">
          <span className="block justify-center items-center text-[24px] uppercase text-custom-blue font-bold tracking-tighter mb-[10px])">
            My Bag({cart ? `${cart.cart_item.length} ${cart.cart_item.length === 1 ? "item" : "items"}` : "0"})
          </span>
        </div>
        <div className="border-custom-blue bg-custom-blue border-t-[0.5px] md:mx-32 h-[0.5px]  dark:border-slate-700 block my-4 xl:my-4" />

        <div className="flex md:px-32 flex-col lg:flex-row">

          <div className="w-full md:w-[50%] xl:w-[70%] ">

            {cart ? cart.cart_item.length > 0 ? cart.cart_item.map(renderProduct) : "No item in cart" : "Loading Cart"}
          </div>
          <div className="border-t hidden md:block lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700  lg:my-0 lg:mx-8 xl:mx-8 2xl:mx-20 flex-shrink-0"></div>
          <div className=" mt-10 md:w-[40%]">
            <div className="relative bg-custom-grey md:shadow-none ticketborder  p-[20px] mb-[20px]">
              <h3 className="text-lg font-semibold border-b-[0.5px] border-custom-blue pb-[8px]">Order Summary</h3>
              <div className="mt-2 md:mt-4 text-[12px] text-slate-500 dark:text-slate-400">
                <div className="flex justify-between text-gray-700 pb-2 md:pb-2">
                  <span>Subtotal</span>
                  <span className="font-semibold text-custom-blue dark:text-slate-200">
                    ₹ {formatPrice(cart?.subtotal ?? '0')}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700 pb-2 md:pb-2">
                  <span>Shipping </span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">
                    Free
                  </span>
                </div>
                <div className="flex justify-between pb-2 text-gray-700">
                  <span>Tax estimate</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">
                    3% (GST)
                  </span>
                </div>
                <div className="flex border-t-[0.5px] border-custom-blue justify-between mt-2 md:mt-4 font-semibold text-slate-900 dark:text-slate-200 text-base pt-4">
                  <span>Order total</span>
                  <span>
                    ₹
                    {cart?.total
                      ? formatPrice((cart.total + cart.total * 0.03).toFixed(2))
                      : formatPrice('0')}

                  </span>
                </div>

              </div>
              <ButtonPrimary href="/checkout" fontSize="text-[12px]" className="mt-8 w-full uppercase">
                Checkout
              </ButtonPrimary>
              <div className="mt-5 text-[10px] flex-col text-slate-500 dark:text-slate-400 flex items-center justify-center">
                <p className="flex pl-5 flex-row space-x-1">
                  <svg
                    className="w-4 h-4 pr-1"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8V13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9945 16H12.0035"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Learn more{` `}
                  <Link

                    href="/refundpolicy"
                    className="text-slate-900 dark:text-slate-200 underline font-medium"
                  >
                    Refund
                  </Link>
                  <span>
                    {` `}and{` `}
                  </span>
                  <Link


                    href="/privacypolicy"
                    className="text-slate-900 dark:text-slate-200 underline font-medium"
                  >
                    Privacy
                  </Link>
                  <span>{` `} policies</span>

                </p>
              </div>
            </div>
            <ShippingInformation />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
