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
        <SectionHero />
        <div className="container relative space-y-24 my-16 lg:space-y-32 lg:my-16">
        <SectionSliderCategories />
          <SectionSliderProductCard data={pdata} />
          {/* <div className="relative py-24 lg:py-32">
            <BackgroundSection />
            <SectionGridMoreExplore />
          </div> */}
          <SectionSliderProductCard
            heading="Best Sellers"
            subHeading="explore the blush collection"
            data={rdata}
          />
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
