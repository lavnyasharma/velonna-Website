"use client";

import Glide from "@glidejs/glide/dist/glide.esm";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import ScrollAnimation from "./ScrollAnimation";

const GenericBannerSlider = ({
  banners = [
    "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/ar100-1/b1.png",

  ],
  aspectRatio = "16/9", // Aspect ratio of banners
  mobilebanners = banners,
  mobileAspectRatio = aspectRatio,
  displayheading = false,
  headingText = "",
  type = "slider",
  gap = 0,
  showDots = true, // Option to show/hide dots
  onClick = "/",
  perView = 1,
  className = "", // Additional class names for styling
  breakpoints = {}
}) => {
  const sliderRef = useRef(null);
  const glideRef = useRef(null); // Store Glide instance
  const sliderRef2 = useRef(null);
  const glideRef2 = useRef(null); // Store Glide instance

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
        animationTimingFunc: "ease-in",
        gap: gap,
        rewind: true, // Ensure rewinding instead of duplication
        autoplay: banners.length > 1 ? 3000 : false, // Optional auto-slide
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
  useEffect(() => {
    if (!sliderRef2.current || banners.length === 0) return;

    // Initialize Glide instance if not already done
    if (!glideRef2.current) {
      const glideOptions = {
        hoverpause: false,
        type: type,
        // animationDuration:1000,
        swipeThreshold: 8,
        perView: perView,
        animationTimingFunc: "ease-in",
        gap: gap,
        rewind: true, // Ensure rewinding instead of duplication
        autoplay: banners.length > 1 ? 3000 : false, // Optional auto-slide
        animationDuration: banners.length > 1 ? 1000 : false,
        breakpoints: breakpoints
      }
      glideRef2.current = new Glide(sliderRef2.current, glideOptions);
      glideRef2.current.mount();
    }

    return () => {
      // Destroy Glide instance on component unmount
      glideRef2.current?.destroy();
      glideRef2.current = null;
    };
  }, [glideRef2]); // Watch for changes to `banners`

  return (
    <>
      <div className={`glide w-full block md:hidden relative ${className}`} ref={sliderRef2}>
        {displayheading && <div className="space-y-[-10px] md:space-y-[-50px] md:px-20 mb-[20px]">
          <h1 className="uppercase pl-[5px] text-[18px] md:text-[45px] font-bold font-customblue">Discover</h1>
          <ScrollAnimation><h1 className="uppercase pl-[5px] text-[30px] md:text-[60px] font-bold font-customblue">Mens Collections</h1></ScrollAnimation>


        </div>}
        {/* Track and Slides */}
        <Link href={onClick} className="inset-0 block md:hidden">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {mobilebanners.map((banner, index) => (
                <li key={index} className="glide__slide">
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: mobileAspectRatio, // Respect aspect ratio
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
        {showDots && mobilebanners.length > 1 && (
          <div
            className={`glide__bullets w-full md:hidden justify-center flex space-x-1 pt-1 pb-1`}
            data-glide-el="controls[nav]"
          >
            {banners.map((_, index) => (
              <button
                key={index}
                className="glide__bullet w-[20px] shadow-md h-[3px] rounded-full bg-inputborder transition-colors duration-300"
                data-glide-dir={`=${index}`}
              ></button>
            ))}
          </div>
        )}

      </div>
      <div className={`glide w-full relative ${className}`} ref={sliderRef}>
        {displayheading && <div className="space-y-[-10px] md:space-y-[-50px] md:px-20 mb-[20px]">
          <h1 className="uppercase pl-[5px] text-[18px] md:text-[45px] font-bold font-customblue">Discover</h1>
          <ScrollAnimation><h1 className="uppercase pl-[5px] text-[30px] md:text-[60px] font-bold font-customblue">Mens Collections</h1></ScrollAnimation>


        </div>}
        {/* Track and Slides */}

        <Link href={onClick} className="inset-0 hidden md:block">
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
            className={`absolute bottom-10 hidden glide__bullets w-full justify-end px-20 md:flex space-x-1 pt-1 pb-1`}
            data-glide-el="controls[nav]"
          >
            {banners.map((_, index) => (
              <button
                key={index}
                className="glide__bullet shadow-md  w-[35px] h-[2px]  bg-[#ffffff4c] transition-colors duration-300"
                data-glide-dir={`=${index}`}
              ></button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default GenericBannerSlider;
