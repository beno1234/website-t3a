"use client";
import React from "react";
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

const FormSection: React.FC = () => {
  const { t } = useTranslation("common");

  const socialLinks = [
    {
      href: "#",
      label: t("socials.facebook"),
      icon: <Facebook className="w-6 h-6 text-white" />,
    },
    {
      href: "#",
      label: t("socials.twitter"),
      icon: <Twitter className="w-6 h-6 text-white" />,
    },
    {
      href: "#",
      label: t("socials.youtube"),
      icon: <Youtube className="w-6 h-6 text-white" />,
    },
    {
      href: "#",
      label: t("socials.instagram"),
      icon: <Instagram className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section className="text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-center lg:text-left"
          variants={itemVariants}
        >
          <p className="text-sm uppercase tracking-widest text-[#4bc4f2] mb-2 garet">
            {t("form.contact")}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight garet">
            {t("form.title").split(" ").slice(0, -1).join(" ")}{" "}
            <br className="sm:hidden lg:inline" />
            <span className="text-[#4bc4f2] garet">
              {t("form.title").split(" ").slice(-1)}
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl lg:mx-0 mx-auto garet">
            {t("form.subtitle")}
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            {socialLinks.map(({ href, label, icon }) => (
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

        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-lg lg:max-w-none mx-auto lg:mx-0"
          variants={itemVariants}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t("form.name")}
                className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("form.email")}
                className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={t("form.phone")}
                className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
              />
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white appearance-none pr-10"
                >
                  <option value="">{t("form.placeholderService")}</option>
                  <option value="web">{t("form.services.web")}</option>
                  <option value="mobile">{t("form.services.mobile")}</option>
                  <option value="ai">{t("form.services.ai")}</option>
                  <option value="consulting">
                    {t("form.services.consulting")}
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.096 6.924 4.682 8.338z" />
                  </svg>
                </div>
              </div>
            </div>

            <textarea
              id="comment"
              name="comment"
              rows={5}
              placeholder={t("form.message")}
              required
              className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
            ></textarea>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#4bc4f2] text-white font-semibold rounded-lg hover:bg-[#4bc4f2]"
            >
              {t("form.submit")}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FormSection;
