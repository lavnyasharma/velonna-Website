import { NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";

export const MEGAMENU_TEMPLATES = [
  {
    id: ncNanoId(),
    href: "/#",
    name: "Home Page",
    children: [
      { id: ncNanoId(), href: "/", name: "Home  1" },
      { id: ncNanoId(), href: "/", name: "Home  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Header  1" },
      { id: ncNanoId(), href: "/", name: "Header  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Coming Soon" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Shop Pages",
    children: [
      { id: ncNanoId(), href: "/collection", name: "Category Page 1" },
      { id: ncNanoId(), href: "/", name: "Category Page 2" },
      { id: ncNanoId(), href: "/product-detail", name: "Product Page 1" },
      { id: ncNanoId(), href: "/cart", name: "Cart Page" },
      { id: ncNanoId(), href: "/checkout", name: "Checkout Page" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Other Pages",
    children: [
      { id: ncNanoId(), href: "/checkout", name: "Checkout Page" },
      { id: ncNanoId(), href: "/search", name: "Search Page" },
      { id: ncNanoId(), href: "/cart", name: "Cart Page" },
      { id: ncNanoId(), href: "/account", name: "Accout Page" },
      { id: ncNanoId(), href: "/account-order", name: "Order Page" },
      { id: ncNanoId(), href: "/subscription", name: "Subscription" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Blog Page",
    children: [
      { id: ncNanoId(), href: "/blog", name: "Blog Page" },
      { id: ncNanoId(), href: "/blog-single", name: "Blog Single" },
      { id: ncNanoId(), href: "/about", name: "About Page" },
      { id: ncNanoId(), href: "/contact", name: "Contact Page" },
      { id: ncNanoId(), href: "/login", name: "Login" },
      { id: ncNanoId(), href: "/signup", name: "Signup" },
      { id: ncNanoId(), href: "/forgot-pass", name: "Forgot Password" },
    ],
  },
];

const OTHER_PAGE_CHILD = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home Demo",
  },
  {
    id: ncNanoId(),
    href: "/collection",
    name: "Category Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/collection",
        name: "Category page 1",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/product-detail",
    name: "Product Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/product-detail",
        name: "Product detail 1",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/cart",
    name: "Cart Page",
  },
  {
    id: ncNanoId(),
    href: "/checkout",
    name: "Checkout Page",
  },
  {
    id: ncNanoId(),
    href: "/search",
    name: "Search Page",
  },
  {
    id: ncNanoId(),
    href: "/account",
    name: "Account Page",
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "Other Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/about",
        name: "About",
      },
      {
        id: ncNanoId(),
        href: "/contact",
        name: "Contact us",
      },
      {
        id: ncNanoId(),
        href: "/login",
        name: "Login",
      },
      {
        id: ncNanoId(),
        href: "/signup",
        name: "Signup",
      },
      {
        id: ncNanoId(),
        href: "/subscription",
        name: "Subscription",
      },
      { id: ncNanoId(), href: "/forgot-pass", name: "Forgot Password" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Blog Page",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/blog",
        name: "Blog Page",
      },
      {
        id: ncNanoId(),
        href: "/blog-single",
        name: "Blog Single",
      },
    ],
  },
];

export const NAVIGATION_DEMO_2 = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
  },
  {
    id: ncNanoId(),
    href: "/collection/7",
    name: "Blush",
  },
  {
    id: ncNanoId(),
    href: "/collection/38",
    name: "Willow",
  },
  {
    id: ncNanoId(),
    href: "/collection/48",
    name: "Simplistic Armlet",
  },
  {
    id: ncNanoId(),
    name: "Templates",
    type: "megaMenu",
    children: [
      { id: ncNanoId(), href: "/", name: "Home  1" },
      { id: ncNanoId(), href: "/", name: "Home  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Header  1" },
      { id: ncNanoId(), href: "/", name: "Header  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Coming Soon" },
    ],
  },

];
