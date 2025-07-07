"use client";

import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation, Trans } from "react-i18next";

// import { CheckCircle } from "lucide-react";

const Ourhistory = () => {
  const { t } = useTranslation("common");
  return (
    <section
      className="bg-[#0e0e0e] py-24 px-6 md:px-20 text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/about-pattern.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Card visual à esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative md:w-[600px] md:h-[600px] mx-auto">
            {/* Background glow (iluminação atrás da imagem) */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url('/tab-shadow.png')", // imagem de iluminação
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}
            />

            {/* Imagem principal */}
            <Image
              src="/story.png"
              width={600}
              height={600}
              alt="tabs"
              className="relative z-10"
            />
          </div>
        </motion.div>

        {/* Texto à direita */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm text-[#4bc4f2] uppercase tracking-widest mb-2 garet">
            {t("ourhistory.badge")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6 garet">
            <Trans
              i18nKey="ourhistory.title"
              components={[
                <br key="br" />,
                <span key="span" className="italic text-[#4bc4f2] garet" />,
              ]}
            />
          </h2>

          <p className="text-gray-300 mb-4 garet">
            {t("ourhistory.description1")}{" "}
            <span className="text-[#4bc4f2] garet">
              {t("ourhistory.description1Highlight")}
            </span>
          </p>
          <p className="text-gray-300 mb-6 garet">
            {t("ourhistory.description2")}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="bg-[#4bc4f2] hover:bg-[#1e4b8f] px-6 py-3 rounded-lg font-semibold text-white transition garet">
              {t("ourhistory.button")}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ourhistory;
