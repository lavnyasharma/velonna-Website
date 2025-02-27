"use client";

import Glide from "@glidejs/glide/dist/glide.esm";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

const GenericBannerSlider = ({
  banners = [
    "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/ar100-1/b1.png",
  ],
  aspectRatio = "16/9",
  mobilebanners = banners,
  mobileAspectRatio = aspectRatio,
  displayheading = false,
  headingText = "",
  type = "slider",
  gap = 0,
  showBannerText = false,
  showDots = true,
  onClick = "/",
  perView = 1,
  className = "",
  breakpoints = {},
}) => {
  const sliderRef = useRef(null);
  const glideRef = useRef(null);
  const sliderRef2 = useRef(null);
  const glideRef2 = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const initGlide = (ref, glideRef, banners) => {
    if (!ref.current || banners.length === 0) return;

    const glideOptions = {
      hoverpause: false,
      type: type,
      swipeThreshold: 8,
      perView: perView,
      gap: gap,
      rewind: true,
      autoplay: 4000,
      animationDuration: 1500,
      breakpoints: breakpoints,
      animationTimingFunc: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    };

    glideRef.current = new Glide(ref.current, glideOptions);
    glideRef.current.mount();
  };

  useEffect(() => {
    initGlide(sliderRef, glideRef, banners);

    return () => {
      glideRef.current?.destroy();
      glideRef.current = null;
    };
  }, [banners]);

  useEffect(() => {
    initGlide(sliderRef2, glideRef2, mobilebanners);

    return () => {
      glideRef2.current?.destroy();
      glideRef2.current = null;
    };
  }, [mobilebanners]);

  const getTextAnimationClass = (index) => {
    index === activeIndex ? "scroll-animation.animate-from-left" : "banner-text-animation";
  }
  return (
    <>
      {/* Mobile Slider */}
      <div className={`glide w-full block md:hidden relative ${className}`} ref={sliderRef2}>
        <Link href={onClick} className="inset-0 block md:hidden">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {mobilebanners.map((banner, index) => (
                <li key={index} className="glide__slide">
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: mobileAspectRatio,
                    }}
                  >
                    <Image
                      src={banner}
                      quality={100}
                      alt={`Banner ${index}`}
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                   {showBannerText && <div className="absolute pb-[15px] pl-[15px] top-0 left-0 h-full w-full inset-0 bg-gradient-to-t from-black to-transparent flex justify-start items-end ">
                      <div
                        className={`absolute overflow-hidden flex justify-center items-center text-white text-2xl md:text-4xl font-bold font-customblue transition-opacity duration-500 `}

                      >
                        <h1 className={`uppercase banner-text-animation`}>hello</h1>
                      </div>
                    </div>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Link>
      </div>

      {/* Desktop Slider */}
      <div className={`glide w-full hidden md:block relative ${className}`} ref={sliderRef}>
        <Link href={onClick} className="inset-0 hidden md:block">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {banners.map((banner, index) => (
                <li key={index} className="glide__slide">
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio,
                    }}
                  >
                    <Image
                      src={banner}
                      quality={100}
                      alt={`Banner ${index}`}
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                    {showBannerText && <div className="absolute pb-[70px] pl-[70px] bottom-0 left-0 w-min h-min flex justify-end items-start flex-col">
                      <div
                        className={` glide__slides  absolute text-white text-2xl md:text-4xl font-bold font-customblue transition-opacity duration-500 ${getTextAnimationClass(
                          index
                        )}`}
                      >
                        <h1 className="uppercase leading-none PanDisplay-Regular text-[58px] banner-text-animation">Uniquely yours, 
                          <br/>forever.</h1>
                        

                      </div>
                     
                    </div>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Link>
        {showDots && banners.length > 1 && (
          <div
            className={`absolute bottom-10 hidden glide__bullets w-full justify-end px-20 md:flex space-x-1 pt-1 pb-1`}
            data-glide-el="controls[nav]"
          >
            {banners.map((_, index) => (
              <button
                key={index}
                className="glide__bullet w-[35px] h-[2px]  bg-[#ffffff4c] transition-colors duration-300"
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
