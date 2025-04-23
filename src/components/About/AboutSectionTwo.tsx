

import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="bg-white">
      <div className="container px-3 relative">
        {/* Full-Width Image */}
        <img
          src="/images/about/image2.png"
          alt="About Image"
          className="w-full h-[90vh] object-cover rounded-3xl"
        />

        {/* "Why Choose Us" Box */}
        <div className="absolute inset-0 hidden lg:flex items-center justify-start pl-12">
          <div className="bg-white bg-opacity-95 rounded-3xl shadow-lg px-8 py-4 text-left max-w-md">
            <h2 className="text-2xl font-bold text-black mb-2">Why Choose Us</h2>
            <p className="text-gray-700 mb-4">
              Discover why we're your top choice for Fashion Advertisements
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-3xl text-sm hover:bg-gray-500 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Version of "Why Choose Us" - stacked below image */}
        <div className="block lg:hidden mt-6 px-4">
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

        {/* Right-Side Floating Boxes */}
        <div className="absolute inset-0 hidden lg:flex flex-col items-end justify-center pr-10 gap-4">
          {[
            "Get Performance Metrics",
            "Local Market Penetration",
            "Collaborative Partnerships",
            "Competitive Advantage",
            "Flexible Plans",
            "Enhanced Brand Visibility",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-100 rounded-full shadow-xl px-4 py-2 flex items-center gap-2"
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

        {/* Mobile Version of Feature Boxes */}
        <div className="block lg:hidden mt-6 px-4 space-y-4">
          {[
            "Get Performance Metrics",
            "Local Market Penetration",
            "Collaborative Partnerships",
            "Competitive Advantage",
            "Flexible Plans",
            "Enhanced Brand Visibility",
          ].map((item, index) => (
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


