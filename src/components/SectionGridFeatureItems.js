import React, { FC } from "react";
import HeaderFilterSection from "@/components/HeaderFilterSection";
import ProductCard from "@/components/ProductCard";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import { Product, PRODUCTS } from "@/data/data";



const SectionGridFeatureItems = ({
  data,
}) => {
  return (
    <div className="nc-SectionGridFeatureItems relative">
      <HeaderFilterSection />
      <div
        className={`grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 `}
      >
        {data?data.map((item, index) => (
          <ProductCard data={item} key={index} />
        )):"Loading"}
      </div>
    </div>
  );
};

export default SectionGridFeatureItems;
