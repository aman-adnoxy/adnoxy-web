import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="bg-white">
        <div className="container p-10 md:text-xl sm:text-lg rounded-3xl bg-[#f5f5f5]" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          <SectionTitle
            title="Our Services"
            paragraph=""
            //paragraph="Discover the countless variations of ADNOXY—uniquely crafted, yet refined to perfection. Experience the essence, untouched and truly remarkable!🚀✨."
            center
          />

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {featuresData.map((feature) => (
        <SingleFeature key={feature.id} feature={feature} />
      ))}
    </div>
        </div>
      </section>
    </>
  );
};

export default Features;
