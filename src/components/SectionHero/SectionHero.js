"use client";

import React, { useState, useEffect } from "react";
import backgroundLineSvg from "@/images/Moon.svg";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Next from "@/shared/NextPrev/Next";
import Prev from "@/shared/NextPrev/Prev";
import useInterval from "react-use/lib/useInterval";
import useBoolean from "react-use/lib/useBoolean";
import Image from "next/image";
import { BIG_SCREEN_SLIDES as DATA, SMALL_SCREEN_SLIDES } from "./data";
import { useMediaQuery } from "react-responsive";

let TIME_OUT = null;

const SectionHero = ({ className = "" }) => {
  const [indexActive, setIndexActive] = useState(0);
  const [isRunning, toggleIsRunning] = useBoolean(true);
  const [showContent, setShowContent] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  useInterval(() => {
    handleAutoNext();
  }, isRunning ? 5500 : null);

  const handleAutoNext = () => {
    setIndexActive((state) => {
      if (state >= DATA.length - 1) {
        return 0;
      }
      return state + 1;
    });
  };

  const handleClickNext = () => {
    setIndexActive((state) => {
      if (state >= DATA.length - 1) {
        return 0;
      }
      return state + 1;
    });
    handleAfterClick();
  };

  const handleClickPrev = () => {
    setIndexActive((state) => {
      if (state === 0) {
        return DATA.length - 1;
      }
      return state - 1;
    });
    handleAfterClick();
  };

  const handleAfterClick = () => {
    toggleIsRunning(false);
    if (TIME_OUT) {
      clearTimeout(TIME_OUT);
    }
    TIME_OUT = setTimeout(() => {
      toggleIsRunning(true);
    }, 1000);
  };

  const isBigScreen = useMediaQuery({
    query: "(min-width: 900px)",
  });

  useEffect(() => {
    setShowContent(false);

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [isBigScreen]);

  const Loading = () => (
    <div
      role="status"
      className="flex items-center justify-center h-96 nc-SectionHero2Item bg-gray-300 animate-pulse dark:bg-gray-700 nc-SectionHero2Item--animation inset-0 object-contain"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );

  const renderItem = (index) => {
    const isActive = indexActive === index;
    const item = isBigScreen ? DATA[index] : SMALL_SCREEN_SLIDES[index];
    if (!isActive) {
      return null;
    }
    return (
      <div key={index}>
        {loading ? (
          <Loading />
        ) : (
          <div className="relative nc-SectionHero2Item nc-SectionHero2Item--animation inset-0 object-contain">
            <div>
              <div className="absolute bottom-0 left-5 sm:bottom-5 sm:left-10 custom-container pt-14 sm:pt-20 lg:pt-44 pb-5">
                <div
                  className={`relative z-[1] w-full  space-y-8 sm:space-y-14 nc-SectionHero2Item__left`}
                >
                  <div className="space-y-5 sm:space-y-6">
                    <span className="nc-SectionHero2Item__subheading block text-base md:text-xl text-white font-medium">
                      {item?.subHeading}
                    </span>
                    <h2 className="nc-SectionHero2Item__heading font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl !leading-[114%] text-white">
                      {item?.heading}
                    </h2>
                  </div>
                </div>
              </div>
              <Image
                src={item?.image}
                alt="hero"
                layout="responsive"
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "0.84/1",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  return <>{DATA.map((_, index) => renderItem(index))}</>;
};

export default SectionHero;
