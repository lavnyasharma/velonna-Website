import React from "react";
import imgAds from "@/images/ads.png";
import Image from "next/image";

const SectionAds = ({ className = "" }) => {
  return (
    <a href="/#" className={`nc-SectionAds block w-full ${className}`}>
      <Image alt="ads" className="w-full" src={imgAds} />
    </a>
  );
};

export default SectionAds;
