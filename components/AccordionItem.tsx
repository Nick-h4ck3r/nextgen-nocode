"use client";

import React, { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-t rounded-md py-6">
      <div
        className="flex justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="font-semibold text-primaryText">{question}</div>
        <div className="text-gray-500">
          {!isOpen ? (
            <svg
              className="ml-2 w-5 h-5 text-secondaryText rotate-90"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              className="ml-2 w-5 h-5 text-secondaryText -rotate-90"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div
          className={`opacity-0 transition-opacity font-normal duration-300 text-secondaryText pt-3 pr-12 ${
            isOpen ? "opacity-100" : ""
          }`}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
