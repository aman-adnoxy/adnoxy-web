"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
<<<<<<< HEAD
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-[#ffffff] dark:bg-[#000000] h-fit pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[4rem] xl:pt-[10rem]"
    >
      <div className="container flex flex-col md:flex-row justify-center items-center">
        {/* Left Content */}
        <div className="flex-col w-[65vw] h-[75vh] order-2 xl:order-1 md:order-1 px-4 flex items-baseline">
          <div className="max-w-[800px] md:text-left">
            <h1
              className={`mb-5 lg:text-[4rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] font-bold leading-tight text-[#a31d1d] sm:leading-tight md:leading-tight transition-all duration-1000 ease-out transform ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              INNOVATING OFFLINE ADS AND MORE..
            </h1>
          </div>

          <div className="flex h-lvh py-4 w-[60vw] justify-center lg:justify-start md:justify-start xl:justify-between">
            <div className="mx-15">
              <p
                className={`mb-12 max-w-lg text-md md:text-lg font-[Poppins] transition-all duration-1000 delay-200 ease-out transform ${
                  animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                Bridging the Gap Between Online Ads and In-Store Impact—Experience the Future of Advertising Today!
              </p>

              <div
                className={`flex flex-col items-center justify-start sm:justify-center md:justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 transition-opacity duration-1000 delay-500 ${
                  animate ? "opacity-100" : "opacity-0"
                }`}
              >
                <Link
                  href="https://forms.gle/zW4584QMNMkerPREA"
                  className="inline-block rounded-full bg-[#a31d1d] px-6 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#a31d1d] hover:scale-105 transform transition"
                >
                  Get Started
                </Link>
              </div>
=======
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-[#ffffff] dark:bg-[#000000] h-fit pb-16 pt-[8rem] md:pb-[120px] md:pt-[150px] xl:pb-[4rem] xl:pt-[8rem]"
      >
        {/* <div className="container flex flex-col md:flex-row"> */}
        <div className="container w-full flex flex-col md:flex-row justify-center items-center">
          {/* Left Content */}
          {/* <div className="w-full order-2 xl:order-1 md:order-1 md:w-1/2 px-4 flex items-baseline"> */}
          <div className="flex-col h-[50vh] xl:h-[75vh] md:h-[65vh] order-2 xl:order-1 md:order-1 px-4 flex items-baseline">
            <div className="max-w-[800px] md:text-left">
              <h1 className="mb-5 lg:text-[4rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] font-bold leading-tight text-[#a31d1d] sm:leading-tight md:leading-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                INNOVATING OFFLINE ADS AND MORE..
              </h1>
>>>>>>> 00e5f445d6d9f1ff800119dd3fb1b90529da3a3d
            </div>

            <div
              className={`flex items-end transition-all duration-1000 delay-700 ease-out transform ${
                animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <img
                src="/images/about/image.png"
                alt="about-image"
<<<<<<< HEAD
                className="h-[35vh] w-[15vw] hidden xl:flex object-cover drop-shadow-three rounded-3xl"
=======
                className="aspect-[4/5] h-[40vh] xl:h-[75vh] lg:h-[60vh] md:h-[50vh] sm:h-[50vh] max-w-[400px] sm:max-w-[450px] md:max-w-[450px] lg:max-w-[460px] object-cover drop-shadow-three rounded-3xl"
>>>>>>> 00e5f445d6d9f1ff800119dd3fb1b90529da3a3d
              />
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div
          className={`order-1 px-4 pb-10 xl:order-2 w-[30vw] md:order-2 items-center justify-items-center transition-all duration-1000 delay-700 ease-out transform ${
            animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <img
            src="/images/hero/sale.jpg"
            alt="hero-image"
            className="aspect-[4/5] h-[40vh] xl:h-[75vh] lg:h-[60vh] md:h-[50vh] sm:h-[50vh] max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px] object-cover drop-shadow-three rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
