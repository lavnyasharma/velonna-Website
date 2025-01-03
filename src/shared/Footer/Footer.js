"use client";

import LineBreak from "@/components/LineBreak";
import React, { useState } from "react";
import SocialsList from "../SocialsList/SocialsList";

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
  const [openSections, setOpenSections] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Small screens are 768px and below
    };

    handleResize(); // Initialize on first load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSection = (id) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderWidgetMenuItem = (menu) => {
    const isOpen = !isMobile || openSections[menu.id]; // Always open on large screens
    return (
      <div key={menu.id} className="border-b  border-neutral-300 md:border-0 dark:border-neutral-700">
        <div
          className={`flex items-center justify-between py-3 cursor-pointer ${isMobile ? "" : "cursor-default"
            }`}
          onClick={() => isMobile && toggleSection(menu.id)}
        >
          <h2 className="font-semibold text-neutral-700 dark:text-neutral-200 text-base">
            {menu.title}
          </h2>
          {isMobile && (
            <span className="text-lg text-neutral-500 dark:text-neutral-400">
              {isOpen ? "-" : "+"}
            </span>
          )}
        </div>
        {isOpen && (
          <ul className="mt-2 pb-[30px] space-y-4">
            {menu.menus.map((item, index) => (
              <li key={index}>
                <a
                  className="text-custom-blue text-[12px] dark:text-neutral-300 hover:text-black dark:hover:text-white"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="nc-Footer relative p-[15px] lg:px-20 lg:pt-20 bg-[#f5f5f5] border-t border-neutral-200 dark:border-neutral-700">
      {/* Widget Menus Section */}
      <div className="pb-[15px] grid grid-cols-1 sm:grid-cols-2 md:gap-y-5 sm:gap-y-0 gap-x-5 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-10">
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 md:pb-6 text-custom-blue">
        <h1 className="uppercase tracking-wider text-[12px] mb-3">Follow us on</h1>
        <SocialsList></SocialsList>
      </div>

      <div className="">
        <div className="font-normal md:justify-between uppercase text-black flex-row justify-start items-start text-[12px] space-y-2 md:space-y-4 sm:space-y-0 pt-4 sm:pt-0">
          <div className="text-custom-blue text-[15px] font-semibold">
            <p>&copy; 2025 VelonnaCo All Rights Reserved.</p>
          </div>
          <div className="text-custom-blue text-[15px] font-semibold">
            <p>made with ❤️ in India</p>
          </div>
          <div className="text-custom-blue text-[10px]">
            <p>Designed by <span className="text-[#4691f6] font-bold">Concric</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
