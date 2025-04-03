import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[90px] items-center justify-center rounded-xl bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-10xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};


export default SingleFeature;
