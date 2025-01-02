"use client";

import Glide from "@glidejs/glide/dist/glide.esm";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const GenericBannerSlider = ({
  banners = [
    "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/ar100-1/b1.png",

  ],
  displayheading = false,
  headingText = "",
  type = "slider",
  gap = 0,
  showDots = true, // Option to show/hide dots
  onClick = "/",
  perView = 1,
  aspectRatio = "16/9", // Aspect ratio of banners
  className = "", // Additional class names for styling
  breakpoints = {}
}) => {
  const sliderRef = useRef(null);
  const glideRef = useRef(null); // Store Glide instance

  useEffect(() => {
    if (!sliderRef.current || banners.length === 0) return;

    // Initialize Glide instance if not already done
    if (!glideRef.current) {
      const glideOptions = {
        hoverpause: false,
        type: type,
        // animationDuration:1000,
        swipeThreshold: 8,
        perView: perView,
        animationTimingFunc: "ease-out",
        gap: gap,
        rewind: true, // Ensure rewinding instead of duplication
        autoplay: banners.length > 1 ? 4000 : false, // Optional auto-slide
        animationDuration: banners.length > 1 ? 1000 : false,
        breakpoints: breakpoints
      }
      glideRef.current = new Glide(sliderRef.current, glideOptions);
      glideRef.current.mount();
    }

    return () => {
      // Destroy Glide instance on component unmount
      glideRef.current?.destroy();
      glideRef.current = null;
    };
  }, [glideRef]); // Watch for changes to `banners`

  return (

    <div className={`glide w-full relative ${className}`} ref={sliderRef}>
      {displayheading && <div className="space-y-[-30px] md:px-20 mb-[20px]">
        <h1 className="uppercase pl-[5px] text-[45px] font-bold font-customblue">Discover</h1>
        <h1 className="uppercase text-[60px] font-bold font-customblue">Mens Collections</h1>

      </div>}
      {/* Track and Slides */}
      <Link href={onClick} className="inset-0">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {banners.map((banner, index) => (
              <li key={index} className="glide__slide">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio, // Respect aspect ratio
                  }}
                >
                  <Image
                    src={banner}
                    quality={100}
                    alt={`Banner ${index}`}
                    layout="fill" // Ensure full coverage
                    objectFit="cover" // Maintain image aspect
                    priority // Prioritize the first image
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Link>
      {/* Optional Dots */}
      {showDots && banners.length > 1 && (
        <div
          className={`absolute bottom-10 glide__bullets w-full justify-end px-20 flex space-x-1 pt-1 pb-1`}
          data-glide-el="controls[nav]"
        >
          {banners.map((_, index) => (
            <button
              key={index}
              className="glide__bullet shadow-md  w-[35px] h-[2px]  bg-[#848484] transition-colors duration-300"
              data-glide-dir={`=${index}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenericBannerSlider;
