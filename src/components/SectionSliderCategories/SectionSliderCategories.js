"use client";

import React, { useEffect, useRef, useState } from "react";
import Heading from "@/components/Heading/Heading";
// @ts-ignore
import Glide from "@glidejs/glide/dist/glide.esm";
import CardCategory2 from "@/components/CardCategories/CardCategory2";
import department1Png from "@/images/collections/department1.png";
import department2Png from "@/images/collections/department2.png";
import department3Png from "@/images/collections/department3.png";
import department4Png from "@/images/collections/department4.png";
import Link from "next/link";
import { axiosInstance } from "@/axios";

const CATS = [
  {
    name: "Travel Kits",
    desc: "20+ categories",
    img: department1Png,
    color: "bg-indigo-100",
  },
  {
    name: "Beauty Products",
    desc: "10+ categories",
    img: department2Png,
    color: "bg-slate-100",
  },
  {
    name: "Sport Kits",
    desc: "34+ categories",
    img: department3Png,
    color: "bg-sky-100",
  },
  {
    name: "Pets Food",
    desc: "12+ categories",
    img: department4Png,
    color: "bg-orange-100",
  },
];

const SectionSliderCategories = ({
  heading = "Shop by collection",
  subHeading = "",
  className = "",
  itemClassName = "",
  data = CATS,
}) => {
  const sliderRef = useRef(null);
  const [isShow, setIsShow] = useState(false);
  const [categoriesData,setCategoriesData] = useState([])
  useEffect(()=>{
    const getCategories = async () =>{
      const res = await axiosInstance.get("live-collections/").then(res=>{
        setCategoriesData(res.data)
      })
    }
    getCategories()
  },[])


  useEffect(() => {
    if (!sliderRef.current || categoriesData.length === 0) return;
  
    const OPTIONS = {
      perView: 4,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: { perView: 4 },
        1024: { gap: 20, perView: 3.4 },
        768: { gap: 20, perView: 3 },
        640: { gap: 20, perView: 3 },
        500: { gap: 20, perView: 3 },
      },
    };
  
    const slider = new Glide(sliderRef.current, OPTIONS);
    slider.mount();
    setIsShow(true);
  
    return () => slider.destroy();
  }, [sliderRef, categoriesData]);
  

  return (
    <div className={`nc-SectionSliderCategories ${className}`}>
      <div ref={sliderRef} className={`flow-root ${isShow ? "" : "invisible"}`}>
        <Heading desc={subHeading} hasNextPrev>
          {heading}
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {categoriesData.map((item, index) => (
              <li key={index} className={`glide__slide ${itemClassName}`}>
                <CardCategory2
                  featuredImage={item.icon}
                  name={item.name}
                  id={item.id}
                />
              </li>
            ))}
            <li className={`glide__slide ${itemClassName}`}>
              <div
                className={`flex-1 relative w-full h-0 rounded-2xl overflow-hidden group aspect-w-1 aspect-h-1 bg-slate-100`}
              >
                <div>
                  <div className="absolute inset-y-6 inset-x-10 flex flex-col sm:items-center justify-center">
                    <div className="flex relative text-slate-900">
                      <span className="text-lg font-semibold ">
                        More collections
                      </span>
                      <svg
                        className="absolute left-full w-5 h-5 ml-2 rotate-45 group-hover:scale-110 transition-transform"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.0701 9.57L12.0001 3.5L5.93005 9.57"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 20.4999V3.66992"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-sm mt-1 text-slate-800">
                      Show me more
                    </span>
                  </div>
                </div>
                <Link
                  href={"/collection"}
                  className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"
                ></Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionSliderCategories;
