"use client";

import Glide from "@glidejs/glide/dist/glide.esm";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const GenericBannerSlider = ({
  banners = [
    "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/ar100-1/b1.png",
    "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/ar100-1/b1.png",
  ],
  showDots = true, // Option to show/hide dots
  onClick ="/",
  aspectRatio = "16/9", // Aspect ratio of banners
  className = "", // Additional class names for styling
}) => {
  const sliderRef = useRef(null);
  const glideRef = useRef(null); // Store Glide instance

  useEffect(() => {
    if (!sliderRef.current || banners.length === 0) return;

    // Initialize Glide instance if not already done
    if (!glideRef.current) {
      const glideOptions = {
      
        // animationDuration:1000,
        swipeThreshold:10,
        perView: 1,
        gap: 0,
        rewind: true, // Ensure rewinding instead of duplication
        autoplay: banners.length > 1 ? 3000 : false, // Optional auto-slide
        animationDuration: banners.length > 1 ? 1000 : false,
      };

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
      {/* Track and Slides */}
      <Link href={onClick}className="inset-0">
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
                    sizes="1000px"
                    alt={`Banner ${index}`}
                    layout="fill" // Ensure full coverage
                    objectFit="cover" // Maintain image aspect
                    priority={index === 0} // Prioritize the first image
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
          className=" absolute glide__bullets w-full justify-center flex space-x-1 pt-1 pb-1"
          data-glide-el="controls[nav]"
        >
          {banners.map((_, index) => (
            <button
              key={index}
              className="glide__bullet w-[20px] h-[6px] rounded-full bg-white transition-colors duration-300"
              data-glide-dir={`=${index}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenericBannerSlider;
