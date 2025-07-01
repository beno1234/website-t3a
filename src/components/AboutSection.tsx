"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import { CheckCircle } from "lucide-react";

export default function AboutSection() {
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
          <div className="relative w-[600px] h-[600px] mx-auto">
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
          <p className="text-sm text-purple-400 uppercase tracking-widest mb-2">
            Sobre nós
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
            Construindo liberdade <br />
            <span className="italic underline decoration-purple-500">
              com tecnologia.
            </span>{" "}
          </h2>

          <p className="text-gray-300 mb-4">
            Na T3A, acreditamos que pequenas e médias empresas merecem crescer
            com autonomia, eficiência e foco no que realmente importa. Por isso,
            criamos soluções que automatizam o atendimento, captam leads
            qualificados e transformam interações simples em vendas reais
            <span className="text-purple-400">
              {" "}
              tudo com o poder da inteligência artificial.
            </span>
          </p>
          <p className="text-gray-300 mb-6">
            Nosso objetivo é claro: fazer a tecnologia trabalhar por você,
            enquanto sua empresa escala com leveza, agilidade e liberdade.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold text-white transition">
              Saiba mais
            </button>

            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-purple-400">4.7</span>
              <div className="flex items-center gap-1 text-yellow-400">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-sm">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-white/70">
                Satisfação de quem já vende com IA.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
