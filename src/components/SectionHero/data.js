import Image, { StaticImageData } from "next/image";
import { Route } from "@/routers/types";
import imageRightPng from "@/images/slide-1-b.jpg";
import imageRightPng2 from "@/images/slide-2-b.jpg";
import imageRightPng3 from "@/images/3.png";
import imageSlide4 from "@/images/2.png";
import imageSlide5 from "@/images/1.png";
import imageSlide5_n from "@/images/silde-5.png";
import imageSlide5_n_b from "@/images/slide-5-b.png";

import Slide4 from "@/images/productos-hoodie-de-gira-blanco-2.jpg";
import Slide5 from "@/images/productos-remera-ojos-negra-2.jpg";
import Slide6 from "@/images/productos-remera-de-gira-blanca-2.jpg";



export const BIG_SCREEN_SLIDES = [
  {
    image: imageSlide5,
    heading: "",
    subHeading: "",
    btnText: "",
    btnLink: "/",
  },
  {
    image: imageSlide4,
    heading: "",
    subHeading: "",
    btnText: "",
    btnLink: "/",
  },
  {
    image: imageRightPng3,
    heading: "",
    subHeading: "",
    btnText: "",
    btnLink: "/",
  },
  // {
  //   image: imageRightPng,
  //   heading: "Drop #04",
  //   subHeading: "In this season, find the best 🔥",
  //   btnText: "Shop Now",
  //   btnLink: "/",
  // },
  // {
  //   image: imageRightPng2,
  //   heading: "Drop #05",
  //   subHeading: "In this season, find the best 🔥",
  //   btnText: "Shop Now",
  //   btnLink: "/",
  // },
];

export const SMALL_SCREEN_SLIDES = [
  {
    image: imageSlide5,
    heading: "",
    subHeading: "",
    btnText: "",
    btnLink: "/",
  },
  {
    image: imageSlide4,
    heading: "",
    subHeading: "",
    btnText: "",
    btnLink: "/",
  },
  {
    image: imageRightPng3,
    heading: "",
    subHeading: "",
    btnText: "",
    btnLink: "/",
  },

];
