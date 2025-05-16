"use client";

import { Feature } from "@/types/feature";
const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full bg-white rounded-3xl p-6 transition-all duration-300">
      <div className="flex justify-between items-start gap-4 py-4">
        {/* Title Section */}
        <div className="flex-1">
          <h3
            className="text-xl font-medium text-black dark:text-white sm:text-2xl lg:text-3xl xl:text-3xl"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            {title}
          </h3>
        </div>

        {/* Icon Section */}
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F2F5FF] text-[#a31d1d]">
          {icon}
        </div>
      </div>

      {/* Paragraph */}
      <p className="pt-6 pb-3 pr-[10px] sm:text-sm md:text-md lg:text-base text-black font-normal leading-relaxed font-['Poppins']">
        {paragraph}
      </p>
    </div>
  );
};

export default SingleFeature;
