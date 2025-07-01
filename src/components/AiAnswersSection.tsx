"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

export default function AiAnswersSection() {
  const items = [
    "Crie uma base de conhecimento personalizada com a identidade do seu negócio.",
    "Utilize fontes confiáveis para respostas assertivas e estratégicas.",
    "Esteja sempre um passo à frente com IA que entende e responde com empatia e eficiência.",
  ];

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
          <p className="text-sm text-[#4bc4f2] uppercase tracking-widest mb-3">
            Respostas Inteligentes com IA
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Total{" "}
            <span className="italic underline decoration-[#4bc4f2]">
              Controle
            </span>{" "}
            de seus <br />
            clientes, conversas <br /> e atendimentos.
          </h2>

          <ul className="space-y-4 mb-8">
            {items.map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#4bc4f2] mt-1" />
                <span className="text-gray-300">{text}</span>
              </li>
            ))}
          </ul>

          <button className="bg-[#4bc4f2] hover:bg-[#1e4b8f] px-6 py-3 rounded-lg font-semibold text-white transition">
            Saiba mais
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
          <div className="relative w-[600px] h-[600px] mx-auto">
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
