

import Image from "next/image"; // Ensure Image is imported correctly

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left Side Image */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 max-w-[500px] text-center lg:m-0" data-wow-delay=".15s">
              <div className="relative mx-auto max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/image2.png"
                  alt="about-image"
                  width={500} // Adjusts according to text size
                  height={450} // Maintains aspect ratio
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 object-cover"
                  priority
                />
                <Image
                  src="/images/about/image2.png"
                  alt="about image"
                  width={500}
                  height={450}
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side Text Content */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              {/* Campaign Strategy */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Campaign Strategy & Execution
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We create and execute tailored campaigns to showcase your brand in the right retail spaces.
                </p>
              </div>
              {/* Sampling & Product Trials */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Sampling & Product Trials
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Engage customers by offering samples in partner stores, allowing them to experience your brand firsthand and build connections.
                </p>
              </div>
              {/* Shelf Space Rental */}
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Shelf Space Rental
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Secure premium shelf space in strategically selected retail stores that align with your target audience and price point, ensuring maximum product visibility.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default AboutSectionTwo;

