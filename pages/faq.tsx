import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AccordionItem from "../components/AccordionItem";
import { faqData } from "../public/faqData";

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    // Add a delay between displaying each FAQ item
    const delay = 500; // Adjust this value to your desired delay in milliseconds
    const timeoutIds: NodeJS.Timeout[] = [];

    faqData.forEach((_, index) => {
      const timeoutId = setTimeout(() => {
        setVisibleItems((prevVisibleItems) => [...prevVisibleItems, index]);
      }, delay * index);

      timeoutIds.push(timeoutId);
    });

    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevOpenIndex) => (prevOpenIndex === index ? null : index));
  };

  return (
    <div className="container max-w-5xl mx-auto p-4 h-screen">
      <h2 className="mb-14 text-3xl tracking-tight font-bold text-primaryText">
        Frequently Asked Questions
      </h2>
      <div className="">
        {visibleItems.map((index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <AccordionItem
              question={faqData[index].question}
              answer={faqData[index].answer}
              isOpen={index === openIndex}
              toggleAccordion={() => toggleAccordion(index)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
