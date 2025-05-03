"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [isClient, setIsClient] = useState(false); // Track client-side

  useEffect(() => {
    setIsClient(true); // Set to true when component mounts on client
  }, []);

  useEffect(() => {
    if (!isClient) return; // Only run on client

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasEntered) {
          setIsVisible(true);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              setHasEntered(true);
            }, 200);
          }, 100);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasEntered, isClient]);

  // Don't render video on server to prevent hydration mismatch
  const renderVideo = () => {
    if (!isClient) return null;
    
    return (
      <video
        src="/images/video/myvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
    );
  };

  return (
    <section className="relative z-10 py-16">
      <div className="container">
        <h2 className="text-[2rem] lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] font-extrabold text-center text-black mb-10" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          Your Brand's Best Story, Told Boldly.
        </h2>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            {/* Video Box */}
            <div className="mx-auto h-[70vh] max-h-[70vh] overflow-hidden rounded-3xl border border-gray-300 shadow-[0_0_20px_rgba(211,211,211,0.6)] transition-all duration-300">
              <div className="relative aspect-[77/40] h-full w-full">
                {renderVideo()}
              </div>
            </div>

            {/* Stats Row */}
            <div
              ref={statsRef}
              className="mt-20 flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left px-4"
            >
              {[
                { value: "200+", label: "Premium Retail Outlets", delay: "delay-100" },
                { value: "10M+", label: "Daily Impressions", delay: "delay-100" },
                { value: "3+", label: "Major Cities", delay: "delay-100" },
              ].map((stat, index) => {
                const animationClass = hasEntered
                  ? `opacity-100 translate-y-0 scale-100 ${stat.delay}`
                  : isVisible
                  ? "opacity-0 -translate-y-5 scale-110"
                  : "opacity-0 translate-y-10 scale-95";

                return (
                  <div
                    key={index}
                    className={`flex-1 transition-all justify-items-center duration-700 ease-in-out transform ${animationClass}`}
                  >
                    <h3 className="text-4xl font-extrabold text-[#a31d1d]" style={{ fontFamily: 'Plus Jakarta Sans' }}>{stat.value}</h3>
                    <p className="text-lg font-medium text-gray-700 font-['Poppins']">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;