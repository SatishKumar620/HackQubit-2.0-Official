import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Who can participate?",
    answer: "Any student with a valid college ID can participate. Whether you're a seasoned scallywag or a fresh deckhand, all skill levels are welcome!"
  },
  {
    question: "Is there a registration fee?",
    answer: "No, HackQubit 2.0 is completely free for all participants. We provide the food, swag, and workspace!"
  },
  {
    question: "What is the team size?",
    answer: "Teams can have up to 4 members. You can form a crew beforehand or find one during our team-building session."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, student ID, and a pirate's spirit! We recommend comfortable clothes and maybe a sleeping bag if you plan to stay overnight."
  },
  {
    question: "Do I need to know how to code?",
    answer: "While coding knowledge is helpful, hackathons also need designers, product managers, and presenters. There are also beginner workshops to help you learn!"
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-['Trade_Winds'] text-slate-800 mb-4"
          >
            Captain's Queries (FAQ)
          </motion.h2>
          <p className="text-lg text-slate-600">Got questions? We have answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-slate-200 rounded-lg overflow-hidden bg-sky-50/50"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-sky-100/50 transition-colors"
              >
                <span className="font-bold text-slate-800 text-lg font-['Cinzel']">{faq.question}</span>
                <span className="text-amber-600 text-2xl font-bold ml-4">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-slate-600 border-t border-slate-200">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
