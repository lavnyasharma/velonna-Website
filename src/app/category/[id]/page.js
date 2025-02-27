"use client"
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "@/shared/Pagination/Pagination";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ProductCard from "@/components/ProductCard";
import TabFilters from "@/components/TabFilters";
import { axiosInstance } from "@/axios";

const PageCollection = () => {
  const router = useRouter();
  // const { id } = router.query; // Dynamic route params (`id` corresponds to collection or category ID)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

 const thisPathname = usePathname();
  const searchParams = useSearchParams();
  const modal = searchParams?.get("modal");

  // Extract dynamic `id` from the pathname
  const id = thisPathname.split("/")[2];
  useEffect(() => {
    if (!id) return; // Ensure `id` is available before fetching data

    const fetchProducts = async () => {
      setLoading(true);
   
      try {
        // Fetch filters and query params from the URL
        const category = searchParams?.get("category") || "Electronics";
        const priceRange = searchParams?.get("price_range") || "10,100";
        const ordering = searchParams?.get("ordering") || "price";
        const gender = searchParams?.get("gender") || "Male";
        const age = searchParams?.get("age") || "Adult";
        const search = searchParams?.get("search") || "title";

        // Dynamically override collection based on requirements
        // let collection = searchParams?.get("collection") || id || "10";
        // if (collection === "10") {
        //   collection = "20";
        // }

        // Construct the API URL with query params
        const apiUrl = `/ecom/product/list/?category=${id}`;

        // Fetch the data
        const response = await axiosInstance.get(apiUrl).then((res)=>{
          setProducts(res.data.results);
          setLoading(false)
        });
       

        // Update state with the fetched products
       
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [router.query, id]); // Re-fetch whenever query or id changes

  return (
    <div className="nc-PageCollection">
      <div className=" py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
        <div className="space-y-10 lg:space-y-14">
          {/* HEADING */}
          {/* <div className="max-w-screen-sm">
            <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
             
            </h2>
            <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
              We not only help you design exceptional products, but also make it
              easy for you to share your designs with more like-minded people.
            </span>
          </div>

          <hr className="border-slate-200 dark:border-slate-700" /> */}

          <main>
            {/* TABS FILTER */}
            {/* <TabFilters /> */}

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-8 lg:mt-10">
              {loading ? (
                <p>Loading...</p>
              ) : (
                products.map((item, index) => (
                  <ProductCard data={item} key={index} />
                ))
              )}
            </div>

            {/* PAGINATION */}
            <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
              {/* <Pagination />
              <ButtonPrimary loading={loading}>Show me more</ButtonPrimary> */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PageCollection;
