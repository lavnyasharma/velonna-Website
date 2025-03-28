"use client";

import Glide from "@glidejs/glide/dist/glide.esm";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import Logo from "@/shared/Logo/Logo";
import logoImg from "@/images/logo.svg";
import Image from "next/image";

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
  const [loadedVideos, setLoadedVideos] = useState(new Set()); // Track loaded videos

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
        breakpoints: {
          1280: {
            perView: 4,
          },
          1024: {
            perView: 3,
          },
          768: {
            perView: 3,
          },
          640: {
            perView: 3,
          },
          500: {
            perView: 3,
          },
        },
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

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoadedVideos((prev) => new Set(prev).add(entry.target.dataset.index));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.01, // Load video when 50% of it is visible
    });

    const videoElements = document.querySelectorAll(".lazy-video");
    videoElements.forEach((video) => observer.observe(video));

    return () => {
      videoElements.forEach((video) => observer.unobserve(video));
    };
  }, []);

  return (
    <div className={`glide w-full relative ${className}`} ref={sliderRef}>
      <div className="space-y-[-30px] md:space-y-[-50px] px-[20px] md:px-20 mb-[20px]">
        <span className="uppercase pl-[2px] text-[15px] md:text-[45px] font-bold font-customblue">Discover</span>
        <ScrollAnimation>
          <Image
            className={`h-16 md:h-36 w-auto `}
            src={logoImg}
            loading="lazy"
            alt="Logo"
            style={{ maxWidth: "inherit" }}
            
          />
        </ScrollAnimation>
      </div>
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
                {loadedVideos.has(String(index)) ? (
                  <video
                    src={banner}
                    loop
                    loading="lazy"
                    playsInline
                    muted
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="lazy-video bg-gray-200 w-full h-full"
                    data-index={index}
                  ></div>
                )}
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