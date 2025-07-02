// components/CoreValues.tsx
"use client";

import React from "react";
import { PhoneOutgoing, Mail, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";

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

const Email: React.FC = () => {
  return (
    <section className="text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* People Card */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg flex flex-col items-center text-center"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <div className="bg-gray-700 p-4 rounded-full mb-6">
              <PhoneOutgoing className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 garet">Atendimento</h3>
            <p className="text-gray-400 text-base leading-relaxed garet">
              +415-864-8728 <br />
              +415-864-8729
            </p>
          </motion.div>

          {/* Innovation Card */}
          <motion.div
            className="bg-[#4bc4f2] p-8 rounded-lg flex flex-col items-center text-center shadow-lg"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <div className="bg-[#000d24] p-4 rounded-full mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 garet">Email</h3>
            <p className="text-purple-100 text-base leading-relaxed garet">
              test@teste.com <br />
              test@teste.com
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg flex flex-col items-center text-center"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <div className="bg-gray-700 p-4 rounded-full mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 garet">Localização</h3>
            <p className="text-gray-400 text-base leading-relaxed garet">
              rua tal - Rio de Janeiro - 456, Brasil
            </p>
          </motion.div>
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
