import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-[#ffffff] dark:bg-[#000000] h-fit pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[4rem] xl:pt-[10rem]"
      >
        <div className="container flex flex-col md:flex-row">
          {/* Left Content */}
          <div className="w-full order-2 xl:order-1 md:order-1 md:w-1/2 px-4 flex items-baseline">
            <div className="mx-auto max-w-[800px] md:text-left">
              <h1 className="mb-5 lg:text-[4rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] font-bold leading-tight text-[#a31d1d] sm:leading-tight md:leading-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                INNOVATING OFFLINE FASHION ADS AND MORE..
              </h1>
              <p className="mb-12 max-w-lg text-md md:text-lg font-[Poppins]">
                Bridging the Gap Between Online Ads and In-Store Impact—Experience the Future of Advertising Today!
              </p>
              <div className="flex flex-col items-center justify-start sm:justify-center md:justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="https://forms.gle/zW4584QMNMkerPREA"
                  className="inline-block rounded-full bg-[#a31d1d] px-6 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#a31d1d]"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full order-1 xl:order-2 md:order-2 md:w-1/2 px-4 flex items-center justify-center">
            <div className="relative mb-[3rem] md:mb-0 lg:mb-0 max-w-[500px] h-[40vh] lg:h-[70vh] md:h-[50vh] sm:h-[50vh]">
              <img
                src="/images/about/image.png"
                alt="about-image"
                className="aspect-[4/5] w-full h-[40vh] lg:h-[70vh] md:h-[50vh] sm:h-[50vh] max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px] object-cover drop-shadow-three rounded-3xl"
              />
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Hero;
