"use client";

import { useEffect, useState } from "react";
import Image from "next/image"; // ✅ Import Next.js Image component

const AboutSectionTwo = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const features = [
    "Get Performance Metrics",
    "Local Market Penetration",
    "Collaborative Partnerships",
    "Competitive Advantage",
    "Flexible Plans",
    "Enhanced Brand Visibility",
  ];

  return (
    <section id="whychooseus" className="relative bg-white pt-16">
      <div className="relative mx-8 h-[85vh] max-h-[80vh] overflow-hidden rounded-3xl">
        {/* ✅ Background Image with next/image */}
        <Image
          src="/images/about/image2.png"
          alt="About Image"
          fill
          priority
          className={`absolute inset-0 object-cover transition-all duration-1000 ease-out transform ${
            animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Feature Tags Container */}
        <div
          className={`absolute inset-0 z-10 flex flex-col gap-3 px-4 pt-6 lg:pt-0 lg:pr-10 lg:items-end transition-opacity duration-1000 ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Desktop Features */}
          <div className="hidden lg:flex flex-col items-end justify-center gap-4 w-full h-full">
            {features.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-full shadow-xl px-4 py-2 flex items-center gap-2 transition-all transform ${
                  animate
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                  transitionDuration: "700ms",
                }}
              >
                <h3 className="text-sm font-semibold text-black m-0">{item}</h3>
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-700 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M7 7h10v10"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Features */}
          <div className="block lg:hidden space-y-3">
            {features.map((item, index) => (
              <div
                key={index}
                className={`bg-white w-fit bg-opacity-90 rounded-full shadow-md px-4 py-2 flex items-center gap-2 transition-all transform ${
                  animate
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-3 opacity-0"
                }`}
                style={{
                  transitionDelay: `${100 + index * 80}ms`,
                  transitionDuration: "700ms",
                }}
              >
                <h3 className="text-sm font-semibold text-black m-0">{item}</h3>
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-700 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M7 7h10v10"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Box */}
        <div className="absolute inset-0 flex items-end justify-start lg:justify-start pl-4 lg:pl-12 z-10 pb-6">
          <div
            className={`bg-white w-[75vw] bg-opacity-90 rounded-3xl shadow-lg px-6 py-4 lg:px-8 lg:py-6 text-left max-w-md transition-all duration-1000 delay-300 transform ${
              animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-2">
              Why Choose Us
            </h2>
            <p className="text-gray-700 mb-4">
              Discover why we're your top choice for Offline Advertisements
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-3xl text-sm hover:bg-gray-500 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
