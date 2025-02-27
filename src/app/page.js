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
import MegaSpotterModule from "@/components/MegaSpotter";
import MegaSpotterKanban from "@/components/MegaSpotter";

const PageHome = async () => {

  const res = await axios.get("https://api.velonna.co/ecom/product/list/?limit=10&collection=7");
  const pdata = res.data.results;
  const resr = await axios.get("https://api.velonna.co/ecom/product/list/?collection=7");
  const rdata = resr.data.results;
  const resrd = await axios.get("https://api.velonna.co/ecom/product/list/?category=9");
  const sdata = resrd.data.results;
  
  return (
    <div className="nc-PageHome antialiased pb-[60px] relative overflow-hidden">
      {/* <Snowfall></Snowfall> */}
      <GenericBannerSlider banners={[
        "https://nfynnzntkgzwbdpaztbq.supabase.co/storage/v1/object/public/velonnamedia/bannerdesktop/6.jpg",
        "https://nfynnzntkgzwbdpaztbq.supabase.co/storage/v1/object/public/velonnamedia/bannerdesktop/8.jpg",
        "https://nfynnzntkgzwbdpaztbq.supabase.co/storage/v1/object/public/velonnamedia/bannerdesktop/5.jpg",
        "https://nfynnzntkgzwbdpaztbq.supabase.co/storage/v1/object/public/velonnamedia/bannerdesktop/4.jpg",
        "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banner/Gold%20............%20(3).jpg",
        "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banner/gifs/Gold%20............%20(1).gif",

      ]} mobilebanners={[
        "https://nfynnzntkgzwbdpaztbq.supabase.co/storage/v1/object/public/velonnamedia/bannersmobile/V2/5.jpg",
        "https://nfynnzntkgzwbdpaztbq.supabase.co/storage/v1/object/public/velonnamedia/bannersmobile/V2/4.jpg",
        "https://nfynnzntkgzwbdpaztbq.supabase.co/storage/v1/object/public/velonnamedia/bannersmobile/V2/3.jpg",
        "https://nfynnzntkgzwbdpaztbq.supabase.co/storage/v1/object/public/velonnamedia/bannersmobile/V2/2.jpg",

      ]}
        showBannerText={true}
        mobileAspectRatio={"3/5"} type={"carousel"} className="px-[15px] mb-[60px] md:mb-[100px]" aspectRatio="20/9" showDots={true} />

      <div className="relative px-[15px] space-y-[50px] md:space-y-[80px] bg-white">

        <SectionSliderCategories heading={"explore collections"} />

        <VideoBanners />

        <SectionSliderProductCard headingFontClassName={"text-[40px] PanD-Regular uppercase md:text-[28px] font-thin"} subHeading={"explore our best products"} heading={"Explore"} className="md:mx-20" data={sdata} />

        <GenericBannerSlider displayheading={true} banners={[
          "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banner/mens/Gold%20............%20(2).jpg",
          "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banner/mens/Gold%20............%20(3).jpg",
          "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banner/mens/Gold%20............%20(4).jpg",

        ]} mobilebanners={[
          "https://nfynnzntkgzwbdpaztbq.supabase.co/storage/v1/object/public/velonnamedia/bannersmobile/10.jpg",
          "https://nfynnzntkgzwbdpaztbq.supabase.co/storage/v1/object/public/velonnamedia/bannersmobile/11.jpg",
          "https://nfynnzntkgzwbdpaztbq.supabase.co/storage/v1/object/public/velonnamedia/bannersmobile/9.jpg",
          "https://nfynnzntkgzwbdpaztbq.supabase.co/storage/v1/object/public/velonnamedia/bannersmobile/8.jpg",

        ]} className="mb-[60px] md:mb-[100px]" aspectRatio="20/9" mobileAspectRatio={"1/1"} showDots={false} />
        <SectionSliderProductCard heading={"Trending products"} className="md:mx-20" data={pdata} />

      </div>

      <GenericVideoBanner className="px-[0px] mt-[60px] md:mt-[100px] mb-[60px] md:mb-[100px] md:px-0 md:pb-10 pb-0" banners={[
        "https://qjhgdjqnjdrsmzbvezrt.supabase.co/storage/v1/object/public/velonnamedia/v1.mp4",
        "https://qjhgdjqnjdrsmzbvezrt.supabase.co/storage/v1/object/public/velonnamedia/v2.mp4",
        "https://qjhgdjqnjdrsmzbvezrt.supabase.co/storage/v1/object/public/velonnamedia/v3.mp4",
        "https://qjhgdjqnjdrsmzbvezrt.supabase.co/storage/v1/object/public/velonnamedia/v4.mp4",
        "https://qjhgdjqnjdrsmzbvezrt.supabase.co/storage/v1/object/public/velonnamedia/v5.mp4",
        "https://qjhgdjqnjdrsmzbvezrt.supabase.co/storage/v1/object/public/velonnamedia/v6.mp4",
        "https://qjhgdjqnjdrsmzbvezrt.supabase.co/storage/v1/object/public/velonnamedia/v7.mp4",
      ]} perView={"5"} type="carousel" gap={10} showDots={false} aspectRatio="9/16" mobileAspectRatio="1/1" />
      <div className="relative px-[15px] space-y-[60px] md:space-y-[100px] bg-white">
        <GenericBannerSlider breakpoints={{
          1280: {
            perView: 4,
          },
          1024: {

            perView: 3,
          },
          768: {

            perView: 2,
          },
          640: {

            perView: 2,
          },
          500: {

            perView: 2,
          },
        }
        } className="px-[0px] md:px-20 md:pb-10 pb-0" banners={[
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

};

export default PageHome;
