"use client";

import { motion } from "framer-motion";
import { PenTool, Search, Megaphone, Users, Share2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ServicesSection() {
  const { t } = useTranslation("common");
  const services = [
    {
      title: t("services.list.0.title"),
      description: t("services.list.0.description"),
      icon: <Megaphone className="w-5 h-5 text-[#4bc4f2]" />,
      id: "01",
    },
    {
      title: t("services.list.1.title"),
      description: t("services.list.1.description"),
      icon: <Share2 className="w-5 h-5 text-[#4bc4f2]" />,
      id: "02",
    },
    {
      title: t("services.list.2.title"),
      description: t("services.list.2.description"),
      icon: <Users className="w-5 h-5 text-[#4bc4f2]" />,
      id: "03",
    },
    {
      title: t("services.list.3.title"),
      description: t("services.list.3.description"),
      icon: <PenTool className="w-5 h-5 text-[#4bc4f2]" />,
      id: "04",
    },
    {
      title: t("services.list.4.title"),
      description: t("services.list.4.description"),
      icon: <Search className="w-5 h-5 text-[#4bc4f2]" />,
      id: "05",
    },
    {
      title: t("services.list.5.title"),
      description: t("services.list.5.description"),
      icon: (
        <div className="w-5 h-5">
          <svg fill="#4bc4f2" viewBox="0 0 24 24">
            <path d="M12 2L1.8 9l10.2 7 10.2-7L12 2z" />
          </svg>
        </div>
      ),
      highlight: true,
      id: "06",
    },
  ];
  return (
    <section className="bg-[#0e0e0e] py-20 px-6 md:px-16 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative bg-gradient-to-t from-black/20 to-black/5 border border-white/5 rounded-xl p-6 transition ${
              service.highlight ? "bg-[#4bc4f2] text-white" : "bg-[#141414]"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex items-center justify-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white garet">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold garet">{service.title}</h3>
            </div>

            <p className="text-sm text-gray-300 mb-6 garet">
              {service.description}{" "}
            </p>

            <div className="flex items-center justify-between text-xs text-white/30 font-semibold garet">
              <span>{service.id}</span>
              <span className="text-white font-medium flex items-center gap-1 garet">
                {t("services.cta")} <span className="text-lg">+</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
