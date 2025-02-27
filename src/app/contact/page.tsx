import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | ",
  description: "This is Contact Page for ADNOXY",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description=" Contact ADNOXY today—your trusted partner in innovation and excellence. Reach us anytime!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
