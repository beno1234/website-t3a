"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

export default function TestimonialsSection() {
  const { t } = useTranslation("common");
  const testimonialsRaw = t("testimonials", { returnObjects: true });
  const testimonials = Array.isArray(testimonialsRaw) ? testimonialsRaw : [];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="bg-[#0e0e0e] text-white px-6 md:px-20 py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm text-[#4bc4f2] uppercase tracking-widest mb-2 garet">
          {t("testimonialsSection.badge")}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold garet">
          <Trans
            i18nKey="testimonialsSection.title"
            components={[
              <span
                key="1"
                className="italic underline decoration-[#4bc4f2] garet"
              />,
            ]}
          />
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className={`bg-[#1a1a1a] border border-white/5 rounded-xl p-6 transition-all duration-300 ${
              index === current
                ? "opacity-100 scale-100"
                : "opacity-60 scale-95"
            }`}
            animate={{ opacity: index === current ? 1 : 0.5 }}
          >
            {/* Stars */}
            <div className="text-yellow-400 mb-4">{"★".repeat(t.rating)} </div>

            {/* Text */}
            <p className="text-gray-300 text-sm mb-6 leading-relaxed garet">
              {t.content}
            </p>

            {/* Avatar and Info */}
            <div className="flex items-center gap-4 mt-auto">
              <Image
                src={t.avatar}
                alt={t.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-white garet">{t.name}</p>
                <p className="text-xs text-gray-400 garet">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full border-2 ${
              idx === current ? "bg-[#4bc4f2] border-[#4bc4f2]" : "border-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
