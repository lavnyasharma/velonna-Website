"use client";
import React, { useState } from "react";
import ScrollAnimation from "../ScrollAnimation";
import { useRouter } from "next/navigation";

export default function VideoBanners() {
    const [showPopup, setShowPopup] = useState(false);
    const router = useRouter();
    const handlePopupToggle = () => {
        router.push("/search")
        setShowPopup(!showPopup);
    };

    return (
        <div className="relative md:px-12">
            {/* Video Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between md:px-10">
                <div className="w-full lg:w-2/3 mb-3 overflow-hidden lg:mb-0 md:ml-auto lg:mr-8">

                    <div className="aspect-w-5 aspect-h-4 overflow-hidden">
                        {/* Video with autoPlay */}
                        <ScrollAnimation threshold={0} animationStyle="from-left" duration={"300ms"}>
                            <video
                                src="https://jnkbiyepcuggysoqrlmy.supabase.co/storage/v1/object/public/hello/website%20banner%20video.mp4?t=2024-12-28T21%3A09%3A33.983Z"
                                playsInline
                                muted
                                loop
                                autoPlay
                                className="absolute inset-0 w-full h-full object-cover shadow-lg"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </ScrollAnimation>
                    </div>

                </div>
                {/* Button and Text Section */}
                <div className="w-full lg:w-1/3 text-left md:text-left lg:mt-0 mr-auto">
                    <ScrollAnimation threshold={0} animationStyle="from-left" duration={"200ms"}>
                        <h2 className="text-2xl lg:text-4xl font-semibold uppercase text-customblue mb-3">
                            Discover Amazing Jewelry!
                        </h2>

                    </ScrollAnimation>
                    <ScrollAnimation duration={"200ms"}>
                        <p className="text-customblue uppercase tracking-wide font-medium text-[12px] mb-3">
                            Watch our collection of Jewelry and enjoy the latest trends.
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation duration={"1500ms"}>
                        <button
                            onClick={handlePopupToggle}
                            className="bg-custom-blue uppercase text-white px-6 py-2 border border-black transform transition-all duration-300 hover:bg-gray-800 focus:outline-none"
                        >
                            Shop
                        </button>
                    </ScrollAnimation>
                </div>
            </div>

        </div>
    );
}
