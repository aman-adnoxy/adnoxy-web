"use client";

import { useEffect, useState } from "react";

const AboutSectionTwo = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
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
    <section className="relative bg-white">
      {/* Full-width image as background */}
      <div className="relative w-full h-[90vh] rounded-3xl overflow-hidden">
        <img
          src="/images/about/image2.png"
          alt="About Image"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out transform ${
            animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        />

        {/* "Why Choose Us" Box — Shared across Desktop and Mobile */}
        <div className="absolute inset-0 flex items-center justify-start lg:justify-start pl-4 lg:pl-12 z-10">
          <div
            className={`bg-white bg-opacity-90 rounded-3xl shadow-lg px-6 py-4 lg:px-8 lg:py-6 text-left max-w-md transition-all duration-1000 delay-300 transform ${
              animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-2">Why Choose Us</h2>
            <p className="text-gray-700 mb-4">
              Discover why we're your top choice for Fashion Advertisements
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-3xl text-sm hover:bg-gray-500 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Right-Side Floating Boxes (Desktop only) */}
        <div className="absolute inset-0 hidden lg:flex flex-col items-end justify-center pr-10 gap-4 z-10">
          {features.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-full shadow-xl px-4 py-2 flex items-center gap-2 transition-all duration-700 transform ${
                animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
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

      {/* Mobile Floating Boxes (appear below image) */}
      <div
        className={`block lg:hidden mt-6 px-4 space-y-4 transition-opacity duration-1000 delay-500 ${
          animate ? "opacity-100" : "opacity-0"
        }`}
      >
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-100 rounded-full shadow-md px-4 py-2 flex items-center gap-2"
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
    </section>
  );
};

export default AboutSectionTwo;
