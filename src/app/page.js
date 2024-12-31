import React from "react";
import axios from "axios";
import SectionHero from "@/components/SectionHero/SectionHero";
import SectionSliderProductCard from "@/components/SectionSliderProductCard";
import SectionGridMoreExplore from "@/components/SectionGridMoreExplore/SectionGridMoreExplore";
import SectionGridFeatureItems from "@/components/SectionGridFeatureItems";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionSliderLargeProduct from "@/components/SectionSliderLargeProduct";
import SectionPromo3 from "@/components/SectionPromo3";
import SectionSliderCategories from "@/components/SectionSliderCategories/SectionSliderCategories";
import GenericBannerSlider from "@/components/GenericBanner";
import ScrollAnimation from "@/components/ScrollAnimation";
import VideoBanners from "@/components/videoBanners/videoBanners";
import Snowfall from "@/components/SnowfallEffect"; // Import the Snowfall component
import GenericVideoBanner from "@/components/GenereicVideoBanner";
import Slider from "@/components/GsapSlider";

const PageHome = async () => {
  try {
    const res = await axios.get("https://api.velonna.co/ecom/product/list/?limit=10&collection=7");
    const pdata = res.data.results;
    const resr = await axios.get("https://api.velonna.co/ecom/product/list/?collection=7");
    const rdata = resr.data.results;
    const resrd = await axios.get("https://api.velonna.co/ecom/product/list/?category=9");
    const sdata = resrd.data.results;

    return (
      <div className="nc-PageHome antialiased relative overflow-hidden">
        {/* <Snowfall></Snowfall> */}

        <GenericBannerSlider banners={[
          "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banner/Gold%20.............jpg",
          "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banner/sc.jpg",
          "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banner/Gold%20............%20(3).jpg",
          "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banner/gifs/Gold%20............%20(1).gif",
         
        ]}type={"carousel"} className="px-[15px] mb-[50px] md:mb-[100px]" aspectRatio="20/9" showDots={true} />
      
        <div className="relative px-[15px] space-y-[50px] md:space-y-[100px] bg-white">
         
            <SectionSliderCategories heading={"explore collections"} />
          
            <VideoBanners />

          <SectionSliderProductCard heading={"Trending products"} className="md:mx-20" data={pdata} />
          
          <GenericBannerSlider banners={[
            "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banner/mens/Gold%20............%20(2).jpg",
            "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banner/mens/Gold%20............%20(3).jpg",
            "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banner/mens/Gold%20............%20(4).jpg",

          ]} className="px-[15px] mb-[50px] md:mb-[100px]" aspectRatio="20/9" showDots={false} />
          <SectionSliderProductCard subHeading={"explore our best products"} heading={"Explore"} className="md:mx-20" data={sdata} />
          <GenericVideoBanner className="px-20 pb-10" banners={[
            "https://qjhgdjqnjdrsmzbvezrt.supabase.co/storage/v1/object/public/velonnamedia/v1.mp4",
            "https://qjhgdjqnjdrsmzbvezrt.supabase.co/storage/v1/object/public/velonnamedia/v2.mp4",
            "https://qjhgdjqnjdrsmzbvezrt.supabase.co/storage/v1/object/public/velonnamedia/v3.mp4",
            "https://qjhgdjqnjdrsmzbvezrt.supabase.co/storage/v1/object/public/velonnamedia/v4.mp4",
            "https://qjhgdjqnjdrsmzbvezrt.supabase.co/storage/v1/object/public/velonnamedia/v5.mp4",
            "https://qjhgdjqnjdrsmzbvezrt.supabase.co/storage/v1/object/public/velonnamedia/v6.mp4",
            "https://qjhgdjqnjdrsmzbvezrt.supabase.co/storage/v1/object/public/velonnamedia/v7.mp4",
          ]} perView={"5"} type="carousel" gap={10} showDots={false} aspectRatio="9/16" />

          <GenericBannerSlider className="px-20 pb-10" banners={[
            "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/Screenshot%202024-12-29%20at%203.26.04%20AM.png",
            "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/Screenshot%202024-12-29%20at%203.26.36%20AM.png",
            "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/Screenshot%202024-12-29%20at%203.26.45%20AM.png",
            "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/Screenshot%202024-12-29%20at%203.26.04%20AM.png",
            "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/Screenshot%202024-12-29%20at%203.26.36%20AM.png",
            "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/Screenshot%202024-12-29%20at%203.26.45%20AM.png", "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/Screenshot%202024-12-29%20at%203.26.04%20AM.png",
            "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/Screenshot%202024-12-29%20at%203.26.36%20AM.png",
          ]} perView={"5"} type="carousel" gap={1} showDots={false} aspectRatio="5/4" />

        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching product data:", error);
    return (
      <div>Failed to load products</div>
    );
  }
};

export default PageHome;
