"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import FiltersSidebar from "@/components/FilterSideBar";
import ProductCard from "@/components/ProductCard";

const PageSearch = () => {
  const searchParams = useSearchParams();
  const query = searchParams?.get("s");

  const [productData, setProductData] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = useCallback(
    async (url) => {
      if (!url) return
      try {
        const res = await axios.get(url);
        console.log("API Response:", res.data.results);

        setProductData((prev) => {
          const updated = [
            ...prev,
            ...res.data.results.filter(
              (newProduct) => !prev.some((oldProduct) => oldProduct.hsn === newProduct.hsn)
            ),
          ];
          console.log("Updated Product Data:", updated);
          return updated;
        });

        setNextUrl(res.data.next); // Update the next URL
        setHasMore(!!res.data.next); // Stop further fetching if next is null
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    []
  );

  useEffect(() => {
    const initialUrl = `https://api.velonna.co/ecom/product/list/?limit=20${
      query ? "&search=" + query : ""
    }`;
    fetchProducts(initialUrl);
  }, [query,fetchProducts ]);


  useEffect(() => {
    console.log(" Product Data Updated",productData.length );
  }, [productData]);
  const fetchMoreProducts = () => {
    if (nextUrl) {
      console.log("Fetching more products from:", nextUrl);
      fetchProducts(nextUrl);
    }
  };

  return (
    <div className="nc-PageSearch flex">
      {/* Sidebar Section */}
      <div className="sticky top-0 h-screen hiddenScrollbar overflow-auto w-1/4 bg-white ">
        <FiltersSidebar />
      </div>

      {/* Product Section */}
      <div className="flex-1 p-6">
        <main>
          {/* Infinite Scroll Wrapper */}
          <InfiniteScroll
            dataLength={productData.length} // This is important to track the scroll position
            next={fetchMoreProducts} // Function to fetch the next set of products
            hasMore={hasMore} // Determines if there are more items to load
            loader={<div className="text-center mt-4">Loading...</div>} // Loading indicator
            endMessage={
              <div className="text-center mt-4">You have seen all products</div>
            } // Message when all items are loaded
          >
            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:grid-cols-4 xl:grid-cols-5">
              {productData.length > 0
                ? productData.map((item) => <ProductCard data={item} key={item.id} />)
                : "No products found"}
                
            </div>
          </InfiniteScroll>
        </main>
      </div>
    </div>
  );
};

export default PageSearch;
