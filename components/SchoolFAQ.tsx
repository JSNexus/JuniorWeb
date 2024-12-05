import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const SchoolFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What ages do you accept?",
      answer:
        "We welcome children from 3 to 6 years old, providing a nurturing early learning environment tailored to their developmental stages.",
      color: "#FF6B6B", // Soft Red
    },
    {
      question: "What are your school hours?",
      answer:
        "Our school operates from 8:00 AM to 3:30 PM, with optional early drop-off and after-school programs available.",
      color: "#4ECDC4", // Teal
    },
    {
      question: "Do you provide meals?",
      answer:
        "Yes! We offer nutritious, balanced meals prepared fresh daily, considering children's dietary needs and preferences.",
      color: "#45B7D1", // Sky Blue
    },
    {
      question: "How do you ensure child safety?",
      answer:
        "Child safety is our top priority. We have strict security protocols, background-checked staff, secured premises, and constant supervision.",
      color: "#FDCB6E", // Warm Yellow
    },
    {
      question: "What educational approach do you use?",
      answer:
        "We blend play-based learning with structured activities, focusing on holistic development through creativity, exploration, and fun.",
      color: "#A8E6CF", // Mint Green
    },
    {
      question: "How can parents stay involved?",
      answer:
        "We encourage parent participation through regular updates, parent-teacher meetings, volunteering opportunities, and interactive school events.",
      color: "#FF8ED4", // Soft Pink
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
            style={{ borderTop: `5px solid ${faq.color}` }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {faq.question}
              </h3>
              {activeIndex === index ? (
                <ChevronUp className="text-gray-600" size={24} />
              ) : (
                <ChevronDown className="text-gray-600" size={24} />
              )}
            </button>
            {activeIndex === index && (
              <div
                className="px-6 pb-6 text-gray-700 text-base"
                style={{ animation: "fadeIn 0.3s ease-in-out" }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SchoolFAQ;
