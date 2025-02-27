"use client";
import Label from "@/components/Label/Label";
import NcInputNumber from "@/components/NcInputNumber";
import Prices from "@/components/Prices";
import { Product, PRODUCTS } from "@/data/data";
import { useEffect, useState } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Input from "@/shared/Input/Input";
import ContactInfo from "./ContactInfo";
import PaymentMethod from "./PaymentMethod";
import ShippingAddress from "./ShippingAddress";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cartContext";
import Logo from "@/shared/Logo/Logo";
import { Lock, ShieldCheck, CreditCard, CheckCircle, HelpCircle } from "lucide-react";
import SecurePaymentInfo from "./SecurePaymentContent";
import { useRouter, useSearchParams } from "next/navigation";


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


// {
//   "order_amount": 1.00,
//   "order_currency": "INR",
//   "order_id": "devstudio_4330737", backend --
//   "customer_details": {
//       "customer_id": "devstudio_user",
//       "customer_phone": "8474090589"
//   },
//   "order_meta": {
//       "return_url": "https://www.cashfree.com/devstudio/preview/pg/seamless?order_id={order_id}",
//       "notify_url": "https://www.cashfree.com/devstudio/preview/pg/webhooks/63411302"
//   }
// }

const CheckoutPage = () => {
  const payment = {
    order_amount: 1,
    order_currency: "",
    customer_details: {
      customer_id: "devstudio_user",
      customer_phone: "8474090589"
    },
    order_meta: {
      "return_url": "https://www.cashfree.com/devstudio/preview/pg/seamless?order_id={order_id}",
      "notify_url": "https://www.cashfree.com/devstudio/preview/pg/webhooks/63411302"
    }

  }
  const [tabs, setTabs] = useState(null)
  const router = useRouter();
  const searchParams = useSearchParams();
  const [paymentMethod, setPaymentMethod] = useState("")
  const [paymentData, setPaymentData] = useState("")
  const { cart } = useCart()
  useEffect(() => {
    if (cart) {
      console.log(cart)
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
  const [tabActive, setTabActive] = useState("ShippingAddress");

  const handleScrollToEl = (id) => {
    const element = document.getElementById(id);
    setTimeout(() => {
      element?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };


  useEffect(() => {
    const stage = searchParams.get("stage");
    console.log(stage)
    if (stage === null)
      router.push(`?stage=address`)
    if (stage === "payment" || stage === "address") {
      setTabs(stage);
    }
  }, [searchParams]);


  const handleNext = () => {
    if (tabs === "address") {
      router.push(`?stage=payment`)
    } else if (tabs === "payment") {
      console.log("pay");
    }
  };

  const renderLeft = () => {
    return (
      <div className="space-y-8">
        {/* <div id="ContactInfo" className="scroll-mt-24">
          <ContactInfo
            isActive={tabActive === "ContactInfo"}
            onOpenActive={() => {
              setTabActive("ContactInfo");
              handleScrollToEl("ContactInfo");
            }}
            onCloseActive={() => {
              setTabActive("ShippingAddress");
              handleScrollToEl("ShippingAddress");
            }}
          />
        </div> */}


        {tabs === null ? <div className="fixed h-full w-full bg-white z-50 top-0 left-0 right-0 bottom-0">
          <div className="flex justify-center items-center animate-pulse w-full h-full">
            <div className="flex flex-col items-center space-y-4">
              <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
              <h3 className="text-[16px] font-semibold text-center uppercase">Processing Your checkout</h3>
            </div>
          </div>
        </div> : ""}
        {tabs === "payment" ? <div id="PaymentMethod" className="scroll-mt-24">
          <PaymentMethod
            isActive={tabActive === "PaymentMethod"}
            onOpenActive={() => {
              setTabActive("PaymentMethod");
              handleScrollToEl("PaymentMethod");
            }}
            onCloseActive={() => setTabActive("PaymentMethod")}
          />
        </div> : ""}

        {tabs === "address" ? <div id="ShippingAddress" className="scroll-mt-24">
          <ShippingAddress
            isActive={tabActive === "ShippingAddress"}
            onOpenActive={() => {
              setTabActive("ShippingAddress");
              handleScrollToEl("ShippingAddress");
            }}
            onCloseActive={() => {
              setTabActive("PaymentMethod");
              handleScrollToEl("PaymentMethod");
            }}
          />
        </div> : ""}

      </div>
    );
  };

  return (
    <div className="nc-CheckoutPage ">
      <main className=" pb-28 ">
        <div className="mb-4 py-[15px] md:px-32 lg:px-[15px] flex justify-between items-center px-[15px] w-full border-b border-slate-200 dark:border-slate-700">
          <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold ">
            <Logo />
          </h2>
          <div className="flex items-center space-x-2">
            <svg role="img" class="icon__password" aria-label="icon password" width="20" height="20"><defs><symbol fill="none" id="sprite-password" viewBox="0 0 20 20"><title>password</title><path fill-rule="evenodd" clip-rule="evenodd" d="M6.475 4.5a3.525 3.525 0 017.05 0v2.4a.1.1 0 01-.1.1h-6.85a.1.1 0 01-.1-.1V4.5zM5.425 7a.1.1 0 00.1-.1V4.5a4.475 4.475 0 018.95 0v2.4a.1.1 0 00.1.1H17.9a.1.1 0 01.1.1v12.8a.1.1 0 01-.1.1H2.1a.1.1 0 01-.1-.1V7.1a.1.1 0 01.1-.1h3.325zM3 8.1a.1.1 0 01.1-.1h13.8a.1.1 0 01.1.1v10.8a.1.1 0 01-.1.1H3.1a.1.1 0 01-.1-.1V8.1zm7 5.9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm.5 1.032c0-.048.034-.089.08-.1a2.5 2.5 0 10-1.16 0c.046.011.08.052.08.1V16.9a.1.1 0 00.1.1h.8a.1.1 0 00.1-.1v-1.868z" fill="#27251F"></path></symbol></defs>
              <g><title>password</title><path fill-rule="evenodd" clip-rule="evenodd" d="M6.475 4.5a3.525 3.525 0 017.05 0v2.4a.1.1 0 01-.1.1h-6.85a.1.1 0 01-.1-.1V4.5zM5.425 7a.1.1 0 00.1-.1V4.5a4.475 4.475 0 018.95 0v2.4a.1.1 0 00.1.1H17.9a.1.1 0 01.1.1v12.8a.1.1 0 01-.1.1H2.1a.1.1 0 01-.1-.1V7.1a.1.1 0 01.1-.1h3.325zM3 8.1a.1.1 0 01.1-.1h13.8a.1.1 0 01.1.1v10.8a.1.1 0 01-.1.1H3.1a.1.1 0 01-.1-.1V8.1zm7 5.9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm.5 1.032c0-.048.034-.089.08-.1a2.5 2.5 0 10-1.16 0c.046.011.08.052.08.1V16.9a.1.1 0 00.1.1h.8a.1.1 0 00.1-.1v-1.868z" fill="#27251F"></path></g>
            </svg>
            <span className="text-[12px] text-slate-900 dark:text-slate-200 font-semibold">Secure checkout</span>
          </div>
        </div>
        <div className="mx-[15px]  md:px-32 px-[15px]  flex justify-between items-center md:mx-32  lg:space-x-6 mb-8">
          <div className={`m-0 w-6 flex cursor-pointer justify-center items-center font-bold aspect-1 text-[12px] border border-separate rounded-full
          ${tabs === "address" ? "bg-custom-blue text-white" : ""}`}
            onClick={() => {
              if (tabs === "payment") {
                setTabs("address")
              }
            }}
          >{tabs !== "payment" ? 1 :
            <svg role="img" class="icon__checkbox-selected" aria-label="icon checkbox-selected" width="20" height="20"><defs><symbol id="sprite-checkbox-selected" viewBox="0 0 20 20"><title>checkbox-selected</title><path d="M15.507 4.11l-8.054 8.218-2.96-3.02a.362.362 0 00-.52 0l-.865.884a.38.38 0 000 .53l4.085 4.168a.362.362 0 00.52 0l9.18-9.366a.38.38 0 000-.53l-.867-.884a.362.362 0 00-.52 0z"></path></symbol></defs>
              <g><title>checkbox-selected</title><path d="M15.507 4.11l-8.054 8.218-2.96-3.02a.362.362 0 00-.52 0l-.865.884a.38.38 0 000 .53l4.085 4.168a.362.362 0 00.52 0l9.18-9.366a.38.38 0 000-.53l-.867-.884a.362.362 0 00-.52 0z"></path></g>
            </svg>}
          </div>
          <div className={`w-full m-1 h-[1px]  ${tabs === "payment" ? "bg-custom-blue" : "bg-custom-grey"}`} />
          <div className={`m-0 w-6 flex justify-center items-center font-bold aspect-1 text-[12px] border border-separate rounded-full ${tabs === "payment" ? "bg-black text-white" : ""}`}>2
          </div>

        </div>
        <div className="flex md:px-32 custom-container flex-col  lg:flex-row">

          <div className="w-full lg:w-[50%] xl:w-[70%] ">{renderLeft()}</div>

          <div className="flex-shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 my-10 lg:my-0 lg:mx-10 xl:lg:mx-14 2xl:mx-16 "></div>

          <div className=" mt-10 lg:w-[40%]">
            <div className=" mb-4 flex-row flex justify-between"><span className="uppercase font-bold">{cart ? `${cart.cart_item.length} ${cart.cart_item.length === 1 ? "item" : "items"}` : "0"}
            </span>
              <div>
                <Link href="/cart" className="text-[12px] capitalize underline text-custom-blue dark:text-slate-200 font-normal">
                  Edit
                </Link>
              </div>
            </div>
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
            <ButtonPrimary onClick={handleNext} className="w-full my-4 text-[12px] sticky bottom-2"> {tabs === "address" ? "Payment" : "Pay"}</ButtonPrimary>
            <SecurePaymentInfo />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
