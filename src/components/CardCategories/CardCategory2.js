import React from "react";
import NcImage from "@/shared/NcImage/NcImage";
import Link from "next/link";
import Image from "next/image";

const CardCategory2 = ({
  className = "",
  ratioClass = "aspect-w-1 aspect-h-1",
  featuredImage = ".",
  id,
  name,
}) => {
  return (
    <Link
      href={`/collection/${id}`}
      className={`nc-CardCategory2 ${className}`}
      data-nc-id="CardCategory2"
    >
      <div
        className={`flex-1 relative w-full h-0 rounded-2xl overflow-hidden group ${ratioClass}`}
      >
        <div className="pt-14">
           <Image
            alt=""
            fill
            containerClassName="w-full h-full flex justify-center"
            src={featuredImage}
            className="object-cover rounded-2xl"
            sizes="400px"
          />
        </div>
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity rounded-2xl"></span>
      </div>
      <div className="mt-5 flex-1 text-center">
        <h2 className="text-sm sm:text-sm text-neutral-900 dark:text-neutral-100 font-semibold">
          {name}
        </h2>
      </div>
    </Link>
  );
};

export default CardCategory2;
