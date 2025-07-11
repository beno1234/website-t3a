"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

// import { CheckCircle } from "lucide-react";

export default function AboutSection() {
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
              src="/tabs.png"
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
            {t("about.badge")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6 garet">
            {t("about.title")} <br />
            <span className="italic underline decoration-[#4bc4f2]">
              {t("about.highlight")}
            </span>{" "}
          </h2>

          <p className="text-gray-300 mb-4 garet">
            {t("about.p1")}{" "}
            <span className="text-[#4bc4f2]">{t("about.p1Highlight")}</span>
          </p>
          <p className="text-gray-300 mb-6 garet">{t("about.p2")}</p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="bg-[#4bc4f2] hover:bg-[#1e4b8f] px-6 py-3 rounded-lg font-semibold text-white transition garet">
              {t("about.cta")}
            </button>

            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-[#4bc4f2]">4.7</span>
              <div className="flex items-center gap-1 text-yellow-400">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-sm">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-white/70 garet">
                {t("about.rating")}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
