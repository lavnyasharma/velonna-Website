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

const PageHome = async () => {
  try {
    const res = await axios.get("https://api.velonna.co/ecom/product/list/?limit=5");
    const pdata = res.data.results;
    const resr = await axios.get("https://api.velonna.co/ecom/product/list/?collection=7");
    const rdata = resr.data.results;
    const resrd = await axios.get("https://api.velonna.co/ecom/product/list/?category=3");
    const sdata = resrd.data.results;

    return (
      <div className="nc-PageHome relative overflow-hidden">
        {/* <SectionHero /> */}
         <GenericBannerSlider banners={[
           "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/1.jpg",
           "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/1.png",
           
        ]} aspectRatio="20/9" showDots={true} />
        <div className="relative">
          <SectionSliderCategories heading="Collections"/>
          <GenericBannerSlider banners={[
          "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/kind%20to%20skin%20co.%20(1).png",
        ]} aspectRatio="10/1.5" />
          <SectionSliderProductCard hideDetails={true} data={pdata} />
          
          {/* <div className="relative py-24 lg:py-32">
            <BackgroundSection />
            <SectionGridMoreExplore />
          </div> */}
           <GenericBannerSlider banners={[
          "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/kind%20to%20skin%20co.%20(2).png",
        ]} aspectRatio="10/1.5" />
          <SectionSliderProductCard
          
            data={rdata}
          />
         
          <GenericBannerSlider banners={[
          "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/3.jpg",
        ]} aspectRatio="20/9" showDots={true} />
          {/* <SectionSliderLargeProduct data={pdata} cardStyle="style1" /> */}


          {/* <SectionPromo3 /> */}
          <SectionGridFeatureItems data={sdata} />

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
