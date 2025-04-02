// src/components/FAQSection.tsx

import React from 'react';
import FAQItem from './FAQItem';

const FAQSection: React.FC = () => {
  const faqData = [
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'What is a component in React?', answer: 'Components are reusable UI elements that can be rendered independently.' },
    { question: 'What is JSX?', answer: 'JSX is a syntax extension for JavaScript that looks similar to HTML.' },
    { question: 'How do I manage state in React?', answer: 'State in React can be managed using the useState hook in functional components.' },
    // Add more FAQs as needed
  ];

  return (
    <div className="faq-section px-4 py-8 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-center text-black dark:text-white mb-6">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
