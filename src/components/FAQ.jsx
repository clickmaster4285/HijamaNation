import React, { useState } from "react";

const faqs = [
  {
    question: "Is the Hijama certification recognised?",
    answer: "Yes. Our certification is a professionally issued Hijama qualification demonstrating your competence in theory, safety protocols, and practice. It meets the standards required by most UK insurance providers and is widely recognised within the Hijama and wellness community.",
  },
  {
    question: "How long does each course take to complete?",
    answer: "Most of our courses are designed to be completed within 6 weeks, though you can study at your own pace with lifetime access to all course materials.",
  },
  {
    question: "Can I study entirely online?",
    answer: "Yes. All theoretical content is delivered online. Practical sessions may be required depending on your chosen programme, and we provide guidance on completing these locally.",
  },
  {
    question: "Do I need prior medical experience to enrol?",
    answer: "No prior medical experience is required. Our courses are designed to take you from beginner to certified practitioner with full support throughout.",
  },
  {
    question: "What support is available after I graduate?",
    answer: "We offer ongoing community support, CPD resources, and access to our network of practitioners to help you build your practice after graduation.",
  },
  {
    question: "Can I get insurance after completing this course?",
    answer: "Yes. Our certification is recognised by major insurance providers, allowing you to obtain professional indemnity insurance upon completion.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20 px-8 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
            Frequently<br />Asked<br />
            <em className="text-blue-900 italic font-serif">Questions</em>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Everything you need to know about enrolling, studying, and qualifying with Hijama Nation.
          </p>
          <div className="border-l-4 border-green-600 pl-4">
            <p className="text-gray-400 text-sm mb-1">Still have questions?</p>
            <a href="#" className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors">
              Contact our student support →
            </a>
          </div>
        </div>
        <div className="flex-1">
          {faqs.map((faq, index) => (
            
            <div key={index} className="border-t border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className={openIndex === index ? "font-serif text-lg text-blue-900" : "font-serif text-lg text-gray-800"}>
                  {faq.question}
                </span>
                <div className={openIndex === index ? "w-8 h-8 rounded-full flex items-center justify-center ml-4 bg-blue-900 text-white" : "w-8 h-8 rounded-full flex items-center justify-center ml-4 bg-gray-100 text-gray-500"}>
                  {openIndex === index ? "−" : "+"}
                </div>
              </button>
              {openIndex === index && (
                <div className="pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
}