"use client";
import { useEffect, useState, useCallback } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import FiltersSidebar from "@/components/FilterSideBar"; // Assuming this is your filter sidebar component
import ProductCard from "@/components/ProductCard";
import TabFilters from "@/components/TabFilters";
import GenericBannerSlider from "@/components/GenericBanner";
import { axiosInstance } from "@/axios";

const PageCollection = () => {
  const router = useRouter();
  const thisPathname = usePathname();
  const searchParams = useSearchParams();
  const modal = searchParams?.get("modal");

  // Extract dynamic `id` from the pathname
  const id = thisPathname.split("/")[2];

  const [products, setProducts] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // Filter values
  const category = searchParams?.get("category") || "Electronics";
  const priceRange = searchParams?.get("price_range") || "10,100";
  const ordering = searchParams?.get("ordering") || "price";
  const gender = searchParams?.get("gender") || "Male";
  const age = searchParams?.get("age") || "Adult";
  const search = searchParams?.get("search") || "title";

  // Fetch products with filters and infinite scroll
  const fetchProducts = useCallback(
    async (url) => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(url);
        setProducts((prev) => [
          ...prev,
          ...res.data.results.filter(
            (newProduct) => !prev.some((oldProduct) => oldProduct.hsn === newProduct.hsn)
          ),
        ]);
        setNextUrl(res.data.next);
        setHasMore(!!res.data.next); // If there's no `next` URL, no more products
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    if (!id) return; // Ensure `id` is available before fetching data

    const apiUrl = `/ecom/product/list/?collection=${id}`
    fetchProducts(apiUrl);
  }, [category, priceRange, ordering, gender, age, search, id, fetchProducts]);

  const fetchMoreProducts = () => {
    if (nextUrl) {
      fetchProducts(nextUrl);
    }
  };

  return (
    <div className="nc-PageCollection">
      <div className="lg:pb-28">
        <GenericBannerSlider
          banners={[
            "https://nfynnzntkgzwbdpaztbq.supabase.co/storage/v1/object/public/velonnamedia/bannerdesktop/6.jpg",
          ]}
          type={"carousel"}
          className="mb-10"
          aspectRatio="20/9"
          showDots={true}
        />

        <div className="space-y-2">
          <main>
            {/* TABS FILTER */}
            <div className="block md:hidden px-[15px]">
              <TabFilters />
            </div>

            <div className="flex">
              {/* Sidebar for Filters */}
              <div className="sticky top-0 hidden md:block h-screen hiddenScrollbar overflow-auto w-1/4 bg-white">
                <FiltersSidebar />
              </div>

              {/* Product Section */}
              <div className="flex-1 p-2 md:p-6">
                <InfiniteScroll
                  dataLength={products.length}
                  next={fetchMoreProducts}
                  hasMore={hasMore}
                  loader={<div className="text-center mt-4">Loading...</div>}
                  endMessage={
                    <div className="text-center mt-4">You have seen all products</div>
                  }
                >
                  {/* Product Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
              {products.length > 0
                ? products.map((item) => <ProductCard data={item} key={item.id} />)
                : "No products found"}
                
            </div>
                </InfiniteScroll>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PageCollection;
