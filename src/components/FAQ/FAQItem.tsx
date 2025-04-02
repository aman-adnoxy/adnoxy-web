// src/components/FAQItem.tsx

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => setIsOpen(!isOpen);

  return (
    <div className="faq-item mb-4 border-b border-gray-300 pb-4">
      <div 
        onClick={toggleAnswer}
        className="cursor-pointer text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary"
      >
        {question}
      </div>
      {isOpen && (
        <div className="mt-2 text-base text-gray-700 dark:text-gray-400">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
