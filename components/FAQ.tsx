"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "What is IAAAACAME?",
    answer: "IAAAACAME (International Association of African American Ambassadors to Africa) is a non-profit organization dedicated to empowering African communities through education, healthcare, and sustainable development initiatives.",
  },
  {
    question: "How can I donate to support your projects?",
    answer: "You can donate by contacting us through our contact page. We accept various payment methods and can provide tax receipts for your contributions. Every donation directly supports our projects in African communities.",
  },
  {
    question: "Can I volunteer with IAAAACAME?",
    answer: "Yes! We welcome volunteers from all backgrounds. Whether you can offer your time on-site in Africa or remotely, there are many ways to contribute. Contact us to learn about current volunteer opportunities.",
  },
  {
    question: "Where do you operate?",
    answer: "We have offices in the United States (Miami, Florida) and Nigeria (Abuja), with projects spanning across West Africa including Nigeria, Ghana, and Senegal. Our impact reaches over 100 communities.",
  },
  {
    question: "How are donations used?",
    answer: "Donations are used for building schools, providing clean water, healthcare initiatives, agricultural programs, and women empowerment projects. We maintain transparency and provide regular updates on project progress.",
  },
  {
    question: "Can organizations partner with IAAAACAME?",
    answer: "Absolutely! We actively seek partnerships with organizations, businesses, and institutions that share our vision. Partnerships can include funding, resource sharing, expertise, or collaborative projects.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our organization and work
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <HiChevronDown
                  className={`text-2xl text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
