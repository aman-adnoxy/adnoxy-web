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
    <div className="faq-item mb-1 px-4 py-2 border-b border-gray-900 last:border-none">
      <div
        onClick={toggleAnswer}
        className="cursor-pointer flex items-center justify-between text-sm font-medium text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400 w-full"
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
        <div className="mt-1 text-xs text-gray-700 dark:text-gray-400 px-1">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;







