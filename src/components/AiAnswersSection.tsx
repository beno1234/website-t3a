"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { useTranslation, Trans } from "react-i18next";

export default function AiAnswersSection() {
  const { t } = useTranslation("common");
  const items = t("ai.items", { returnObjects: true });
  const itemsArray = Array.isArray(items) ? items : [];
  return (
    <section className="bg-[#0e0e0e] text-white px-6 md:px-20 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-[#4bc4f2] uppercase tracking-widest mb-3 garet">
            {t("ai.badge")}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight garet">
            <Trans
              i18nKey="ai.title"
              components={[
                <span
                  key="1"
                  className="italic underline decoration-[#4bc4f2]"
                />,
              ]}
            />
          </h2>

          <ul className="space-y-4 mb-8">
            {itemsArray.map((text: string, index: number) => (
              <li key={index} className="flex items-start gap-3 garet">
                <Check className="w-5 h-5 text-[#4bc4f2] mt-1" />
                <span className="text-gray-300">{text}</span>
              </li>
            ))}
          </ul>

          <button className="bg-[#4bc4f2] hover:bg-[#1e4b8f] px-6 py-3 rounded-lg font-semibold text-white transition garet">
            {t("ai.cta")}
          </button>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative md:w-[600px] md:h-[600px] mx-auto">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url('/tab-shadow.png')", // imagem de iluminação
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
              }}
            />

            {/* Imagem principal */}
            <Image
              src="/faq.png"
              width={600}
              height={600}
              alt="tabs"
              className="relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
