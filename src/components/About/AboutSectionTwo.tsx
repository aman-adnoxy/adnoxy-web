

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
    <section className="bg-white">
      <div className="container px-3 relative">
        {/* Full-Width Image with animation */}
        <img
          src="/images/about/image2.png"
          alt="About Image"
          className={`w-full h-[90vh] object-cover rounded-3xl transition-all duration-1000 ease-out transform ${
            animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        />

        {/* "Why Choose Us" Box (Desktop) */}
        <div className="absolute inset-0 hidden lg:flex items-center justify-start pl-12">
          <div
            className={`bg-white bg-opacity-95 rounded-3xl shadow-lg px-8 py-4 text-left max-w-md transition-all duration-1000 delay-300 transform ${
              animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-2xl font-bold text-black mb-2">Why Choose Us</h2>
            <p className="text-gray-700 mb-4">
              Discover why we're your top choice for Fashion Advertisements
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-3xl text-sm hover:bg-gray-500 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile "Why Choose Us" */}
        <div
          className={`block lg:hidden mt-6 px-4 transition-all duration-1000 delay-300 transform ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="bg-white bg-opacity-95 rounded-3xl shadow-lg px-6 py-4 text-left">
            <h2 className="text-2xl font-bold text-black mb-2">Why Choose Us</h2>
            <p className="text-gray-700 mb-4">
              Discover why we're your top choice for Fashion Advertisements
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-3xl text-sm hover:bg-gray-500 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Right-Side Floating Boxes (Desktop) */}
        <div className="absolute inset-0 hidden lg:flex flex-col items-end justify-center pr-10 gap-4">
          {features.map((item, index) => (
            <div
              key={index}
              className={`bg-white bg-opacity-100 rounded-full shadow-xl px-4 py-2 flex items-center gap-2 transition-all duration-700 transform ${
                animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              } delay-[${100 + index * 100}ms]`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <h3 className="text-m font-semibold text-black m-0">{item}</h3>
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

        {/* Mobile Floating Boxes */}
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
              <h3 className="text-m font-semibold text-black m-0">{item}</h3>
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
    </section>
  );
};

export default AboutSectionTwo;
