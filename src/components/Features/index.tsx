import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="Discover the countless variations of ADNOXY—uniquely crafted, yet refined to perfection. Experience the essence, untouched and truly remarkable!🚀✨."
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
