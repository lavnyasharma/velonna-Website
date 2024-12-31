"use client";
import React, { useState } from "react";
import ScrollAnimation from "../ScrollAnimation";

export default function VideoBanners() {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopupToggle = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="relative md:px-12">
            {/* Video Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between md:px-10">
                <div className="w-full lg:w-2/3 mb-6 overflow-hidden lg:mb-0 md:ml-auto lg:mr-8">
                <ScrollAnimation duration={"500ms"}>
                    <div className="aspect-w-5 aspect-h-4 overflow-hidden">
                        {/* Video with autoPlay */}
                        <video
                            src="https://jnkbiyepcuggysoqrlmy.supabase.co/storage/v1/object/public/hello/website%20banner%20video.mp4?t=2024-12-28T21%3A09%3A33.983Z"
                            autoPlay
                        
                            muted
                            loop
                            className="absolute inset-0 w-full h-full object-cover shadow-lg"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    </ScrollAnimation>
                </div>
                {/* Button and Text Section */}
                <div className="w-full lg:w-1/3 text-center lg:text-left mt-6 lg:mt-0 mr-auto">
                    <ScrollAnimation duration={"2500ms"}>
                        <h2 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-4">
                            Discover Amazing Jewelry!
                        </h2>

                    </ScrollAnimation>
                    <ScrollAnimation duration={"2000ms"}>
                        <p className="text-gray-600 mb-6">
                            Watch our collection of Jewelry and enjoy the latest trends.
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation duration={"1500ms"}>
                        <button
                            onClick={handlePopupToggle}
                            className="bg-black text-white px-6 py-3 rounded-[10px] border border-black transform transition-all duration-300 hover:bg-gray-800 focus:outline-none"
                        >
                            Shop
                        </button>
                    </ScrollAnimation>
                </div>
            </div>

        </div>
    );
}
