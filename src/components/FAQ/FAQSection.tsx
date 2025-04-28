// src/components/FAQSection.tsx
"use client"
import React from 'react';
import FAQItem from './FAQItem';

const FAQSection: React.FC = () => {
  const faqData = [
    { question: 'What services does ADNOXY provide?', answer: 'We offer tailored offline advertising solutions, including shelf space rentals, in-store sampling, brand activation campaigns and strategic collaborations with retail stores that match your brand target.' },
    { question: 'How do you choose the right stores for my brand?', answer: 'We carefully select stores based on factors such as target audience demographics, product category, relevance, and price points to ensure maximum engagement and visibility for your brand.' },
    { question: 'How is ADNOXY different from traditional advertising agencies?', answer: 'Unlike traditional agencies, we focus on in-store advertising and collaborations, providing brands with access to retail environments where purchasing decisions are made.' },
    { question: 'Can you track the impact of offline campaigns?', answer: 'yes,we provide performance insights, including foot traffic data, product interactions and test sales, to help you measure the effectiveness of your campaigns.' },
    { question: 'Is there a minimum campaign size or duration requirement?', answer: 'Our campaigns are flexible and can be tailored to your brand specific needs. Reach out to our team to discuss the best package for your objectives.' },
    { question: 'What types of brands can benefit from ADNOXY services?', answer: 'Our services are ideal for D2C brands, fashion labels, and consumer product companies looking to expand into the offline market or enhance their existing presence.' },
    { question: 'Do you offer creative services for in-store campaigns?', answer: ' Yes, we provide creative campaign ideas and promotional material support to ensure a visually impactful presence in stores.' },
    { question: 'How can I get started with ADNOXY?', answer: 'Simply fill out contact form or reachout to our team, and we will set up a consultation to discuss your brand needs and objectives.' },

    // Add more FAQs as needed
  ];

  return (
    <div className="faq-section min-h-[85vh] pt-16">
      <h2 className="text-[2rem] p-4 lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] font-bold text-center text-black mb-6" style={{ fontFamily: 'Plus Jakarta Sans' }}>Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-8 xl:mx-auto lg:mx-auto sm:mx-auto mt-8 font-[Poppins] bg-[#f5f5f5] rounded-3xl p-6">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
