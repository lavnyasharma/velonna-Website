import { CustomLink } from "@/data/types";
import React from "react";

const widgetMenus = [
  {
    id: "2",
    title: "Conditions",
    menus: [
      { href: "/termsandconidtions", label: "Terms & Conditions" },
      { href: "/refundpolicy", label: "Refund Policies" },
      { href: "/privacypolicy", label: "Privacy Policies" },
    ],
  },
  {
    id: "4",
    title: "Community",
    menus: [
      { href: "/", label: "Discussion Forums" },
      { href: "/", label: "Code of Conduct" },
      { href: "/", label: "Contributing" },
      { href: "/", label: "API Reference" },
    ],
  },
  {
    id: "3",
    title: "Company",
    menus: [
      { href: "/", label: "About Us" },
      { href: "/", label: "Contact Us" },
      { href: "/", label: "Live Chat" },
    ],
  },
];

const Footer = () => {
  const renderWidgetMenuItem = (menu, index) => {
    return (
      <div key={index} className="text-sm grid items-start justify-center">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative p-6  lg:px-20 lg:pt-20 bg-[#f5f5f5] border-t border-neutral-200 dark:border-neutral-700">
      {/* Widget Menus Section */}
      <div className="custom-container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-3 lg:gap-x-10">
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>

      {/* Footer Bottom Container with Address, Design Info, and Copyright */}
      <div className="mt-10 py-6 ">
        <div className="custom-container font-bold uppercase text-black flex flex-col sm:flex-row justify-between items-center text-sm space-y-4 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-0">
          <div className="text-neutral-600 dark:text-neutral-300">
            <p>made with love in India</p>
          </div>
          <div className="text-neutral-600 dark:text-neutral-300">
            <p>&copy; 2024 VelonnaCo. All Rights Reserved.</p>
          </div>
          <div className="text-neutral-600 dark:text-neutral-300">
            <p>Designed by Concric Pvt Ltd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
