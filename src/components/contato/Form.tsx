"use client";
import React from "react";
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react"; // Ícones para redes sociais
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

const FormSection: React.FC = () => {
  return (
    <section className=" text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Lado Esquerdo: Texto e Redes Sociais */}
        <motion.div
          className="text-center lg:text-left"
          variants={itemVariants}
        >
          <p className="text-sm uppercase tracking-widest text-[#4bc4f2] mb-2">
            Contate-nos
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Conecte-se <br className="sm:hidden lg:inline" />
            <span className="text-[#4bc4f2]">conosco</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl lg:mx-0 mx-auto">
            Conecte-se conosco para descobrir como nossas soluções podem
            transformar seu negócio. Estamos prontos para ajudar você a alcançar
            seus objetivos com tecnologia e inovação.
          </p>

          {/* Links de Redes Sociais */}
          <div className="flex justify-center lg:justify-start space-x-4">
            {[
              {
                href: "#",
                label: "Facebook",
                icon: <Facebook className="w-6 h-6 text-white" />,
              },
              {
                href: "#",
                label: "Twitter",
                icon: <Twitter className="w-6 h-6 text-white" />,
              },
              {
                href: "#",
                label: "Youtube",
                icon: <Youtube className="w-6 h-6 text-white" />,
              },
              {
                href: "#",
                label: "Instagram",
                icon: <Instagram className="w-6 h-6 text-white" />,
              },
            ].map(({ href, label, icon }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Lado Direito: Formulário de Contato */}
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-lg lg:max-w-none mx-auto lg:mx-0"
          variants={itemVariants}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="nome"
                  className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="telefone"
                  className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                />
              </div>
              <div>
                <label htmlFor="service" className="sr-only">
                  Select service
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 pr-10"
                  >
                    <option value="">Select service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="consulting">Consulting</option>
                  </select>
                  {/* Ícone de seta para o dropdown */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.096 6.924 4.682 8.338z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="comment" className="sr-only">
                Escreva sua mensagem aqui
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={5}
                placeholder="Escreva sua mensagem aqui"
                required
                className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#4bc4f2] text-white font-semibold rounded-lg hover:bg-[#4bc4f2] focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-70 transition duration-300"
            >
              Enviar
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FormSection;
