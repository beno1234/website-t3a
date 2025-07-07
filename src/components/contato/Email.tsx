/* eslint-disable react/jsx-key */
"use client";

import React from "react";
import { PhoneOutgoing, Mail, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: { custom?: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: (custom?.custom ?? 0) * 0.2,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
};

const icons = [
  <PhoneOutgoing className="w-8 h-8 text-white" />,
  <Mail className="w-8 h-8 text-white" />,
  <MapPin className="w-8 h-8 text-white" />,
];

const Email: React.FC = () => {
  const { t } = useTranslation("common");
  const cards = t("coreValuesEmail.cards", { returnObjects: true }) as {
    title: string;
    content: string;
  }[];

  return (
    <section className="text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className={`p-8 rounded-lg flex flex-col items-center text-center ${i === 1 ? "bg-[#4bc4f2] shadow-lg text-purple-100" : "bg-gray-800 text-gray-400"}`}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <div
                className={`p-4 rounded-full mb-6 ${i === 1 ? "bg-[#000d24]" : "bg-gray-700"}`}
              >
                {icons[i]}
              </div>
              <h3
                className={`text-2xl font-semibold mb-4 garet ${i === 1 ? "text-white" : "text-white"}`}
              >
                {card.title}
              </h3>
              <p className="text-base leading-relaxed whitespace-pre-line garet">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.div
        className="fixed bottom-8 right-8 bg-gray-700 p-3 rounded-full cursor-pointer hover:bg-gray-600 transition-colors duration-300"
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={buttonVariants}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        role="button"
        tabIndex={0}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Email;
