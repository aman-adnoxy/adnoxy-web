

import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    {/* Image + Content Section */}
    <div className="w-full px-8 relative">
      {/* Full-Width Image */}
      <Image
        src="/images/about/image2.png"
        alt="About Image"
        width={1100}
        height={300}
        className="w-full h-96 object-cover rounded-2xl"
        priority
      />
  
      {/* White Box Content Inside Image (Left aligned) */}
      <div className="absolute inset-0 flex items-center justify-start pl-12">
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



      <div className="absolute inset-0 flex flex-col items-end justify-center pr-10 gap-4">
  {/* Box 1 */}
  <div className="bg-white bg-opacity-100 rounded-full shadow-xl px-4 py-2 flex items-center gap-2">
    <h3 className="text-m font-semibold text-black m-0">
      Get Performance Metrics
    </h3>
    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-700 transition">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
      </svg>
    </div>
  </div>

  {/* Box 2 */}
  <div className="bg-white bg-opacity-100 rounded-full shadow-xl px-4 py-2 flex items-center gap-2">
    <h3 className="text-m font-semibold text-black m-0">
      Local Market Penetration
    </h3>
    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-700 transition">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
      </svg>
    </div>
  </div>

  {/* Box 3 */}
  <div className="bg-white bg-opacity-100 rounded-full shadow-xl px-4 py-2 flex items-center gap-2">
    <h3 className="text-m font-semibold text-black m-0">
      Collaborative Partnerships
    </h3>
    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-700 transition">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
      </svg>
    </div>
  </div>

  {/* Box 4 - Competitive Advantage */}
  <div className="bg-white bg-opacity-100 rounded-full shadow-xl px-4 py-2 flex items-center gap-2">
    <h3 className="text-m font-semibold text-black m-0">
      Competitive Advantage
    </h3>
    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-700 transition">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
      </svg>
    </div>
  </div>

  {/* Box 5 - Flexible Plans (Smaller) */}
<div className="bg-white bg-opacity-100 rounded-full shadow-xl px-4 py-2 flex items-center gap-2">
  <h3 className="text-m font-semibold text-black m-0">
    Flexible Plans
  </h3>
  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-700 transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
    </svg>
  </div>
</div>


  {/* Box 6 - Enhanced Brand Visibility */}
  <div className="bg-white bg-opacity-100 rounded-full shadow-xl px-4 py-2 flex items-center gap-2">
    <h3 className="text-m font-semibold text-black m-0">
      Enhanced Brand Visibility
    </h3>
    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-700 transition">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
      </svg>
    </div>
  </div>
</div>

</div>
  </section>
  
  );
};

export default AboutSectionTwo;


