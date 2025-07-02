"use client";

import React from "react";
import { Lightbulb, Users, Target } from "lucide-react";
import { motion, Variants } from "framer-motion";

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
  return (
    <section className="bg-[#000d24] text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          className="text-sm uppercase tracking-widest text-gray-400 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nossos valores
        </motion.p>

        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Revelando nossos{" "}
          <span className="text-[#4bc4f2]">valores fundamentais</span>
          <br />
          para um impacto duradouro.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Missão",
              icon: <Users className="w-8 h-8 text-white" />,
              bg: "bg-gray-800",
              iconBg: "bg-gray-700",
              text: "Desenvolver soluções inteligentes e inovadoras que potencializam o crescimento das empresas, tornando a tecnologia acessível e transformadora para desafios reais do mercado.",
              textColor: "text-gray-400",
            },
            {
              title: "Visão",
              icon: <Lightbulb className="w-8 h-8 text-white" />,
              bg: "bg-[#4bc4f2]",
              iconBg: "bg-[#000d24]",
              text: "Desenvolver soluções inteligentes e inovadoras que potencializam o crescimento das empresas, tornando a tecnologia acessível e transformadora para desafios reais do mercado.",
              textColor: "text-purple-100",
            },
            {
              title: "Valores",
              icon: <Target className="w-8 h-8 text-white" />,
              bg: "bg-gray-800",
              iconBg: "bg-gray-700",
              text: "Na T3A, acreditamos na inovação constante, no compromisso com o sucesso dos clientes e na ética em todas as ações. Valorizamos a colaboração e buscamos desenvolver tecnologias que respeitem o meio ambiente e gerem impacto positivo na sociedade.",
              textColor: "text-gray-400",
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              className={`${card.bg} p-8 rounded-lg flex flex-col items-center text-center`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <div className={`${card.iconBg} p-4 rounded-full mb-6`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              <p className={`${card.textColor} text-base leading-relaxed`}>
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="bg-gray-700 text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-gray-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Entre em contato
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
