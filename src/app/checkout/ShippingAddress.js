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
        console.log(data);
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
          console.log(add.id);
          handleAddressSelect(add.id);
        }
      });
    }
  }, [addresses]);

  // Default state to hold the current address data

  const handleAddressSelect = (value) => {
    console.log(value);
    const selectedAddress = addresses.find((addr) => addr.id === value);
    setAddress({
      id:selectedAddress.id,
      firstName: selectedAddress.first_name,
      lastName: selectedAddress.last_name,
      addressLine: selectedAddress.street_address,
      city: selectedAddress.city,
      phone_number: selectedAddress.phone_number,
      country: selectedAddress.country,
      postalCode: selectedAddress.postal_code,
      state: selectedAddress.district,
      addressType: selectedAddress.primary ? "Home" : "Other",
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
      <div className="border border-slate-200 dark:border-slate-700 rounded-xl">
        <div className="p-6 flex flex-col sm:flex-row items-start">
          <span className="hidden sm:block">
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
          </span>

          <div className="sm:ml-8">
            <h3 className="text-slate-700 dark:text-slate-300 flex">
              <span className="uppercase">SHIPPING ADDRESS</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-5 h-5 ml-3 text-slate-900 dark:text-slate-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </h3>
            <div className="font-semibold mt-1 text-sm">
              <span>{`${address.addressLine}, ${address.city}, ${address.state}, ${address.postalCode}, ${address.country}`}</span>
            </div>
          </div>
          <button
            className="py-2 px-4 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 mt-5 sm:mt-0 sm:ml-auto text-sm font-medium rounded-lg"
            onClick={handleSelectAddress}
          >
            Change
          </button>
        </div>

        {/* Address Radio Buttons */}
        <div className="p-6">
          <Label className="text-sm">Select Address</Label>
          <div className="space-y-2">
            {addresses.map((addressOption) => (
              <div
                key={addressOption.id}
                className="flex items-center space-x-3"
              >
                <Radio
                  name="address"
                  value={addressOption.id}
                  checked={address.id === addressOption.id}
                  onChange={() => {
                    handleAddressSelect(addressOption.id);
                  }}
                />
                <span className="text-sm">
                  {addressOption.street_address}, {addressOption.city}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form for editing address (visible when isActive is true) */}
        {isActive && (
          <div className="border-t border-slate-200 dark:border-slate-700 px-6 py-7 space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
              <div>
                <Label className="text-sm">First name</Label>
                <Input
                  className="mt-1.5"
                  value={address.firstName}
                  onChange={(e) =>
                    setAddress({ ...address, firstName: e.target.value })
                  }
                />
              </div>
              <div>
                <Label className="text-sm">Last name</Label>
                <Input
                  className="mt-1.5"
                  value={address.lastName}
                  onChange={(e) =>
                    setAddress({ ...address, lastName: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mt-4">
              <Label className="text-sm">Address Line</Label>
              <Input
                className="mt-1.5"
                value={address.addressLine}
                onChange={(e) =>
                  setAddress({ ...address, addressLine: e.target.value })
                }
              />
            </div>

            <div className="mt-4">
              <Label className="text-sm">Phone Number</Label>
              <Input
                className="mt-1.5"
                value={address.phone_number}
                onChange={(e) =>
                  setAddress({ ...address, phone_number: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3 mt-4">
              <div>
                <Label className="text-sm">City</Label>
                <Input
                  className="mt-1.5"
                  value={address.city}
                  onChange={(e) =>
                    setAddress({ ...address, city: e.target.value })
                  }
                />
              </div>
              <div>
                <Label className="text-sm">State</Label>
                <Input
                  className="mt-1.5"
                  value={address.state}
                  onChange={(e) =>
                    setAddress({ ...address, state: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3 mt-4">
              <div>
                <Label className="text-sm">Postal Code</Label>
                <Input
                  className="mt-1.5"
                  value={address.postalCode}
                  onChange={(e) =>
                    setAddress({ ...address, postalCode: e.target.value })
                  }
                />
              </div>
              <div>
                <Label className="text-sm">Country</Label>
                <Input
                  className="mt-1.5"
                  value={address.country}
                  onChange={(e) =>
                    setAddress({ ...address, country: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mt-4">
              <Label className="text-sm">Address Type</Label>
              <Select
                className="mt-1.5"
                value={address.addressType}
                onChange={(e) =>
                  setAddress({ ...address, addressType: e.target.value })
                }
              >
                <option value="Home">Home</option>
                <option value="Office">Office</option>
                <option value="Other">Other</option>
              </Select>
            </div>

            <div className="mt-6 flex space-x-4">
              <ButtonPrimary className="text-sm" onClick={handleSaveAddress}>
                Save Address
              </ButtonPrimary>
              <ButtonSecondary className="text-sm" onClick={onCloseActive}>
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
