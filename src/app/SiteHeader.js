"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import HeaderLogged from "@/components/Header/HeaderLogged";
import Header from "@/components/Header/Header";
import { useThemeMode } from "@/hooks/useThemeMode";

const SiteHeader = () => {
  useThemeMode();
  
  let pathname = usePathname();
  useEffect(()=>{},[pathname])
  let notIncluded = ["/checkout", "/register", "/forgot-password"];
  if (notIncluded.includes(pathname)) {
    return null;
  }
  return pathname === "/home-2" ? <Header /> : <Header />;
};

export default SiteHeader;
