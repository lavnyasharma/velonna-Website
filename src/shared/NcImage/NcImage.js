import React, { FC } from "react";
import Image, { ImageProps } from "next/image";



const NcImage= ({
  containerClassName = "",
  alt = "nc-image",
  className = "object-cover w-full h-full",
  ...args
}) => {
  return (
    <div className={containerClassName} >
      {args.src ===""?"":<Image className={className} style={args.style} alt={alt} {...args} />}
      
    </div>
  );
};

export default NcImage;
