"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Instagram } from "lucide-react";

const stats = [
  {
    value: 8000,
    label: "Empresas que transformaram o WhatsApp em uma máquina de vendas.",
  },
  {
    value: 500000,
    label: "Atendimentos realizados com inteligência, empatia e agilidade.",
  },
  {
    value: 200000,
    label: "Conversas automatizadas que viraram reuniões, propostas e vendas.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#1e4b8f] text-white py-24 max-w-[89rem] mx-auto px-6 md:px-20 rounded-3xl  my-10">
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-widest text-white/80 mb-2 garet">
          Motivos para
        </p>
        <h2 className="text-3xl md:text-4xl font-bold garet">
          Automatizar com <br />
          <span className="italic underline decoration-white">a nossa IA:</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white/10 rounded-xl p-6 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <Instagram className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold mb-2 garet">
              <CountUp end={stat.value} duration={2} separator="," suffix="+" />
            </h3>
            <p className="text-white/80 text-sm garet">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
