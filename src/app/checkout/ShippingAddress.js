"use client";

import React, { useState, useEffect } from "react";
import Label from "@/components/Label/Label";
import Input from "@/shared/Input/Input";
import Select from "@/shared/Select/Select";
import Radio from "@/shared/Radio/Radio";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import { axiosInstance, getaddress } from "@/axios";

const ShippingAddress = ({ isActive, onCloseActive, onOpenActive }) => {
  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState({});


  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const data = await getaddress();
       
        setAddresses(data.results);
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };
    if (addresses.length === 0) {
      fetchAddresses();
    } else {
      addresses.map((add) => {
        if (add.primary === true) {
          
          handleAddressSelect(add.id);
        }
      });
    }
  }, [addresses]);

  useEffect(() => { }, [address])
  // Default state to hold the current address data

  const handleAddressSelect = (value) => {
   
    const selectedAddress = addresses.find((addr) => addr.id === value);

    setAddress({
      id: selectedAddress.id,
      firstName: selectedAddress.first_name,
      lastName: selectedAddress.last_name,
      addressLine: selectedAddress.street_address,
      city: selectedAddress.city,
      phone_number: selectedAddress.phone_number,
      country: selectedAddress.country,
      postalCode: selectedAddress.postal_code,
      state: selectedAddress.district,
      addressType: selectedAddress.primary ? "Home" : "",
    });
  };

  const handleSelectAddress = () => {
    onOpenActive();
  };

  const handleSaveAddress = () => {
    onCloseActive();
  };

  const renderShippingAddress = () => {
    return (
      <div className="border-[0px] border-custom-blue dark:border-slate-700 ">
        <div className="text-[32px] mb-4 pb-4 border-b-[0.5px] border-custom-blue font-bold uppercase">shipping details</div>
        <div className="p-6 flex flex-col sm:flex-row bg-custom-grey">
          {/* <span className="hidden sm:block">
            <svg
              className="w-6 h-6 text-slate-700 dark:text-slate-400 mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1401 15.0701V13.11C12.1401 10.59 14.1801 8.54004 16.7101 8.54004H18.6701"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.62012 8.55005H7.58014C10.1001 8.55005 12.1501 10.59 12.1501 13.12V13.7701V17.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.14008 6.75L5.34009 8.55L7.14008 10.35"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.8601 6.75L18.6601 8.55L16.8601 10.35"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span> */}

          <div className="">
            <h3 className="text-slate-700 dark:text-slate-300 flex">
              <span className="uppercase text-[16px]">SHIPPING ADDRESS</span>
            </h3>
            <div className="font-semibold mt-1 text-[12px] text-sm flex flex-col">
              <span>{Object.keys(address).length !== 0 && `${address.addressLine}, ${address.city}, ${address.state}, ${address.postalCode}, ${address.country}`}</span>
              <span>Contact: {Object.keys(address).length !== 0 && `${address.phone_number}`}</span>
            </div>
          </div>
          <button
            className="py-2 px-4 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 mt-5 sm:mt-0 sm:ml-auto text-sm font-medium rounded-lg"
            onClick={handleSelectAddress}
          >
            Edit
          </button>
        </div>

        {/* Address Radio Buttons */}
        <div className="p-6 bg-custom-grey">
          <Label className="text-sm">Saved Address</Label>
          <div className="space-y-2">
            {addresses.map((addressOption) => (
              <div
                key={addressOption.id}
                className="flex items-center space-x-3"
              >
                <Radio
                  name="address"
                  value={addressOption.id}
                  defaultChecked={address?.id && String(address.id) === String(addressOption.id)}
                  onChange={() => {
                    handleAddressSelect(addressOption.id);
                  }}
                />
                <span className="text-sm">
                  {addressOption.street_address}, {addressOption.city},{address.id},{addressOption.id}
                </span>
              </div>
            ))}
            <ButtonPrimary onClick={handleSelectAddress} className="text-sm w-full">Add New</ButtonPrimary>
          </div>
        </div>

        {/* Form for editing address (visible when isActive is true) */}
        {isActive && (
          <div className="border-t border-slate-200 dark:border-slate-700 py-7 space-y-4 sm:space-y-6">

            <div>

              <Input
                className="mt-1.5"
                label="First name"
                value={address.firstName}
                onChange={(e) =>
                  setAddress({ ...address, firstName: e.target.value })
                }
              />
            </div>
            <div>
              <Input
                className="mt-1.5"
                label="Last name"
                value={address.lastName}
                onChange={(e) =>
                  setAddress({ ...address, lastName: e.target.value })
                }
              />
            </div>


            <div className="mt-4">
              <Input
                className="mt-1.5"
                label="Address Line"
                value={address.addressLine}
                onChange={(e) =>
                  setAddress({ ...address, addressLine: e.target.value })
                }
              />
            </div>

            <div className="mt-4">
              <Input
                className="mt-1.5"
                label="Phone Number"
                value={address.phone_number}
                onChange={(e) =>
                  setAddress({ ...address, phone_number: e.target.value })
                }
              />
            </div>


            <div>
              <Input
                className="mt-1.5"
                label="City"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
              />
            </div>
            <div>
              <Input
                label="State"
                className="mt-1.5"
                value={address.state}
                onChange={(e) =>
                  setAddress({ ...address, state: e.target.value })
                }
              />
            </div>



            <div>
              <Input
                className="mt-1.5"
                label="Postal Code"
                value={address.postalCode}
                onChange={(e) =>
                  setAddress({ ...address, postalCode: e.target.value })
                }
              />
            </div>
            <div>
              <Input
                className="mt-1.5"
                label="Country"
                value={address.country}
                onChange={(e) =>
                  setAddress({ ...address, country: e.target.value })
                }
              />
            </div>


            <div className="mt-4">

              <Select
                className="mt-1.5"
                label="Address Type"
                value={address.addressType}
                onChange={(e) =>
                  setAddress({ ...address, addressType: e.target.value })
                }
              >
                <option value="" disabled selected>Select your option</option>
                <option value="Home">Home</option>
                <option value="Office">Office</option>
                <option value="Other">Other</option>
              </Select>
            </div>

            <div className="mt-6 space-y-2">
              <ButtonPrimary className="text-sm w-full" onClick={handleSaveAddress}>
                Save Address
              </ButtonPrimary>
              <ButtonSecondary className="text-sm w-full" onClick={onCloseActive}>
                Cancel
              </ButtonSecondary>
            </div>
          </div>
        )}
      </div>
    );
  };

  return renderShippingAddress();
};

export default ShippingAddress;
