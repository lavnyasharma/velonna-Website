"use client";

import React, { useEffect, useState } from "react";
import LineBreak from "./LineBreak";
import Prices from "./Prices";
import { axiosInstance } from "@/axios";

const FiltersSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [collections, setCollections] = useState([]);

  // Fetch Categories
  useEffect(() => {
    const getCategories = async () => {
      const res = await axiosInstance.get("live-categories/");
      setCategories(res.data);
    };
    if (categories.length === 0) {
      getCategories();
    }
  }, [categories]);

  // Fetch Collections
  useEffect(() => {
    const getCollections = async () => {
      const res = await axiosInstance.get("live-collections/");
      setCollections(res.data);
    };
    if (collections.length === 0) {
      getCollections();
    }
  }, [collections]);

  return (
    <div className="h-full space-y-6 p-4">
      {/* Sort Options */}
      <div className="mb-6">
        <LineBreak
          thickness={1}
          lineBreakStyle="mb-[20px]"
          innerTextEnable={true}
          innerText="Sort by"
        />
        <select className="w-full outline-none p-3 border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-primary-500">
          <option>Price Low to High</option>
          <option>Price High to Low</option>
          <option>Newest</option>
        </select>
      </div>

      {/* Collections Filter */}
      <div>
        <LineBreak
          thickness={1}
          lineBreakStyle="mb-[20px]"
          innerTextEnable={true}
          innerText="Collections"
        />
        {collections.map((item) => (
          <label
            key={item.id}
            className="flex just items-center mb-2 space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              value={item.id}
              className="peer h-5 w-5 border border-gray-300 rounded checked:bg-blue-500"
            />
            <span className="text-[10px] uppercase focus:ring-0 font-semibold text-gray-600">{item.name}</span>
          </label>
        ))}
      </div>

      {/* Categories Filter */}
      <div>
        <LineBreak
          thickness={1}
          lineBreakStyle="mb-[20px]"
          innerTextEnable={true}
          innerText="Categories"
        />
        {categories.map((item) => (
          <label
            key={item.id}
            className="flex items-center mb-2 space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              value={item.id}
              className="peer h-5 w-5 border focus:ring-0 border-gray-300 rounded checked:bg-blue-500"
            />
            <span className="text-[10px]  uppercase font-semibold text-gray-600">{item.name}</span>
          </label>
        ))}
      </div>

      {/* Price Range Filter */}
      <div>
        <LineBreak
          thickness={1}
          lineBreakStyle="mb-[20px]"
          innerTextEnable={true}
          innerText="Price Range"
        />
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          className="w-full h-2 bg-gray-200 rounded"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <Prices className="text-[10px]" price={1000} />
          <Prices className="text-[10px]" price={10000} />
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
