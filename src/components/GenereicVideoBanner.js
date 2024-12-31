"use client";

import Glide from "@glidejs/glide/dist/glide.esm";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import ScrollAnimation from "./ScrollAnimation";

const GenericVideoBanner = ({
  banners = [
    "https://path/to/video1.mp4",
    "https://path/to/video2.mp4",
  ],
  type = "slider",
  gap = 0,
  showDots = true, // Option to show/hide dots
  onClick = "/",
  perView = 1,
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
        type: type,
        swipeThreshold: 10,
        perView: perView,
        gap: gap,
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
                  <video
                    src={banner}
                    loop
                    muted
                    autoPlay
                    className="w-full h-full object-cover"
                  />

                </div>
              </li>
          ))}

        </ul>

      </div>
      {/* Optional Dots */}
      {showDots && banners.length > 1 && (
        <div
          className="absolute glide__bullets w-full justify-center flex space-x-1 pt-1 pb-1"
          data-glide-el="controls[nav]"
        >
          {banners.map((_, index) => (
            <button
              key={index}
              className="glide__bullet w-[20px] h-[3px] rounded-full bg-inputborder transition-colors duration-300"
              data-glide-dir={`=${index}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenericVideoBanner;
