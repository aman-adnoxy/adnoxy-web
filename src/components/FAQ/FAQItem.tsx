// src/components/FAQItem.tsx
// src/components/FAQItem.tsx
// components/FAQItem.tsx
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => setIsOpen(!isOpen);

  return (
    <div className="faq-item mb-1 px-4 py-2">
      <div
        onClick={toggleAnswer}
        className="cursor-pointer flex my-2 items-center justify-between text-md font-medium text-black hover:text-gray-600 w-full"
      >
        <span>{question}</span>
        <span
          className={`transform transition-transform text-xs font-semibold ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          ▼
        </span>
      </div>
      {isOpen && (
        <div className="mt-2 mb-2 text-sm dark:text-gray-400">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;







