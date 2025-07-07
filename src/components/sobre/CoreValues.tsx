"use client";

import React from "react";
import { Lightbulb, Users, Target } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CoreValues: React.FC = () => {
  const { t } = useTranslation("common");
  const rawCards = t("coreValues.cards", { returnObjects: true });
  const cards = Array.isArray(rawCards) ? rawCards : [];
  const icons = [
    <Users className="w-8 h-8 text-white" key="icon-missao" />,
    <Lightbulb className="w-8 h-8 text-white" key="icon-visao" />,
    <Target className="w-8 h-8 text-white" key="icon-valores" />,
  ];
  return (
    <section className="bg-[#000d24] text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          className="text-sm uppercase tracking-widest text-gray-400 mb-2 garet"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("coreValues.badge")}
        </motion.p>

        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 leading-tight garet"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {t("coreValues.titlePart1")}{" "}
          <span className="text-[#4bc4f2] garet">
            {t("coreValues.titleHighlight")}
          </span>
          <br />
          {t("coreValues.titlePart2")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 garet">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className={`${
                index === 1 ? "bg-[#4bc4f2]" : "bg-gray-800"
              } p-8 rounded-lg flex flex-col items-center text-center`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <div
                className={`${
                  index === 1 ? "bg-[#000d24]" : "bg-gray-700"
                } p-4 rounded-full mb-6 garet`}
              >
                {icons[index]}
              </div>
              <h3 className="text-2xl font-semibold mb-4 garet">
                {card.title}
              </h3>
              <p className="text-white text-base leading-relaxed garet">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="bg-gray-700 text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-gray-600 transition duration-300 garet"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {t("coreValues.button")}
        </motion.button>
      </div>

      {/* Scroll to top button */}
      <motion.div
        className="fixed bottom-8 right-8 bg-gray-700 p-3 rounded-full cursor-pointer hover:bg-gray-600 transition duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
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

export default CoreValues;
