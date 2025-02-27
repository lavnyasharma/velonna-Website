"use client";

import Label from "@/components/Label/Label";
import React, { FC, useEffect, useRef, useState } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Input from "@/shared/Input/Input";
import Radio from "@/shared/Radio/Radio";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import icons from "payments-icons-library";
import { axiosInstance } from "@/axios";
import blurqr from "@/images/utils/image.png";
import Image from "next/image";
import Select from "@/shared/Select/Select";
import { netBankingCodes, walletData } from "./data";



const PaymentMethod = ({
  isActive,
  onCloseActive,
  onOpenActive,
}) => {

  const upiIcon = icons.getIcon("upi", "svg");
  const [mothodActive, setMethodActive] = useState("Upi");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [upiId, setUpiId] = useState("");
  const [upiIdVerified, setUpiIdVerified] = useState(false);



  const renderDebitCredit = () => {

    const active = mothodActive === "Credit-Card";
    return (
      <div className="flex items-start border-[0.5px] border-placeholder  duration-150 space-x-4 sm:space-x-6">
        <div className="w-full">
          <div className="flex space-x-4 cursor-pointer p-[1.5rem] border-b-[0.5px] border-custom-blue items-center" onClick={() => setMethodActive("Credit-Card")}>
            <label
              htmlFor="Credit-Card"
              className="flex cursor-pointer items-center space-x-4 sm:space-x-6"
            >
              <div
                className={``}
              >
                <svg width={50} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z" /></svg>
              </div>
              <div>
                <p className="font-normal uppercase text-[16px] ">Card</p>
                <p className="text-[12px] text-placeholder">Visa, Master Card, RuPay and more</p>
              </div>
            </label>
          </div>
          <div
            className={`pt-4 pb-4 lg:space-x-3 bg-custom-grey duration-300 px-4 w-full flex-col xl:flex-row ${active ? "flex duration-300" : "hidden duration-300"
              }`}
          >
            {/* Credit Card Preview */}
            <Cards
              preview={false}
              number={cardNumber}
              name={cardName}
              placeholders={{ name: "customer name" }}
              expiry={expiry}
              cvc={cvc}
              focused={focus}
            />
            <div className="h-[0.5px] w-full lg:h-full lg:w-[0.5px] bg-custom-blue my-4" />
            <div className="flex flex-col bg-white p-4 space-y-2 xl:space-y-0  xl:mt-0 justify-between">
              <div className="w-full flex">
                <Input
                  onChange={(e) => {
                    if (e.target.value.length <= 16)
                      setCardNumber(e.target.value)
                  }}
                  value={cardNumber}
                  autoComplete="off"
                  label="Card Number"
                  className=" w-full flex-grow"
                  type="number"
                  onFocus={() => setFocus("number")}
                />
              </div>

              <div className="w-full">
                <Input
                  onChange={(e) => setCardName(e.target.value)}
                  value={cardName}
                  autoComplete="off"
                  label="Name on Card"
                  className=""
                  type="text"
                  onFocus={() => setFocus("name")}
                />
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="sm:w-2/3">
                  <Input
                    onChange={(e) => setExpiry(e.target.value)}
                    value={expiry}
                    label="Expiration date (MM/YY)"
                    autoComplete="off"
                    className=""
                    placeholder="MM/YY"
                    type="tel"
                    onFocus={() => setFocus("expiry")}
                  />
                </div>
                <div className="flex-1">
                  <Input
                    onChange={(e) => setCvc(e.target.value)}
                    value={cvc}
                    label="CVC"
                    autoComplete="off"
                    className=""
                    placeholder="CVC"
                    type="tel"
                    onFocus={() => setFocus("cvc")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const [searchBankCode, setSearchBankCode] = useState("")
  const [selectedBank, setSelectedBank] = useState(0)
  const renderInterNetBanking = () => {
    const filteredBanks = netBankingCodes.filter((bank) =>
      bank.name.toLowerCase().includes(searchBankCode.toLowerCase())
    );
    const active = mothodActive === "Internet-banking";
    return (
      <div className="flex items-start border-[0.5px] border-custom-blue  duration-150 space-x-4 sm:space-x-6">

        <div className="w-full">
          <div className="flex space-x-4 cursor-pointer p-[1.5rem]  border-b-[0.5px] border-custom-blue items-center" onClick={() => setMethodActive("Internet-banking")}>

            <label
              htmlFor="Internet-banking"
              className="flex items-center cursor-pointer space-x-4 sm:space-x-6"
            >
              <div

              >
                <svg xmlns="http://www.w3.org/2000/svg" width={50} height={20} viewBox="0 0 512 512"><path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160l0 8c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24l0-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224l-64 0 0 196.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 224l-64 0 0 192-40 0 0-192-64 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
              </div>
              <div>
                <p className="font-normal uppercase text-[16px] ">Internet banking</p>
                <p className="text-[12px] text-placeholder">Axis, Hdfc, Sbi and 100+ Banks</p>
              </div>
            </label>
          </div>
          <div className={`bg-custom-grey ${active ? "block" : "hidden"}`}>
            <div className="p-4 ">
              <div className="p-4 bg-white">
                <Input
                  onChange={(e) => setSearchBankCode(e.target.value)}
                  value={searchBankCode}
                  label="Search"
                  required={false}
                  autoComplete="off"
                  className=""
                  type="text"
                />
              </div>
              <div className="h-[0.5px] relative w-full  bg-custom-blue mt-4 mb-2"><span className="absolute font-normal text-[12px] text-custom-blue top-0 px-2 left-1/2 translate-x-[-50%] translate-y-[-55%] bg-custom-grey">Select Bank</span></div>
              <div className="mt-4 space-y-2 bg-white p-4 h-[34rem] overflow-scroll">
                {filteredBanks.length === 0 ? (
                  <div>No results found</div>
                ) : (
                  filteredBanks.map((bank, index) => {
                    return (
                      <div className="w-full bg-custom-grey" key={bank.code}>
                        <div
                          className="flex items-center p-4 justify-between"
                          onClick={() => {
                            // You can add any logic for selecting a bank here
                            setSelectedBank(bank.code);
                          }}
                        >
                          <div className="flex items-center">
                            <div>
                              <img
                                className="h-6"
                                src={icons.getIcon(bank.name, "md").icon_url}
                                alt={bank.name}
                              />
                            </div>
                            <div className="pl-2 text-[14px]">{bank.name}</div>
                          </div>
                          <div className="">
                            <Radio
                              defaultChecked={selectedBank === bank.code}
                              id={index}
                              sizeClassName="h-5 w-5"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  };

  const renderWallet = () => {
    const active = mothodActive === "Wallet";
    return (
      <div className="flex items-start border-[0.5px] border-custom-blue  duration-150 space-x-4 sm:space-x-6">

        <div className="w-full">
          <div className="flex space-x-4 cursor-pointer p-[1.5rem] border-b-[0.5px] border-custom-blue items-center" onClick={() => setMethodActive("Wallet")}>

            <label
              htmlFor="Wallet"
              className="flex cursor-pointer items-center space-x-4 sm:space-x-6 "
            >

              <div
                className={``}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height={20} width={50} viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
              </div>
              <div>
                <p className="font-normal uppercase text-[16px] ">Wallet</p>
                <p className="text-[12px] text-placeholder">PayTm, Amazon Pay, Phone Pe, Airtel Money and more</p>
              </div>
            </label>
          </div>
          <div className={`p-4 bg-custom-grey space-y-6 ${active ? "block" : "hidden"}`}>
            <div className="p-4 ">

              <div className="space-y-2 bg-white p-4 h-[34rem] overflow-scroll">
                {walletData.length === 0 ? (
                  <div>No wallet</div>
                ) : (
                  walletData.map((wallet, index) => {
                    return (
                      <div className="w-full bg-custom-grey" key={wallet.code}>
                        <div
                          className="flex items-center p-4 justify-between"
                          onClick={() => {
                            // You can add any logic for selecting a bank here
                            setSelectedBank(wallet.code);
                          }}
                        >
                          <div className="flex items-center">
                            <div>
                              <img
                                className="h-6"
                                src={icons.getIcon(wallet.name, "md").icon_url}
                                alt={wallet.name}
                              />
                            </div>
                            <div className="pl-2 text-[14px]">{wallet.name}</div>
                          </div>
                          <div className="">
                            <Radio
                              defaultChecked={selectedBank === wallet.code}
                              id={index}
                              sizeClassName="h-5 w-5"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  function isValidUpi(upiId) {
    const pattern = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/;
    return pattern.test(upiId);
  }
  useEffect(() => {
    if (upiId) {
      setUpiIdVerified(isValidUpi(upiId));
    }
  }, [upiId]);
  const upiInputRef = useRef(null)
  const [appUpiId, setAppUpiId] = useState("")
  const [appUpiIdVpa, setAppUpiIdVpa] = useState("")
  const [selectedUpiAPP, setSelectedUpiApp] = useState(-1)
  useEffect(() => {
    if (appUpiIdVpa === "other") {
      console.log("this")
      upiInputRef.current.focus()
      setAppUpiId("")
      setAppUpiIdVpa("")
      setSelectedUpiApp(-1)
    }
  }, [appUpiIdVpa])


  const renderUpi = () => {
    const upiIcons = icons.getModesIcons("upi", "sm")
    const upiAppsData = [
      {
        name: "Google Pay",
        icon: icons.getIcon("google pay", "md").icon_url,
        vpaOptions: [
          "okicic",
          "okaxis",
          "oksbi",
          "okhdfcbank"
        ]
      },
      {
        name: "PhonePe",
        icon: icons.getIcon("phonepe", "md").icon_url,
        vpaOptions: [
          "ybl",
          "axl",
          "ibl",
        ]
      },
      {
        name: "Paytm",
        icon: icons.getIcon("paytm", "md").icon_url,
        vpaOptions: [
          "pthdfc",
          "ptyes",
          "ptsbi",
          "ptaxis",
        ]
      }
    ]


    const active = mothodActive === "Upi";
    return (
      <div className="flex items-start border-[0.5px] border-custom-blue  duration-150 space-x-4 sm:space-x-6">
        <div className="w-full">
          <div className="flex space-x-4 cursor-pointer p-[1.5rem] border-b-[0.5px] border-custom-blue items-center" onClick={() => setMethodActive("Upi")}>
            <label
              htmlFor="Upi"
              className="flex cursor-pointer items-center space-x-4 sm:space-x-6 "
            >
              <div
                className={``}
              >
                <svg width={50} height={20} viewBox="0 0 1024 466" id="upi">
                  <path fill="#3d3d3c" d="M98.1 340.7h6.3l-5.9 24.5c-.9 3.6-.7 6.4.5 8.2 1.2 1.8 3.4 2.7 6.7 2.7 3.2 0 5.9-.9 8-2.7 2.1-1.8 3.5-4.6 4.4-8.2l5.9-24.5h6.4l-6 25.1c-1.3 5.4-3.6 9.5-7 12.2-3.3 2.7-7.7 4.1-13.1 4.1-5.4 0-9.1-1.3-11.1-4s-2.4-6.8-1.1-12.2l6-25.2zm31.4 40.3 10-41.9 19 24.6c.5.7 1 1.4 1.5 2.2.5.8 1 1.7 1.6 2.7l6.7-27.9h5.9l-10 41.8-19.4-25.1-1.5-2.1c-.5-.8-.9-1.5-1.2-2.4l-6.7 28h-5.9zm44.2 0 9.6-40.3h6.4l-9.6 40.3h-6.4zm15.5 0 9.6-40.3h21.9l-1.3 5.6h-15.5l-2.4 10H217l-1.4 5.7h-15.5l-4.5 18.9h-6.4zm29 0 9.6-40.3h6.4l-9.6 40.3h-6.4zm15.5 0 9.6-40.3h21.9l-1.3 5.6h-15.5l-2.4 10.1h15.5l-1.4 5.7h-15.5l-3.1 13H257l-1.4 5.9h-21.9zm29.3 0 9.6-40.3h8.6c5.6 0 9.5.3 11.6.9 2.1.6 3.9 1.5 5.3 2.9 1.8 1.8 3 4.1 3.5 6.8.5 2.8.3 6-.5 9.5-.9 3.6-2.2 6.7-4 9.5-1.8 2.8-4.1 5-6.8 6.8-2 1.4-4.2 2.3-6.6 2.9-2.3.6-5.8.9-10.4.9H263zm7.8-6h5.4c2.9 0 5.2-.2 6.8-.6 1.6-.4 3-1.1 4.3-2 1.8-1.3 3.3-2.9 4.5-4.9 1.2-1.9 2.1-4.2 2.7-6.8.6-2.6.8-4.8.5-6.7-.3-1.9-1-3.6-2.2-4.9-.9-1-2-1.6-3.5-2-1.5-.4-3.8-.6-7.1-.6h-4.6l-6.8 28.5zm59.7-12.1-4.3 18.1h-6l9.6-40.3h9.7c2.9 0 4.9.2 6.2.5 1.3.3 2.3.8 3.1 1.6 1 .9 1.7 2.2 2 3.8.3 1.6.2 3.3-.2 5.2-.5 1.9-1.2 3.7-2.3 5.3-1.1 1.6-2.4 2.9-3.8 3.8-1.2.7-2.5 1.3-3.9 1.6-1.4.3-3.6.5-6.4.5h-3.7zm1.7-5.4h1.6c3.5 0 6-.4 7.4-1.2 1.4-.8 2.3-2.2 2.8-4.2.5-2.1.2-3.7-.8-4.5-1.1-.9-3.3-1.3-6.6-1.3H335l-2.8 11.2zm40.1 23.5-2-10.4h-15.6l-7 10.4H341l29-41.9 9 41.9h-6.7zm-13.8-15.9h10.9l-1.8-9.2c-.1-.6-.2-1.3-.2-2-.1-.8-.1-1.6-.1-2.5-.4.9-.8 1.7-1.3 2.5-.4.8-.8 1.5-1.2 2.1l-6.3 9.1zm29.7 15.9 4.4-18.4-8-21.8h6.7l5 13.7c.1.4.2.8.4 1.4.2.6.3 1.2.5 1.8l1.2-1.8c.4-.6.8-1.1 1.2-1.6l11.7-13.5h6.4L399 362.5l-4.4 18.4h-6.4zm60.9-19.9c0-.3.1-1.2.3-2.6.1-1.2.2-2.1.3-2.9-.4.9-.8 1.8-1.3 2.8-.5.9-1.1 1.9-1.8 2.8l-15.4 21.5-5-21.9c-.2-.9-.4-1.8-.5-2.6-.1-.8-.2-1.7-.2-2.5-.2.8-.5 1.7-.8 2.7-.3.9-.7 1.9-1.2 2.9l-9 19.8h-5.9l19.3-42 5.5 25.4c.1.4.2 1.1.3 2 .1.9.3 2.1.5 3.5.7-1.2 1.6-2.6 2.8-4.4.3-.5.6-.8.7-1.1l17.4-25.4-.6 42h-5.9l.5-20zm10.6 19.9 9.6-40.3h21.9l-1.3 5.6h-15.5l-2.4 10.1h15.5l-1.4 5.7h-15.5l-3.1 13H483l-1.4 5.9h-21.9zm29.2 0 10-41.9 19 24.6c.5.7 1 1.4 1.5 2.2.5.8 1 1.7 1.6 2.7l6.7-27.9h5.9l-10 41.8-19.4-25.1-1.5-2.1c-.5-.8-.9-1.5-1.2-2.4l-6.7 28h-5.9zm65.1-34.8-8.3 34.7h-6.4l8.3-34.7h-10.4l1.3-5.6h27.2l-1.3 5.6H554zm6.7 26.7 5.7-2.4c.1 1.8.6 3.2 1.7 4.1 1.1.9 2.6 1.4 4.6 1.4 1.9 0 3.5-.5 4.9-1.6 1.4-1.1 2.3-2.5 2.7-4.3.6-2.4-.8-4.5-4.2-6.3-.5-.3-.8-.5-1.1-.6-3.8-2.2-6.2-4.1-7.2-5.9-1-1.8-1.2-3.9-.6-6.4.8-3.3 2.5-5.9 5.2-8 2.7-2 5.7-3.1 9.3-3.1 2.9 0 5.2.6 6.9 1.7 1.7 1.1 2.6 2.8 2.9 4.9l-5.6 2.6c-.5-1.3-1.1-2.2-1.9-2.8-.8-.6-1.8-.9-3-.9-1.7 0-3.2.5-4.4 1.4-1.2.9-2 2.1-2.4 3.7-.6 2.4 1.1 4.7 5 6.8.3.2.5.3.7.4 3.4 1.8 5.7 3.6 6.7 5.4 1 1.8 1.2 3.9.6 6.6-.9 3.8-2.8 6.8-5.7 9.1-2.9 2.2-6.3 3.4-10.3 3.4-3.3 0-5.9-.8-7.7-2.4-2-1.6-2.9-3.9-2.8-6.8zm47.1 8.1 9.6-40.3h6.4l-9.6 40.3h-6.4zm15.6 0 10-41.9 19 24.6c.5.7 1 1.4 1.5 2.2.5.8 1 1.7 1.6 2.7l6.7-27.9h5.9l-10 41.8-19.4-25.1-1.5-2.1c-.5-.8-.9-1.5-1.2-2.4l-6.7 28h-5.9zm65.1-34.8-8.3 34.7h-6.4l8.3-34.7h-10.4l1.3-5.6h27.2l-1.3 5.6h-10.4zm6.9 34.8 9.6-40.3h22l-1.3 5.6h-15.5l-2.4 10.1h15.5l-1.4 5.7h-15.5l-3.1 13h15.5l-1.4 5.9h-22zm39.5-18.1-4.3 18h-6l9.6-40.3h8.9c2.6 0 4.6.2 5.9.5 1.4.3 2.5.9 3.3 1.7 1 1 1.6 2.2 1.9 3.8.3 1.5.2 3.2-.2 5.1-.8 3.2-2.1 5.8-4.1 7.6-2 1.8-4.5 2.9-7.5 3.3l9.1 18.3h-7.2l-8.7-18h-.7zm1.6-5.1h1.2c3.4 0 5.7-.4 7-1.2 1.3-.8 2.2-2.2 2.7-4.3.5-2.2.3-3.8-.7-4.7-1-.9-3.1-1.4-6.3-1.4h-1.2l-2.7 11.6zm18.9 23.2 9.6-40.3h21.9l-1.3 5.6h-15.5l-2.4 10h15.5l-1.4 5.7h-15.5l-4.5 18.9h-6.4zm52.8 0-2-10.4h-15.6l-7 10.4h-6.7l29-41.9 9 41.9h-6.7zm-13.9-15.9h10.9l-1.8-9.2c-.1-.6-.2-1.3-.2-2-.1-.8-.1-1.6-.1-2.5-.4.9-.8 1.7-1.3 2.5-.4.8-.8 1.5-1.2 2.1l-6.3 9.1zm62.2-14.6c-1.4-1.6-3.1-2.8-4.9-3.5-1.8-.8-3.8-1.2-6.1-1.2-4.3 0-8.1 1.4-11.5 4.2-3.4 2.8-5.6 6.5-6.7 11-1 4.3-.6 7.9 1.4 10.8 1.9 2.8 4.9 4.2 8.9 4.2 2.3 0 4.6-.4 6.9-1.3 2.3-.8 4.6-2.1 7-3.8l-1.8 7.4c-2 1.3-4.1 2.2-6.3 2.8-2.2.6-4.4.9-6.8.9-3 0-5.7-.5-8-1.5s-4.2-2.5-5.7-4.5c-1.5-1.9-2.4-4.2-2.8-6.8-.4-2.6-.3-5.4.5-8.4.7-3 1.9-5.7 3.5-8.3 1.6-2.6 3.7-4.9 6.1-6.8 2.4-2 5-3.5 7.8-4.5s5.6-1.5 8.5-1.5c2.3 0 4.4.3 6.4 1 1.9.7 3.7 1.7 5.3 3.1l-1.7 6.7zm.6 30.5 9.6-40.3h21.9l-1.3 5.6h-15.5l-2.4 10.1h15.5l-1.4 5.7H868l-3.1 13h15.5L879 381h-21.9z"></path>
                  <path fill="#70706e" d="M740.7 305.6h-43.9l61-220.3h43.9l-61 220.3zM717.9 92.2c-3-4.2-7.7-6.3-14.1-6.3H462.6l-11.9 43.2h219.4l-12.8 46.1H481.8v-.1h-43.9l-36.4 131.5h43.9l24.4-88.2h197.3c6.2 0 12-2.1 17.4-6.3 5.4-4.2 9-9.4 10.7-15.6l24.4-88.2c1.9-6.6 1.3-11.9-1.7-16.1zm-342 199.6c-2.4 8.7-10.4 14.8-19.4 14.8H130.2c-6.2 0-10.8-2.1-13.8-6.3-3-4.2-3.7-9.4-1.9-15.6l55.2-198.8h43.9l-49.3 177.6h175.6l49.3-177.6h43.9l-57.2 205.9z"></path>
                  <path fill="#098041" d="M877.5 85.7 933 196.1 816.3 306.5z"></path>
                  <path fill="#e97626" d="M838.5 85.7 894 196.1 777.2 306.5z"></path>
                </svg>
              </div>
              <div>
                <p className="font-normal uppercase text-[16px] ">Upi</p>
                <p className="text-[12px] text-placeholder">Use Upi, Google Pay, Phone Pe, PayTm and more</p>
              </div>
            </label>
          </div>
          <div className={`p-4 bg-custom-grey ${active ? "block" : "hidden"}`}>
            <div className="w-full justify-center p-4 bg-white flex ">
              <div>
                <Image
                  className={`h-32 aspect-1 block  w-auto`}
                  src={blurqr}
                  alt="Logo"
                  style={{ maxWidth: "inherit" }}
                  priority
                />
              </div>
              <div className="px-2 py-2 pb-3 flex flex-col justify-between">
                <span className="font-normal text-[14px]"> Use any UPI app on your phone</span>
                <div className="justify-between flex">
                  {upiIcons.map((ico) => {
                    return (
                      <img className="h-6" src={ico.icon_url} />
                    );
                  })}
                </div>
                <ButtonPrimary onClick={() => {
                  if (selectedUpiAPP !== -1) {
                    setSelectedUpiApp(-1)
                  }
                  if (upiId.length !== 0) {
                    setUpiId("")
                  }
                }} sizeClass="py-2 px-4" className="w-full" fontSize="text-[12px]">Generate QR</ButtonPrimary>
              </div>
            </div>
            <div className="h-[0.5px] relative w-full  bg-custom-blue mt-4 mb-2"><span className="absolute font-normal text-[10px] text-custom-blue top-0 px-2 left-1/2 translate-x-[-50%] translate-y-[-55%] bg-custom-grey">or</span></div>
            <div className="w-full">
              <p className="text-[12px] font-normal mb-2">Enter UPI ID</p>
              <Input
                onChange={(e) => {
                  if (selectedUpiAPP !== -1) {
                    setSelectedUpiApp(-1)
                  }
                  setUpiId(e.target.value)
                  setUpiIdVerified(false)
                }}
                ref={upiInputRef}
                value={upiId}
                label="Upi Id"
                autoComplete="off"
                fontClass="text-[12px]"
                className={`${upiIdVerified || upiId.length === 0 ? "" : "border-red-400"}`}
                type="test"
                onFocus={() => setFocus("cvc")}
                additionalComponent={
                  <div className="flex items-center h-full">
                    <img src={upiIcon.icon_url} alt="upi" className={`w-8 h-8 ${upiIdVerified ? "" : "grayscale"}`} />
                  </div>
                }

              ></Input>
            </div>
            <div className="h-[0.5px] relative w-full  bg-custom-blue mt-4 mb-2"><span className="absolute font-normal text-[10px] text-custom-blue top-0 px-2 left-1/2 translate-x-[-50%] translate-y-[-55%] bg-custom-grey">or</span></div>
            <div className="w-full">
              <p className="text-[12px] font-normal mb-2 ">UPI APPS</p>
              <div className="space-y-4">
                {upiAppsData.map((app, index) => {
                  return (
                    <div className="w-full  bg-white  ">
                      <div className="flex items-center p-4 justify-between" onClick={() => {
                        if (upiId.length !== 0) {
                          setUpiId("")
                          setAppUpiId("")
                          setAppUpiIdVpa("")
                        }
                        setSelectedUpiApp(index)
                      }}>
                        <div className="flex items-center">
                          <div><img className="h-6" src={app.icon} /></div>
                          <div className="pl-2 text-[14px]">{app.name}</div>
                        </div>
                        <div className="">
                          <Radio defaultChecked={index === selectedUpiAPP} id={index} sizeClassName="h-5 w-5" />
                        </div>
                      </div>
                      <div className={`flex px-8 space-x-2 pb-8 ${index === selectedUpiAPP ? "block" : "hidden"} `}>
                        <Input
                          onChange={(e) => {
                            setAppUpiId(e.target.value)
                          }}

                          value={appUpiId}
                          label="Upi Id"
                          autoComplete="off"
                          fontClass="text-[12px]"
                          className={`w-[70%] ${appUpiId.length !== 0 ? "" : "border-red-400"}`}
                          type="test"
                          onFocus={() => setFocus("cvc")}
                        ></Input>
                        <Select
                          className="w-[30%]"
                          label="Select Bank"
                          value={appUpiIdVpa}
                          onChange={(e) =>
                            setAppUpiIdVpa(e.target.value)
                          }
                        >
                          {app.vpaOptions.map((vpa) => {
                            return <option value={vpa}>@{vpa}</option>
                          })}
                          <option onSelect={() => {
                          }}>other</option>
                        </Select>
                      </div>
                    </div>)
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderPaymentMethod = () => {
    return (
      <div className="  ">
        <div className="text-[32px] mb-4 border-b-[0.5px] border-custom-blue flex font-bold uppercase pb-4">Payment Method</div>

        <div className="flex flex-col sm:flex-row items-start">
          {/* <span className="hidden sm:block">
            <svg
              className="w-6 h-6 text-slate-700 dark:text-slate-400 mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.92969 15.8792L15.8797 3.9292"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.1013 18.2791L12.3013 17.0791"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.793 15.5887L16.183 13.1987"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.60127 10.239L10.2413 3.599C12.3613 1.479 13.4213 1.469 15.5213 3.569L20.4313 8.479C22.5313 10.579 22.5213 11.639 20.4013 13.759L13.7613 20.399C11.6413 22.519 10.5813 22.529 8.48127 20.429L3.57127 15.519C1.47127 13.419 1.47127 12.369 3.60127 10.239Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 21.9985H22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span> */}
          <div className="">
            <h3 className=" text-slate-700 dark:text-slate-400 flex ">
              <span className="tracking-tight">Select a payment method</span>
              {/* <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-5 h-5 ml-3 text-slate-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg> */}
            </h3>

          </div>

        </div>

        <div
          className={`py-4 space-y-6`}
        >
          <div>{renderUpi()}</div>
          <div>{renderWallet()}</div>
          <div>{renderDebitCredit()}</div>
          <div>{renderInterNetBanking()}</div>
        </div>
      </div>
    );
  };

  return renderPaymentMethod();
};

export default PaymentMethod;
