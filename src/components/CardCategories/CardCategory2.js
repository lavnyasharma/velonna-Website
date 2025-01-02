import React from "react";
import NcImage from "@/shared/NcImage/NcImage";
import Link from "next/link";
import Image from "next/image";

const CardCategory2 = ({
  className = "",
  ratioClass = "aspect-w-1 aspect-h-1 ",
  featuredImage = "/",
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
        className={`relative w-full h-0 overflow-hidden group ${ratioClass}`}
      >
        <div className="rounded-sm overflow-hidden">
           <Image
            alt=""
            fill
            containerClassName="w-full h-full flex justify-center"
            src={featuredImage}
            className="object-cover hover:scale-110 duration-300"
            sizes="1000px"
          />
        </div>
      </div>
      <div className="mt-2 relative mb-2 flex-1 text-center">
        <h2 className="text-[11px] tracking-widest uppercase font-medium text-custom-blue dark:text-neutral-100">
          {name.toString().charAt(0).toUpperCase() + name.toString().slice(1)}
        </h2>
      </div>
    </Link>
  );
};

export default CardCategory2;
