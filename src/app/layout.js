import { Poppins } from "next/font/google";
import "./globals.css";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/shared/Footer/Footer";
import SiteHeader from "@/app/SiteHeader";
import { Toaster } from "react-hot-toast";
import ContextProvides from "@/context/contextProvider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: 'Velonna',
  description: 'velonna',
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: "no",
  maximumScale: 1,
  minimumScale: 1,
};

export default function RootLayout({ children, params }) {
  return (
    <html lang="en" dir="" >
      <head>
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1" />
      </head>
      <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <ContextProvides>
        <SiteHeader />
        {children}
        <Toaster />
        <Footer />
        </ContextProvides>
      </body>
    </html>
  );
}
