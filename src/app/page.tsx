import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import FAQSection from "@/components/FAQ/FAQSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: " ADNOXY",
  description: "This is Home for ADNOXY",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
<<<<<<< HEAD
      {/*<AboutSectionOne />*/}
=======
>>>>>>> 392b61d6a20de124b06f06296151976242af585d
      <AboutSectionTwo />
      <AboutSectionOne />
      <FAQSection />
      {/* <Testimonials /> */}
      <Pricing />
      <FAQSection />
      <Blog />
      <Contact />
<<<<<<< HEAD
   
=======
>>>>>>> 392b61d6a20de124b06f06296151976242af585d
    </>
  );
}
