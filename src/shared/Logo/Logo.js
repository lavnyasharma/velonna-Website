import React from "react";
import logoImg from "@/images/logo.svg";
import logoMini from "@/images/logoMini.svg";
import logoLightImg from "@/images/logo.svg";
import Link from "next/link";
import Image from "next/image";



const Logo = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "flex-shrink-0",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-slate-600 ${className}`}
    >

      {img ? (
        <Image
          className={`h-14 hidden md:block   w-auto ${
            imgLight ? "dark:hidden" : ""
          }`}
          src={img}
          alt="Logo"
          style={{maxWidth:"inherit"}}
          priority
        />
      ) : (
        "Logo Here"
      )}
      {img ? (
        <Image
          className={`block h-9 md:hidden sm:h-10 w-auto ${
            imgLight ? "dark:hidden" : ""
          }`}
          src={logoMini}
          alt="Logo"
          sizes="400px"
          priority
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <Image
          className="hidden h-4 sm:h-10 w-auto dark:block"
          src={imgLight}
          alt="Logo-Light"
          sizes="500px"
          priority
        />
      )}
      
    </Link>
  );
};

export default Logo;
