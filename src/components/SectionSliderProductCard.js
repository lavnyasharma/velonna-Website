"use client";

import React, { FC, useEffect, useId, useRef, useState } from "react";
import Heading from "@/components/Heading/Heading";
import Glide from "@glidejs/glide/dist/glide.esm";
import ProductCard from "./ProductCard";



const SectionSliderProductCard = ({
  className = "",
  itemClassName = "",
  headingFontClassName,
  hideDetails=false,
  headingClassName,
  heading,
  subHeading = "Products You May Like.",
  data
}) => {
  console.log(data)
  const sliderRef = useRef(null);

  //
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(data){
      setLoading(false)
    }
  }, []);

  useEffect(() => {
    const OPTIONS = {
      // direction: document.querySelector("html")?.getAttribute("dir") || "ltr",
      type:"slide",
      perView: 4,
      gap:0,
      dragThreshold: 20,
      bound: true,
      breakpoints: {
        1280: {
          perView: 4 - 1,
        },
        1024: {
         
          perView: 4 - 1,
        },
        768: {
         
          perView: 4 - 2,
        },
        640: {
         
          perView: 2.3,
        },
        500: {
          
          perView: 2.3,
        },
      },
    };
    if (!sliderRef.current) return;

    let slider = new Glide(sliderRef.current, OPTIONS);
    slider.mount();
    setIsShow(true);
    return () => {
      slider.destroy();
    };
  }, [sliderRef]);

  const Loading = () => (
    <div role="status" className="max-w-sm p-4  rounded  animate-pulse md:p-6">
      <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
      <div className="h-3.5 bg-gray-300 rounded-full dark:bg-gray-600 w-48 mb-4"></div>
      <div className="h-3.5 bg-gray-300 rounded-full dark:bg-gray-600 mb-2.5"></div>
      <div className="h-3.5 bg-gray-300 rounded-full dark:bg-gray-600 mb-2.5"></div>
      <div className="h-3.5 bg-gray-300 rounded-full dark:bg-gray-600"></div>

      <div className="flex items-center mt-2 justify-between">
        <div>
          <div className="h-3.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          <div className="w-32 h-3.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="h-3.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );

  return (
    <div className={`nc-SectionSliderProductCard ${className}`}>
      <div ref={sliderRef} className={`flow-root ${isShow ? "" : "invisible"}`}>
       {heading && <Heading
          className={headingClassName}
          fontClass={headingFontClassName}
          rightDescText={subHeading}
        >
          {heading || `New Arrivals`}
        </Heading>}

        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {data?data.map((item, index) => (
              <li key={index} className={`glide__slide ${itemClassName}`}>
                {loading ? <Loading /> : <ProductCard hideDetails={hideDetails} data={item} />}
              </li>
            )):"Loading"}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionSliderProductCard;
