"use client";

import React, { useEffect, useRef, useState } from "react";
import Heading from "@/components/Heading/Heading";
// @ts-ignore
import Glide from "@glidejs/glide/dist/glide.esm";
import CardCategory2 from "@/components/CardCategories/CardCategory2";
import { axiosInstance } from "@/axios";


const SectionSliderCategories = ({
  heading ,
  subHeading = "",
  className = "",
  itemClassName = "",
  
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
      type:"carousel",
      perView: 5,
      gap:10,
      dragThreshold: 20,
      rewind:true,
      autoplay:4000,
      breakpoints: {
        1280: { gap:10, perView: 5 },
        1024: {  gap:10,perView: 4.5 },
        768: {  gap:10,perView: 3 },
        640: {  gap:10,perView: 2.5 },
        500: { gap:10, perView: 2.5 },
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
        {heading && <Heading desc={subHeading} >
          {heading}
        </Heading>}
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {categoriesData.map((item, index) => (
              <li key={index} className={`m-0 shadow-lg hover:shadow-lg overflow-hidden glide__slide ${itemClassName} `}>
                <CardCategory2
                  featuredImage={item.icon}
                  name={item.name}
                  id={item.id}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionSliderCategories;
