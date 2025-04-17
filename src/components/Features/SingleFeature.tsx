import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    //<div className="w-full bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
    <div className="w-full bg-white rounded-2xl p-6">
      <div className="wow fadeInUp" data-wow-delay=".15s">

        <div className="flex justify-between py-4">
          <div className="self-center">
        <h3 className="text-xl font-medium text-black dark:text-white sm:text-2xl lg:text-10xl xl:text-3xl" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          {title}
        </h3>
        </div>
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-primary bg-opacity-10 text-primary rounded-[50%]">
          {icon}
        </div>

        </div>
        <p className="pt-6 pb-3 pr-[10px] sm:text-sm md:text-md lg:text-base text-black font-normal leading-relaxed font-['Poppins']">
          {paragraph}
        </p>
      </div>
    </div>
  );
};


export default SingleFeature;
